import React from 'react';
import { Link } from 'react-router-dom';
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
    return (
        <div className='dashboard-navbar'>
            <ul>
                <li><Link to={"product"}>Products</Link></li>
                <li><Link to={"order"}>Order</Link></li>
            </ul>
        </div>
    );
};

export default DashboardNavbar;