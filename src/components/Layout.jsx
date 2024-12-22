import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import UserContext from "../utils/UserContext";

const Layout = () => {
  const [userName, setUserName] = useState();
  // make an APi call to send the user name and password
  useEffect(() => {
    const data = {
      name: "Bhargav",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Layout;
