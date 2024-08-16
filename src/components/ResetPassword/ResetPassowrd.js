import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './ResetPassowrd.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Row } from 'react-bootstrap';


function ResetPassowrd() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',

  };

  return (
    <section style={sectionStyle}>


      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='my-5 mx-auto MAX-CARD-reset' style={{ border: 'none', background: 'transparent' }}>

              <div className='d-flex justify-content-center align-items-center h-100'>
                <h1 className='text-white outfit-uniquifier'>Fields marked with * are mandatory</h1>
              </div>
              <MDBCardBody className='p-5'>
                <form>
                  <div className="row mb-4">

                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div data-mdb-input-init className="form-outline">
                            <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="dob">Date of Birth *</label></div>
                            <div className="row ">
                              <div className="col col-sm-3 col-md-3 col-3">
                                <input type="text" id="day" className="form-control whiteplaceholder" placeholder="DD" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                              <div className="col-sm-3 col-md-3 col-3">
                                <input type="text" id="month" className="form-control whiteplaceholder" placeholder="MM" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                              <div className="col-sm-3 col-md-3 col-3">
                                <input type="text" id="year" className="form-control whiteplaceholder" placeholder="YYYY" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Enter Phone Number Last & Digits *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="3344" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Enter New Password *</label></div>
                        <input id="password"
                          type="password" className="form-control whiteplaceholder" placeholder="..........." style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Enter Confirm Password *</label></div>
                        <input id="password"
                          type="password" className="form-control whiteplaceholder" placeholder="............" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                  </div>


                  <hr className='my-4' />
                  <div className="d-flex justify-content-center align-items-center">
                    <button className='mb-2 w-reset btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '20px' }}>
                     
                      Reset Password
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

export default ResetPassowrd;





