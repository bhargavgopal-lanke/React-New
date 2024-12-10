import React, { useState } from "react";
import logoimage from "../../public/logo-image.webp";
import { NavLink } from "react-router";
import useOnlineStatus from "../Helper/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const handleClick = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };
  const showOnline = useOnlineStatus();

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logoimage} alt="" title="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              {showOnline === true ? (
                <span className="green"></span>
              ) : (
                <span className="red"></span>
              )}
            </li>
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
            <li>
              <NavLink to="/contact" end className="link">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" end className="link">
                Cart
              </NavLink>
            </li>
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
