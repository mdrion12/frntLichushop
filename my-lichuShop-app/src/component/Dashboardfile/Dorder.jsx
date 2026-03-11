import React, { useEffect, useState } from 'react';
import DorderCart from './DorderCart';

const STATUS_CHOICES = [
    "pending",
    "approved",
    "rejected",
    "delivered"
];

const Dorder = () => {

    const [data, setdata] = useState([]);
    const [status, setStatus] = useState("pending");

    const accesstoken = localStorage.getItem("access");

    useEffect(() => {

        fetch(`https://lichushop-1.onrender.com/order/${status}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accesstoken}`
            }
        })
            .then(res => res.json())
            .then(item => setdata(item || []))
            .catch(e => console.log(e))

    }, [status]);

    return (
        <div className="dorders-container">

            {/* Dropdown */}
            <div className='btn-class'>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {STATUS_CHOICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            {/* Header */}
            {/* Header */}
            <div className="order-header">
                <div>ID</div>
                <div>Phone</div>
                <div>Price</div>
                <div>Status</div>
                <div>Created</div>
                <div>Action</div>
            </div>

            {/* Orders */}
            {
                data.map(item => (
                    <DorderCart key={item.id} data={item}></DorderCart>
                ))
            }

        </div>
    );
};

export default Dorder;