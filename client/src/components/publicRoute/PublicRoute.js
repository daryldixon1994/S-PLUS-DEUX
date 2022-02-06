import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils";

function PublicRoute({ children }) {
    return isLoggedIn() ? <Navigate to="*" /> : children;
}

export default PublicRoute;
