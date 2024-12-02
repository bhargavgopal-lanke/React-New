import React, { useState } from "react";
import logoimage from "../../public/logo-image.webp";

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
            <li>Home</li>
            <li>About Us</li>
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
