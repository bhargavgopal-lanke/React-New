import React from "react";
import Header from "./Header";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="body-sec">
        <div>
          <h1>Oops!!</h1>
          <h2>Something went wrong!!</h2>
        </div>
      </div>
    </div>
  );
};

export default Error;
