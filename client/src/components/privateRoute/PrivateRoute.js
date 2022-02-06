import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils";

function PrivateRoute({ children }) {
    return isLoggedIn() ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
