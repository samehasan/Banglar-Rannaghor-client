/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";
import Home from "../../pages/Home/Home";
import Footer from "../../pages/Footer/Footer";

const LoginLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default LoginLayout;
