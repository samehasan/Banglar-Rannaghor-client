import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2 item">
              <h3>OUR DELUX</h3>
              <ul>
                <li>
                  <a href="/">Dental Clinic</a>
                </li>
                <li>
                  <a href="/">Orthopedic</a>
                </li>
                <li>
                  <a href="/">Women’s Health</a>
                </li>
                <li>
                  <a href="/">More....</a>
                </li>
              </ul>
            </div>
            
            <div className="col-md-4 item text">
              <h3>BANGLADESH Food</h3>
              <p>
                At BANGLADESH MEDICAL , providing our patients with a trusted
                and compassionate environment for healthcare is central to our
                mission.
              </p>
            </div>
            <div className="col-md-2 item text">
              <h3>CONTACT US</h3>
              <div class="row g-3">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-12">
                  {/* <input type="text" className="form-control" placeholder="Message" aria-label="Message"/> */}
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-outline-light">SEND</button>
              </div>
            </div>
          </div>
          <p className="copyright">BANGLADESH MEDICAL © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;