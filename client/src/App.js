import React from 'react';
// import '../node_modules/bulma/css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/login.component";
import SignUp from "./components/Signup/signup.component";
import Search from "./components/Search/explore"
import About from "./components/About/about"
import Gallery from "./components/Gallery/gallery"


function App() {
  return (<Router>
    <div class="App">
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

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={About} />
            <Route path="/about" component={About} />
            <Route path="/explore" component={Search} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
