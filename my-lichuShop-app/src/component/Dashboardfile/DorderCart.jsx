import React, { useState } from 'react';
import "./DorderCart.css";
import { Link } from 'react-router-dom';

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
        console.log(data);
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
        <div className="order-row">

            <p>{data.phone_number.name}</p>

            <p>{data.phone_number.phone_number || "N/A"}</p>

            <p>{data.total_price}</p>

            <p className={`status ${status}`}>
                {status}
            </p>

            <p>{new Date(data.created_at).toLocaleString()}</p>

            <div className="status-action">

                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >
                    {STATUS_CHOICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <button onClick={changeStatus}>
                    Update
                </button>
                <button  >
                    <Link to={`${data.id}`}>details</Link>
                </button>
            </div>

        </div>
    );
};

export default DorderCart;