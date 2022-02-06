import React, { useContext } from "react";
import NavBar from "./navBar/NavBar";
import { NavContexte } from "../../src/App";
function Layout({ children }) {
    const scrollValue = useContext(NavContexte);

    return (
        <div>
            <NavBar scrollValue={scrollValue} />
            {children}
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
