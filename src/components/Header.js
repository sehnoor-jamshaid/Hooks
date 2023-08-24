import React from "react";
import { ReactDOM } from "react";
import Logo from "../../images/Logo.png"
const Header = () => {
    return (
      <div className="header_container">
        <div className="logo_container">
          <img src={Logo} alt="logo" className="image_logo" />
        </div>
        <div className="menu_items_cont">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;