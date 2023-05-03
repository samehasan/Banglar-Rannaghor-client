/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Menubar-container">
      <h2>BANGLAR RANNAGHAR</h2>
      <div className="menu-container">
         <Link to="/">
          <li>Home</li>
        </Link> 
        <Link to="/services">
          <li>CHEFs</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        {user?.email ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
        {/* <li>{user?.email}</li> */}
        <Link to="/register">
          <li>Registration</li>
        </Link>
       
      </div>
    </div>
  );
};

export default Menubar;
