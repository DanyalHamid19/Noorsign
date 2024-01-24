import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../Images/logo.png"

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 10px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "100px" }}>
            <h2 style={{ fontStyle: "italic" }}>Services</h2>

            <p>Sign Boards</p>
            <p>Light Boards</p>
            <p>Flex Designs</p>
            <p>Digital Flex</p>
          </div>
          <div style={{ marginLeft: "120px" }}>
            <img
              style={{ width: "50%", marginLeft: "35px", margin: "20px" }}
              src={logo}
              alt=""
            />
            <h2>Noorsign</h2>
            <p style={{ fontStyle: "italic", marginTop: "5px" }}>
              One call does it all
            </p>
          </div>
          <div style={{ width: "30%", marginTop: "20px" ,paddingLeft:"100px"}}>
            <div>
              <h3>Contact Us</h3>
              <p>UAN: +923 23 314 900 497</p>
              <p>UAN: +923 23 300 000 366</p>
              <p>TEL: 042 236 370 222</p>
              <p>Email: noorsign9@gmail.com</p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <h3>Follow Us</h3>
              <div style={{ display: "flex" }}>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={30}
                    style={{ marginRight: "10px", color: "#1DA1F2" }}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={30}
                    style={{ marginRight: "10px", color: "#4267B2" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={30}
                    style={{ marginRight: "10px", color: "#833ab4" }}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} style={{ color: "#0077b5" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>&copy; 2024 Noorsign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
//azhar 03328455711