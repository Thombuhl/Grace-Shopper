import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div className="dropdown show bg-dark px-2">
                <a
                  className="btn btn-secondary dropdown-toggle text-warning"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/mens" className="dropdown-item text-warning">
                    Mens
                  </Link>
                  <Link to="/womens" className="dropdown-item text-warning">
                    Womens
                  </Link>
                  <Link to="/unisex" className="dropdown-item text-warning">
                    Unisex
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown show bg-dark">
                <Link
                  to="/"
                  className="btn btn-secondary dropdown-toggle text-warning"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Brands
                </Link>
                <div
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link to="/nike" className="dropdown-item text-warning">
                    Nike
                  </Link>
                  <Link to="/adidas" className="dropdown-item text-warning">
                    Adidas
                  </Link>
                  <Link to="/jordans" className="dropdown-item text-warning">
                    Jordans
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <Link
            className=" btn btn-lg navbar-brand mx-auto text-warning"
            to="/"
          >
            <img className="logo" src="public/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="btn btn-lg nav-link text-warning" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-lg nav-link text-warning" to="/signup">
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default connect()(Nav);
