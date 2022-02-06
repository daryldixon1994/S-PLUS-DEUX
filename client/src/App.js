import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Switch  to let each route work by itself
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Recommandation from "./components/recommandation/Recommandations";
import Admin from "./components/admin/Admin";
import PublicRoute from "./components/publicRoute/PublicRoute";
import WrongPath from "./components/wrong/WrongPath";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AdminRoute from "./components/adminRoute/AdminRoute";

export const NavContexte = React.createContext();

function App() {
    const [offset, setOffset] = useState(0);
    const onScroll = () => setOffset(window.pageYOffset);
    useEffect(() => {
        // clean up code
        window.addEventListener("scroll", onScroll, { passive: true });
        // window.removeEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="App">
            <div className="App-container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <NavContexte.Provider value={offset}>
                                <Layout>
                                    <Home />
                                </Layout>
                            </NavContexte.Provider>
                        }
                    />
                    <Route
                        path="/recommandation"
                        element={
                            <NavContexte.Provider value={offset}>
                                <Layout>
                                    <Recommandation />
                                </Layout>
                            </NavContexte.Provider>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <Register />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route path="*" element={<WrongPath />} />
                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <Admin />
                            </AdminRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
