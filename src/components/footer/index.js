import React, { useState } from "react";
import validator from "validator";
import "./Footer.css";
function Footer() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div className="footer_wrp">
      <div className="footer">
        <div className="footer_head">
          <span>Subscribe to our newster</span>
          <div>
            <input
              onChange={validateEmail}
              type="email"
              placeholder="Your Email Address"
            />
            <button> Subscribe</button>
            <span>{emailError}</span> 
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="footer_information">
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
          </div>
          <div className="footer_information">
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
          </div>
          <div className="footer_information">
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
          </div>
          <div className="footer_information">
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
            <span> {`>About Us`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
