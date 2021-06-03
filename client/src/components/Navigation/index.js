import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';

import "./style.css";


function Navigation() {
    return (
        <nav class="navbar is-primary fixed-top">
            <div class="container">
                <Link className="navbar-brand" to={"/sign-in"}></Link>
                <div class="collapse navbar-collapse" >
                    <a class="navbar-nav ml-auto">
                        <a class="nav-item">
                            <Link class="nav-link" to={"/about"}>About</Link>
                        </a>

                        <a class="nav-item">
                            <Link class="nav-link" to={"/explore"}>Explore</Link>
                        </a>

                        <a class="nav-item">
                            <Link class="nav-link" to={"/gallery"}>Gallery</Link>
                        </a>

                        <a class="nav-item">
                            <Link class="nav-link" to={"/sign-in"}>Login</Link>
                        </a>

                        <a class="nav-item">
                            <Link class="nav-link" to={"/sign-up"}>Sign up</Link>
                        </a>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;