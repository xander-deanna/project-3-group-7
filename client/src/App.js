import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { setCurrentUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// components imports
import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";

// page imports
import Explore from "./pages/Explore/Explore"
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.userID) {
  // Set auth token header auth
  const token = localStorage.userID;
  // setAuthToken(token);
  // Decode token and get user info and exp

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(token));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());
  //   // Redirect to login
  //   window.location.href = "./login";
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>

              {/* Auth Pages */}
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

              {/* Private Account Pages */}
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/explore" component={Explore} />
              <PrivateRoute exact path="/gallery" component={Gallery} />

            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
