import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customer">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rental">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
