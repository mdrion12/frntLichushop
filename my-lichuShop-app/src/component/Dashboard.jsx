import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <DashboardNavbar></DashboardNavbar>
            <Outlet />
        </div>

    );
};

export default Dashboard;