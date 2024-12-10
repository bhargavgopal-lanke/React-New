import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyRes from "./src/components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
// import About from "./src/components/HeaderSubRoutes/About";
// import Contact from "./src/components/HeaderSubRoutes/Contact";
import Cart from "./src/components/HeaderSubRoutes/Cart";
import RestaurentMenu from "./src/components/RestaurentMenu";
import UseClass from "./src/components/HeaderSubRoutes/AboutClass";
import ContactComponent from "./src/components/HeaderSubRoutes/ContactClass";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyRes />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./src/components/Grocery"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<UseClass />} />
      <Route path="/contact" element={<ContactComponent />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/restuarent/:resId" element={<RestaurentMenu />} />
      <Route
        path="/grocery"
        element={
          <Suspense>
            <Grocery />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
