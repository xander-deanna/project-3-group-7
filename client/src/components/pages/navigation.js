import React, { Component } from "react";
import { BrowserRouter as Route, } from "react-router-dom";

import Search from "./Search/explore"
import About from "./About/about"

class navigation extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Route path="/about" component={About} />
            <Route path="/explore" component={Search} />
          </div>
        </nav>
      </div>
    );
  }
}

export default navigation;

