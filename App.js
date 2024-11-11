import React from "react";
import reactDOM from "react-dom/client";

const headerComponent = () => {
  return <h1>This is a header component</h1>;
};

const mainComponent = () => {
  return <h2>This is a main component.</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<mainComponent />);
