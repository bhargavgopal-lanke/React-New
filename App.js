import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyRes from "./src/components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./src/components/HeaderSubRoutes/About";
import Contact from "./src/components/HeaderSubRoutes/Contact";
import Cart from "./src/components/HeaderSubRoutes/Cart";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyRes />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);
