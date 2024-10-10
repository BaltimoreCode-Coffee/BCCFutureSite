import "./Footer.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faSlack
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <span className="email"><a href="">bmorecodecoffee@gmail.com</a></span>
      </div>
      <div className="menus">
      <div className="mini-menu" id="events">
        <h4>Event</h4>
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>  
        </ul>
      </div>
      <div className="mini-menu" id="resources">
        <h4>About Us</h4>
        <ul>
          <li>Our Story</li>
          <li>Our Works</li>
        </ul>
      </div>
        <div className="mini-menu" id="Volunteer">
            <h4>Volunteer</h4>
            <ul>
                <li>FAQs</li>
                <li>Join us</li>
            </ul>
        </div>
      </div>
      
        
      <div className="bottom-half"> 
        <p>© 2024 Baltimore Code and Coffee All rights reserved.</p>
        <ul className="social-list">
          <li>
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faSlack} />
          </li>
        </ul>
      </div>
     
    </footer>
  );
}

export default Footer;
