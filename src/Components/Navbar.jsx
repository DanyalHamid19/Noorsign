import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    // Update selectedPage whenever the location changes
    const path = location.pathname.substring(1); // Remove leading slash
    setSelectedPage(path || "home"); // Set default to "home" if path is empty
  }, [location.pathname]);

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
            <span style={{ fontWeight: "bold", color: "#000" }}>
              Noor Sign{" "}
            </span>
            <br />
            <span style={{ fontStyle: "italic", color: "#000" }}>
              One Call Does It All
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 ${
                    selectedPage === "home" && "active"
                  }`}
                  to="/"
                  style={{
                    color: selectedPage === "home" ? "#006ACB" : "#000",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 ${
                    selectedPage === "about" && "active"
                  }`}
                  to="/about"
                  style={{
                    color: selectedPage === "about" ? "#006ACB" : "#000",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 ${
                    selectedPage === "products" && "active"
                  }`}
                  to="/products"
                  style={{
                    color: selectedPage === "products" ? "#006ACB" : "#000",
                  }}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 ${
                    selectedPage === "contactUs" && "active"
                  }`}
                  to="/contactUs"
                  style={{
                    color: selectedPage === "contactUs" ? "#006ACB" : "#000",
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 ${
                    selectedPage === "franchise-opportunities" && "active"
                  }`}
                  to="/franchise-opportunities"
                  style={{
                    color:
                      selectedPage === "franchise-opportunities"
                        ? "#006ACB"
                        : "#000",
                  }}
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
};

export default Navbar;
