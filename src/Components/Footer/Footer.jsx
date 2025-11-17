import React from "react";
import footerCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${footerCSS.Footer_wrapper} section`}>
      <div className={footerCSS.footerLinks}>
        <h2>
          NOX<span>STAR</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={footerCSS.footerLinks}>
        <h3>Subscribe</h3>
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#">About</a>
        </p>
        <p>
          <a href="#">Our Team</a>
        </p>
        <p>
          <a href="#">FAQ</a>
        </p>
      </div>
      <div className={footerCSS.footerLinks}>
        <h3>Company</h3>
        <p>
          <a href="#">Subscribe</a>
        </p>
        <p>
          <a href="#">Contact</a>
        </p>
        <p>
          <a href="#">Pricing</a>
        </p>
      </div>
      <div className={footerCSS.footerLinks}>
        <h3>Follow Us</h3>
        <div className={footerCSS.InputWrapper}>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className={footerCSS.social}>
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-github-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
      </div>
    </div>
  );
}
