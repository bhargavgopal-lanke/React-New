import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyRes from "./src/components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyRes />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
