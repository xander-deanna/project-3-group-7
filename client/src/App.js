import React from 'react';
// import '../node_modules/bulma/css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/login.component";
import SignUp from "./pages/Signup/signup.component";
import Search from "./components/Search/explore"
import About from "./pages/About/about"
import Gallery from "./pages/Gallery/gallery"
import Navigation from './components/Navigation';


function App() {
  return (<Router>
    <div class="App">
      <Navigation />
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
