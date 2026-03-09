import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {

    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOrder = async () => {

        if (!name || !phone || !address) {
            alert("Please fill all fields");
            return;
        }

        const payload = {
            Customer: {
                name: name,
                phone_number: phone,
                address: address
            },
            product: cart.map(item => ({
                product_id: item.id,
                quantity: 1
            }))
        };

        console.log("Sending payload:", payload);

        try {

            setLoading(true);

            const response = await fetch(
                "https://lichushop-1.onrender.com/ordercreation/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            const data = await response.json();
            console.log("Server response:", data);

            if (!response.ok) {
                alert("Order failed");
                return;
            }

            setOrderPlaced(true);
            clearCart();

        } catch (error) {
            console.log(error);
            alert("Order error");
        }

        setLoading(false);
    };

    if (cart.length === 0 && !orderPlaced) {
        return <h2>Cart is empty</h2>;
    }

    return (
        <div className="cart-container">

            {!orderPlaced ? (
                <>
                    <h2>My Cart ({cart.length})</h2>

                    {cart.map((item) => (

                        <div key={item.id} className="cart-item">

                            <h4>{item.product_name}</h4>
                            <p>৳ {item.price}</p>

                            <button
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                    <div className="order-form">

                        <h3>Place Order</h3>

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <button onClick={handleOrder} disabled={loading}>

                            {loading ? "Ordering..." : "Place Order"}

                        </button>

                    </div>
                </>
            ) : (

                <div>

                    <h2>Order Successful 🎉</h2>

                    <p>Thank you {name}</p>
                    <p>We will call you at {phone}</p>

                </div>

            )}

        </div>
    );
};

export default Cart;