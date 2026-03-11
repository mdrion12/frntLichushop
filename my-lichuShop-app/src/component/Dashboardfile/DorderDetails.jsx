import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DorderDetails.css";

const DorderDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const accessToken = localStorage.getItem("access");

    useEffect(() => {
        fetch(`https://lichushop-1.onrender.com/orderdetails/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        })
            .then(res => res.json())
            .then(item => setData(item))
            .catch(e => console.log(e));
    }, [id, accessToken]);

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
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.productlist && data.productlist.length > 0 ? (
                            data.productlist.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_description}</td>
                                    <td>{product.product_price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.product_price * product.quantity}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DorderDetails;