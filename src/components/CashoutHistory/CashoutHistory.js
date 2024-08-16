import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";

import { Link, Outlet, useNavigate } from 'react-router-dom';

import './CashoutHistory.css'
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// } from 'mdb-react-ui-kit';


function CashoutHistory() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',

    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column'


  };
  const navigate = useNavigate();

  return (
    <section style={sectionStyle}>

      <div
        className="text-white about-arrow2  container"
        style={{ textAlign: "left", fontSize: "30px", cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        <img
          src="/arrow-left.png"
          alt="Go back"
          className="arrow-margin2 mb-4"
        />
      </div>

      <div className=' container-fluid trans-box p-4 mb-3 mt-4 outfit-uniquifier'>
        <div className="max-trans ">
          <div className="row">
            <div className="col-6 ">
              <Link to="/cashouthistory" className='white-links'>
                <div className='creditnow1 d-flex justify-content-center align-items-center'>
                  CashOut Now
                </div>
              </Link>
            </div>
            <div className=" col-6 ">
            <Link to="/cashouthistory/CashOutPage" className='white-links'> 
              <div className='credithis1 d-flex justify-content-center align-items-center'>
                CashOut History
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />


    </section>
  );
}

export default CashoutHistory;
