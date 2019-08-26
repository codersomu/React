import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
function Header() {
  return (
    <header className="">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Link to="/">
          {" "}
          <h5 className="my-0 mr-md-auto font-weight-normal">Arvind</h5>
        </Link>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">
            Features
          </a>
          <a className="p-2 text-dark" href="#">
            Enterprise
          </a>
          <a className="p-2 text-dark" href="#">
            Support
          </a>
          <a className="p-2 text-dark" href="#">
            Pricing
          </a>
        </nav>
        <Link to="/registration" className="btn btn-outline-primary">
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header;
