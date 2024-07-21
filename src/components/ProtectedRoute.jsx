/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return isLoggedIn ? Component : <Navigate to="/" />;
};

export default ProtectedRoute;
