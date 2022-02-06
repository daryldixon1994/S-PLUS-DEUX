import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoggedIn, isAdmin } from "../../utils";

function AdminRoute({ children }) {
    // console.log("rest", { ...rest });
    return isLoggedIn && isAdmin ? children : <Navigate to="*" />;
}

export default AdminRoute;
