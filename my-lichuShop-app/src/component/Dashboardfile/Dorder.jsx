import React, { useEffect, useState } from 'react';
import DorderCart from './DorderCart';

const Dorder = () => {
    const [data, setdata] = useState([]);
    const accesstoken = localStorage.getItem("access");
    useEffect(() => {
        fetch("https://lichushop-1.onrender.com/order/", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accesstoken}`
            }
        }).then(res => res.json()).then(item => setdata(item || [])).catch(e => console.log(e))


    }, [])
    return (
        <div className="dorders-container">
            {
                data.map(item => <DorderCart data={item}></DorderCart>)
            }
        </div>
    );
};

export default Dorder;