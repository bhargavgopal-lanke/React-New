import React from "react";
import ReactDOM from "react-dom/client";
import logoimage from "./public/logo-image.webp";

const HeaderComponent = () => {
  return (
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
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
