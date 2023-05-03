import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className=" col-md-4 item">
              <h3>OUR OTHER WEBSITES</h3>
              <ul>
                <li>
                  <a href="/">Banglar gaan</a>
                </li>
                <li>
                  <a href="/">Banglar Dress</a>
                </li>
                <li>
                  <a href="/">Hater Kaj</a>
                </li>
              
              </ul>
            </div>
            
            <div className="col-md-4 item text">
              <h3>BANGLADESH FOOD</h3>
              <p>
              This is a Bangla Cusine Website.Where you can get many recipe .Go check the site
              </p>
            </div>
            <div className="col-md-4 item text">
              <h3>CONTACT US</h3>
              <div className="row g-3">
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
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-outline-light">SEND</button>
              </div>
            </div>
          </div>
          <p className="copyright">BANGLADESH FOOD © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;