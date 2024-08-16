import React, { useState } from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import { useNavigate } from 'react-router-dom';
import './Cashout_details.css'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

function Cashout_details() {
  const [activeButton, setActiveButton] = useState(null);

  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };

  const navigate = useNavigate();

  const handleClick = (value, event) => {
    event.preventDefault(); // Prevent default behavior if the button is within a form
    setActiveButton(value); // Set the clicked button as active
  };

  return (
    <section style={sectionStyle} className='cash-h'>
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
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center '>
          <MDBCol col='12'>
            <MDBCard className='mx-auto MAX-CARD-cashout' style={{ border: 'none', background: 'transparent' }}>
              <MDBCardBody>
                <form>
                  <div>
                    <h1 className='text-white h1-cashout-font' style={{ textAlign: 'left' }}>Cashout Details</h1>
                    <p className='text-white p-cashout-font' style={{ textAlign: 'left' }}>
                      Dear user, to ensure the security of your funds, please refrain from sharing your Cash out Pin Code with any third party. <br /> Your financial security is of utmost importance to us.
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Full Name *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Shakeel Ahmed" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Number *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="+1 234 505 4040" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-sm-6 col-lg-3 col-6 mt-2">
                      <button
                        className={`clickable-field ${activeButton === 'BTC' ? 'active' : ''}`}
                        onClick={(e) => handleClick('BTC', e)}
                      >
                        BTC
                      </button>
                    </div>
                    <div className="col-sm-6 col-lg-3 col-6 mt-2">
                      <button
                        className={`clickable-field ${activeButton === 'USDT' ? 'active' : ''}`}
                        onClick={(e) => handleClick('USDT', e)}
                      >
                        USDT
                      </button>
                    </div>
                    <div className="col-sm-6 col-lg-3 col-6 mt-2">
                      <button
                        className={`clickable-field ${activeButton === 'XMR' ? 'active' : ''}`}
                        onClick={(e) => handleClick('XMR', e)}
                      >
                        XMR
                      </button>
                    </div>
                    <div className="col-sm-6 col-lg-3 col-6 mt-2">
                      <button
                        className={`clickable-field ${activeButton === 'LTC' ? 'active' : ''}`}
                        onClick={(e) => handleClick('LTC', e)}
                      >
                        LTC
                      </button>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="walletAddress">Wallet Address *</label></div>
                        <input type="text" id="walletAddress" className="form-control whiteplaceholder" placeholder="T23sdfklwwJGL3249sdfjk23" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                  </div>

                  <hr className='my-4' />
                  <div className="d-flex justify-content-center align-items-center">
                    <button className='mb-2 w-save btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '20px' }}>
                      Save
                    </button>
                  </div>

                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Cashout_details;
