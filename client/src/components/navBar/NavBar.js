import React from "react";
import logo_s from "./coloc.svg";
import "./NavBar.css";
const NavBar = ({ scrollValue }) => {
    console.log(scrollValue);
    return (
        <div id="nav-container">
            <nav className={scrollValue >= 250 ? "change-nav" : null}>
                <div id="logo">
                    <img src={logo_s} alt="logo" />
                    {/* <span className="logo-title">ikrili</span> */}
                </div>
                <div>
                    <div
                        className={
                            scrollValue >= 250
                                ? "search-bar"
                                : "hidden-search-bar"
                        }
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search..."
                        />
                        <span class="btn">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <ul>
                    <li>
                        <a
                            href="/"
                            style={
                                scrollValue >= 250 ? { color: "white" } : null
                            }
                        >
                            Acceuil
                        </a>
                    </li>
                    <li>
                        <a
                            href="/recommandation"
                            style={
                                scrollValue >= 250 ? { color: "white" } : null
                            }
                        >
                            Recommandation
                        </a>
                    </li>
                    <li>
                        <a
                            href="/login"
                            style={
                                scrollValue >= 250 ? { color: "white" } : null
                            }
                        >
                            Se connecter
                        </a>
                    </li>
                    <li>
                        <a
                            href="/register"
                            style={
                                scrollValue >= 250 ? { color: "white" } : null
                            }
                        >
                            Créer un compte
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
