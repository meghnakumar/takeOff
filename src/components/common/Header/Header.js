import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => (
  <div className="fixed-top">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Take Off</a>
        <img src="../../../assets/images/flight.png" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flights">Flights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">Hotels</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bus">Bus</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/tour-packages">Tour Packages</Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/offers">Offers</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
