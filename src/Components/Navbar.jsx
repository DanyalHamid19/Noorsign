import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#8EE5EC" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <span style={{ fontWeight: "bold" }}>Noor Sign </span>
            <br />
            <span style={{ fontStyle: "italic" }}>One Call Does It All</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              {" "}
              {/* mx-auto centers the links */}
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" to="/contactUs">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  to="/franchise-opportunities"
                >
                  Franchise Opportunities
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
