import React, { useContext, useState } from "react";
import logoimage from "../../public/logo-image.webp";
import { NavLink } from "react-router";
import useOnlineStatus from "../Helper/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");

  const { loggedinUser } = useContext(UserContext);

  const handleClick = () => {
    loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
  };
  const showOnline = useOnlineStatus();

  const cartItems = useSelector((state) => state?.cart?.cartItems);

  return (
    <div>
      <div className="header bg-green-100 w-11">
        <div className="logo">
          <img src={logoimage} className="w-48" alt="" title="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <strong>Online Status:</strong>
              {showOnline === true ? (
                <>
                  {/* <span className="green"></span>  */}
                  🟢
                </>
              ) : (
                <>
                  {/* // <span className="red"></span> */}
                  🔴
                </>
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
                Cart{" "}
                <span className="bg-white text-xs font-bold rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/grocery" end className="link">
                Grocery
              </NavLink>
            </li>
            <li onClick={handleClick} className="login-link">
              {loginState}
            </li>
            <li className="login-link">{loggedinUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
