import React from "react";
import '../styles/footer.css'
import { Link } from "react-router-dom";
import { footer_data } from "../data/footerData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h1>OR</h1>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <div className="footer-page-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/about"}>About</Link>
          </div>
          <p>© 2026 Orji Richard. All rights reserved.</p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {footer_data.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;