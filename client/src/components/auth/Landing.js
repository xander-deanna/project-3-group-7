import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background1 from "../../images/background1.jpg";
import Background2 from "../../images/background2.jpg";
import Background3 from "../../images/background3.jpg";
import Background4 from "../../images/background4.jpg";
import Background5 from "../../images/background5.jpg";
import Background6 from "../../images/background6.jpg";
import Background7 from "../../images/background7.jpg";
import Background8 from "../../images/background8.jpg";
import Background9 from "../../images/background9.jpg";
import Background10 from "../../images/background10.jpg";

const imgMap = [Background1, Background2, Background3, Background3, Background4, Background5, Background6, Background7, Background8, Background9, Background10]

let BackgroundImage = imgMap[Math.floor(Math.random() * imgMap.length)];

class Landing extends Component {
  render() {
    return (
      <div style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%', }}
        className="valign-wrapper">
        <div className="row box">
          <div className="col s12 center-align">
            <p className="flow-text">Welcome to (ME)seum!</p>
            <p className="flow-text grey-text text-darken-1">
              Log in to explore and create your own art gallery!
            </p>
            <img src=''/>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  letterSpacing: "1.5px"
                }}
                className="button is-light hoverable waves-effect"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  letterSpacing: "1.5px"
                }}
                className="button is-outlined hoverable"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;

