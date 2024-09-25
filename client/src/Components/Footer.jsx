import React from "react";
import "../Components/Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-sections">
          <div className="footer-about">
            <h2>Sync Your Cycle, Explore Your World.</h2>
            <p className="footer-text">
              Ms. Femmigo Guides Your Journey! It is your trusted companion for
              understanding your menstrual cycle. Our period tracker helps you
              stay in sync with your body, while offering personalized tips for
              activities suited to each phase of your cycle—whether it's
              exercise, nutrition, or self-care. Empower yourself with the
              knowledge to optimize every day of your month. Join us on the
              journey to health, balance, and well-being.
            </p>
            <div className="social-icons">
              <SocialIcon
                network="twitter"
                target="_blank"
                url="https://twitter.com/"
                aria-label="Twitter"
              />
              <SocialIcon
                network="instagram"
                target="_blank"
                url="https://www.instagram.com/"
                aria-label="Instagram"
              />
              <SocialIcon
                network="linkedin"
                target="_blank"
                url="https://www.linkedin.com/in/janhavi-hivarekar-1b74a028b/"
                aria-label="LinkedIn"
              />
              <SocialIcon
                network="facebook"
                target="_blank"
                url="https://www.facebook.com/"
                aria-label="Facebook"
              />
            </div>

            <p>© 2024 msFemmigo. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tracker">Period Tracker</a>
              </li>
              <li>
                <a href="/travel">Travel Planner</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a href="#">+1 (123) 456-7890</a>
              </li>
              <li>
                <a href="#">info@msfemmigo.com</a>
              </li>
              <li>Pune, Maharashtra 411001</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
