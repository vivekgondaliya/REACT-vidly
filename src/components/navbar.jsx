import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vivdly
      </a>
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
          <a className="nav-item nav-link active" href="#">
            Movies <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Customers
          </a>
          <a className="nav-item nav-link" href="#">
            Rentals
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
