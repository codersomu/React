import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
function Header() {
  return (
    <header className="">
      <div>
        <div className="logo">
          <span>Facebook</span>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registartion</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
