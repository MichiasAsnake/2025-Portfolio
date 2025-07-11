import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="https://www.linkedin.com/in/michiasasnake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/Linkedin.svg"}
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
        <a
          href="https://github.com/MichiasAsnake"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/github.svg"}
            alt="GitHub"
            className="footer-icon"
          />
        </a>
      </div>
      <div className="footer-email">mickysanake@live.com</div>
    </footer>
  );
}

export default Footer;
