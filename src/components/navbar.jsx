import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vivdly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Movies <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/customer">
            Customers
          </Link>
          <Link className="nav-item nav-link" to="/rental">
            Rentals
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
