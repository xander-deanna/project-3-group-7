import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bulma-components';
// import '../../App.css'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navigation extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <Link className="nav-link logo" to={"/about"}><strong>(<strong className="logo-blue">ME</strong>)<strong>seum</strong></strong></Link>

          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>

          {/* very hacky way of getting navbar items centered, please don't delete. */}
          <Navbar.Container />
          <Navbar.Container />
          {/* -- end weird hackyness -- */}

          <Navbar.Container>
            <Navbar.Item>
              <Link className="nav-link" to={"/about"}><strong>ABOUT</strong></Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link className="nav-link" to={"/explore"}><strong>EXPLORE</strong></Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link className="nav-link" to={"/gallery"}><strong>GALLERY</strong></Link>
            </Navbar.Item>
          </Navbar.Container>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button
                  onClick={this.onLogoutClick}
                  className="button is-light">
                  <strong>LOGOUT</strong>
            </button>
              </div>
            </div>
          </div>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);