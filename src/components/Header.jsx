import React, { useState } from "react";
import logoimage from "../../public/logo-image.webp";
import { NavLink } from "react-router";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const handleClick = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logoimage} alt="" title="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/" end className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end className="link">
                About Us
              </NavLink>
            </li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li onClick={handleClick} className="login-link">
              {loginState}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
