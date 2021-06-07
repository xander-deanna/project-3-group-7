import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <nav class="navbar is-info	fixed-top">
        <div class="container">
          <div class="collapse navbar-collapse" >
            <a>About</a>
            <a>Explore</a>
            <a>Gallery</a>
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


