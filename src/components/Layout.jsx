import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../store";

const Layout = () => {
  const [userName, setUserName] = useState();
  // make an APi call to send the user name and password
  useEffect(() => {
    const data = {
      name: "Bhargav Gopal",
    };
    setUserName(data.name);
  }, []);
  
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

export default Layout;
