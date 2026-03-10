import React, { useEffect, useState } from 'react';
import DproductCart from './DproductCart';
import "../Dashboardfile/Dproducts.css"

const Dproducts = () => {
    const [data, setdata] = useState([])
    useEffect(() => {

        fetch('https://lichushop-1.onrender.com/productList/').then(res => res.json()).then(item => setdata(item)).catch(e => console.log(e))
    }, [])

    return (
        <div className="dproducts-container">
            {
                data.map(item => <DproductCart data={item}></DproductCart>)
            }
        </div>
    );
};

export default Dproducts;