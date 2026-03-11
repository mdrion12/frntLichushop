import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DorderDetails.css";

const DorderDetails = () => {
    const { id } = useParams();
    const [data, setdata] = useState(null);
    const accesstoken = localStorage.getItem("access");

    useEffect(() => {
        fetch(`https://lichushop-1.onrender.com/orderdetails/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accesstoken}`
            }
        })
            .then(res => res.json())
            .then(item => setdata(item))
            .catch(e => console.log(e))
    }, [id, accesstoken]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="order-details-container">
            {/* Customer Info */}
            <div className="customer-info">
                <h2>Customer Details</h2>
                <p><strong>Name:</strong> {data.customer_name}</p>
                <p><strong>Phone:</strong> {data.phone_number}</p>
                <p><strong>Address:</strong> {data.Objectaddress}</p>
            </div>

            {/* Products Table */}
            <div className="products-table">
                <h2>Products Ordered</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.productlist.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {product.product_image ? (
                                        <img
                                            src={product.product_image}
                                            alt={product.product_name}
                                            className="product-img"
                                        />
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </td>
                                <td>{product.product_name}</td>
                                <td>{product.product_description}</td>
                                <td>{product.product_price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.product_price * product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DorderDetails;