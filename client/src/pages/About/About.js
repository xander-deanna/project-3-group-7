import React from "react";
import { Link } from "react-router-dom";

// navbar component
import Navigation from "../../components/Navigation/Navigation";

const About = () => (
    <div>
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