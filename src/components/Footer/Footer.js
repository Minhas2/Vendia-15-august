import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import vendiaIcon from "./Images/Vendia icon.png";

import "./Footer.css";

function Footer() {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    color: "white",
   
  };

  return (
    <div style={sectionStyle} className="outfit-uniquifier">
      {/* <div class="d-flex justify-content-center container flex-footer">
        <div className="flex-column d-flex mb-3 ">
          <h3 className="text-center">Company NO.03989628</h3>
        </div>
      </div>

      <div className="container mb-4">
        <div class="row">
          <div class="col-sm-6 col-md-3 footer-links">
            <a className="color-link" href="#">
              Privacy Policy
            </a>
          </div>
          <div class="col-sm-6 col-md-3 footer-links">
            <a className="color-link" href="#">
              Terms & Conditions
            </a>
          </div>
          <div class="col-sm-6 col-md-3 footer-links">
            <a className="color-link" href="#">
              Accessibility
            </a>
          </div>
          <div class="col-sm-6 col-md-3 footer-links">
            <a className="color-link" href="#">
              Diversity & Inclusion Policy
            </a>
          </div>
        </div>
      </div>
      <div className="container" style={{ border: "1px solid #2F2F2F",  maxWidth: "80%" }}></div> */}
        
      <div class="d-flex justify-content-center container ">
          <div className="text-center  p-footer">©2024 Vendia, Inc.</div>
      </div>
        

    </div>
  );
}

export default Footer;
