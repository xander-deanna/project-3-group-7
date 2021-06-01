import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';

import "./style.css";


function Navigation() {
    return (
        <p>Temporary Navbar Here:
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/explore"
                        className={window.location.pathname === "/explore" ? "nav-link active" : "nav-link"}
                        > Explore</Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/gallery"
                        className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}
                        >Gallery</Link>
                </li>
            </ul>
        </p>
    );
}

export default Navigation;