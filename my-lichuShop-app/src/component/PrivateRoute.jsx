import React from 'react';
import { useauth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isLogin } = useauth();

    if (!isLogin) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;