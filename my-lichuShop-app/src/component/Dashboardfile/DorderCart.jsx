import React, { useState } from 'react';
import "./DorderCart.css";

const STATUS_CHOICES = [
    "pending",
    "approved",
    "rejected",
    "delivered"
];

const DorderCart = ({ data }) => {

    const [status, setStatus] = useState(data.status);
    const [selectedStatus, setSelectedStatus] = useState(data.status);

    const changeStatus = async () => {

        const accessToken = localStorage.getItem("access");

        try {

            const res = await fetch(
                `https://lichushop-1.onrender.com/order_Status_change/${data.id}/${selectedStatus}/`,
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                }
            );

            if (res.ok) {
                setStatus(selectedStatus);
                alert("Status Updated");
            } else {
                alert("Failed to update status");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="order-card">

            <p><strong>Order ID:</strong> {data.id}</p>

            <p><strong>Phone:</strong> {data.phone_number?.number || "N/A"}</p>

            <p><strong>Total Price:</strong> {data.total_price}</p>

            <p>
                <strong>Status:</strong>
                <span className="status-text">{status}</span>
            </p>

            <p><strong>Created:</strong> {new Date(data.created_at).toLocaleString()}</p>

            <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="status-select"
            >
                {STATUS_CHOICES.map(s => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>

            <button className="status-btn" onClick={changeStatus}>
                Submit
            </button>

        </div>
    );
};

export default DorderCart;