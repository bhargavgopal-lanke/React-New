import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import BodyRes from "./src/components/Body";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./src/components/HeaderSubRoutes/About";
import Contact from "./src/components/HeaderSubRoutes/Contact";
import Cart from "./src/components/HeaderSubRoutes/Cart";
import RestaurentMenu from "./src/components/RestaurentMenu";
// import UseClass from "./src/components/HeaderSubRoutes/AboutClass";
// import ContactComponent from "./src/components/HeaderSubRoutes/ContactClass";
import Layout from "./src/components/Layout";

const AppLayout = () => {
  const Grocery = lazy(() =>
    import("./src/components/HeaderSubRoutes/Grocery")
  );

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BodyRes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
