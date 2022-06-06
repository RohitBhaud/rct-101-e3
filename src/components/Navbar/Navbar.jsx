import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { AuthContext } from "../../context/AuthContext";
import {useContext} from 'react';

const Navbar = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div data-cy="navbar" className="navbar">
      <Link data-cy="navbar-home-link" to="">
        logo
      </Link>
      <div className="cart">
        <span data-cy="navbar-cart-items-count">Cart : {0}</span>
        <button data-cy="navbar-login-logout-button">{isAuth? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
