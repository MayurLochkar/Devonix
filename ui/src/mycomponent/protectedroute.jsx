import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';

const ProtectedRoute = ({ children }) => {
    // AuthContext se user ki jaankari nikalte hain
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        // Agar user logged in NAHI hai, toh use '/signin' page par bhej do
        return <Navigate to="/signin" />;
    }

    // Agar user logged in HAI, toh usse woh page dikha do jo woh dekhna chahta tha
    return children;
};

export default ProtectedRoute;
