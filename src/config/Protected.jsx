import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { message } from "antd";

const Protected = ({ element: Component }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkUserAuth = async () => {
        try {
            //   const response = await checkInUser();
            const response = { success: true }
            if (response?.success) {
                setIsAuthenticated(true);
                // dispatch(setUser(response?.user));
            } else {
                setIsAuthenticated(false);
                message.error(response?.message);
            }
        } catch (err) {
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkUserAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/editor" />;
    }

    return <Component />;
};

export default Protected;

export const isValidTag = (tag) => {
    const regex = /^[A-Za-z0-9\s]+$/;
    return regex.test(tag);
};