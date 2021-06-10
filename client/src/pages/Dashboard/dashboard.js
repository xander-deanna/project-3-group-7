import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Navigation from "../../components/Navigation"

import Explore from "../../components/Explore"
import About from "../About/About";
import Gallery from "../../components/Gallery";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Router>
      <nav class="navbar is-info	fixed-top">
        <div class="container">
          <div class="collapse navbar-collapse" >
          <a class="nav-item">
                <Link class="nav-link" to={"/dashboard/about"}>About</Link>
              </a>

              <a class="nav-item">
                <Link class="nav-link" to={"/dashboard/explore"}>Explore</Link>
              </a>

              <a class="nav-item">
                <Link class="nav-link" to={"/dashboard/gallery"}>Gallery</Link>
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
      {/* <Navigation/> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          test
          {/* <Switch>
            <Route path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/explore" component={Explore} />
            <Route path="/gallery" component={Gallery} />
          </Switch> */}
        </div>
      </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);


