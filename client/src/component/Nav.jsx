/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id='nav'>
      <div id='home-wrap'>
        <Link to={"/"}>Daily View</Link>
      </div>
      <div id='nav-items-wrap'>
        <Link to={"/about"}>About</Link>
        <Link to={"/upload"}>Upload</Link>
        <Link to={"/logIn"}>Log In</Link>
      </div>
    </div>
  );
};

export default Nav;
