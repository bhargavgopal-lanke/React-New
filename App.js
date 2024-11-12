import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return <h1>This is a header component</h1>;
};

const MainComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <h2>This is a main component.</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
