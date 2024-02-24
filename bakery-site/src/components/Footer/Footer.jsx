import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="site-footer">
        <div className="footer-content">
          <p>
            Contact us at:{" "}
            <a href="mailto:info@example.com">chouhan@rajput.com</a>
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
