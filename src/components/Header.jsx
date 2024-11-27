import React from "react";
import logoimage from "../../public/logo-image.webp";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logoimage} alt="" title="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
