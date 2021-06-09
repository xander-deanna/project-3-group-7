import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navigation extends Component {
  render() {
    return (
      <nav class="navbar is-info	fixed-top">
        <div class="container">
          <div class="collapse navbar-collapse" >
          <a class="nav-item">
                <Link class="nav-link" to={"/about"}>About</Link>
              </a>

              <a class="nav-item">
                <Link class="nav-link" to={"/explore"}>Explore</Link>
              </a>

              <a class="nav-item">
                <Link class="nav-link" to={"/gallery"}>Gallery</Link>
              </a>
            <a class="navbar-nav ml-auto">
              <button
                onClick={this.onLogoutClick}
              >
                Logout
            </button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

