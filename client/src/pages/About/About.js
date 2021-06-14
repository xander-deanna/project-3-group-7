import React from "react";
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

// navbar component
import Navigation from "../../components/Navigation/Navigation";

const About = () => (
    <div style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%', }}>
        <Navigation/>
        <article className="message">
            <div className="message-header">
                <p>About the site</p>
            </div>
            <div className="message-body">
                <p>Hello, and welcome to <strong>(ME)seum</strong>!</p><br/>
                
                <p>We're so glad you decided to check out our site. (ME)seum is a digital art browser, where you can search and learn about a wide variety of works of art from all around the world. Just visit the <Link className="nav-link" to={"/explore"}><strong>explore</strong></Link> page to begin your search.</p><br/>
                
                <p>On the explore page, just favorite a work of art to add it to your own personal <Link className="nav-link" to={"/gallery"}><strong>gallery</strong></Link>! You can also rearrange the art on this page to your liking.</p>
            </div>
        </article>
    </div>
);

export default About