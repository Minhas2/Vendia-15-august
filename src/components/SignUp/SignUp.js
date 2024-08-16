import React from "react";
import backgroundimage from "./Images/Backgorund.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
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

function SignUp() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: '82vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Added to horizontally center content
    flexDirection: 'column',
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    // Add your form submission logic here
  }

  const navigate = useNavigate();





  return (
    <section style={sectionStyle}>

<div className='text-white about-arrow2 arrow-margin2 container' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      
      <img src='/arrow-left.png' alt='Go back' />
    </div>

      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='mb-5  mt-login mx-auto MAX-CARD-Sign1' style={{ border: 'none', background: 'transparent' }}>

              <div className='d-flex justify-content-center align-items-center h-100'>
                <h1 className='text-white outfit-uniquifier sign-header'>All fields are <br className="br-425"/> mandatory</h1>
              </div>
              <MDBCardBody className='p-5 syne form-fonts'>
                <form onSubmit={handleSubmit}>

                  <div className="row mb-4">
                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">First Name *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Shakeel" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Last Name *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="Ahmad" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>

                           <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Email Address *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="alexa.mate@example.com" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Phone *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="+1 234 404 5555" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Country *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="United States" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className=" col-md-6 col-sm-12 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Vendai Share Code *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="AHJJNA@T" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>

                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Gender *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Male" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2">
                  
                      
                          <div data-mdb-input-init className="form-outline">
                            <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="dob">Date of Birth *</label></div>
                            <div className="row ">
                              <div className="col col-sm-3 col-md-4 col-lg-3 col-4">
                                <input type="text" id="day" className="form-control whiteplaceholder" placeholder="DD" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                              <div className="col-sm-3 col-md-4 col-lg-3 col-4">
                                <input type="text" id="month" className="form-control whiteplaceholder" placeholder="MM" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                              <div className="col-sm-3 col-md-4 col-lg-3 col-4">
                                <input type="text" id="year" className="form-control whiteplaceholder" placeholder="YYYY" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                              </div>
                            </div>
                          </div>
                      
                    
                    </div>


                  </div>




                  {/* <hr className='my-4' /> */}
                  <div data-bs-toggle="modal" data-bs-target="#SignModal">
                    <div className="d-flex justify-content-center align-items-center">
                      
                      <button className=' w-Sign btn login-btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '15px 11px', cursor: 'pointer', borderRadius: '60px' }}>

                        Submit
                      </button>

                    </div>
                  </div>


                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      {/* <!-- Modal --> conifrmgender*/}
      <div className="modal fade" id="SignModal" tabIndex={-1} aria-labelledby="SignModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
              <h1 className="title s-meb-header p-3">Elite  Membership</h1>
            </div> */}
            <div className='modal-body gender-box '>

              <h2 className='text-white text-center mt-3 '>Account Created Successfully</h2>

              <p className='text-white text-center mt-3 mb-4'>Congratulations! Your account has been successfully created. You will be redirected to the login page shortly. Please use your credentials to log in and start exploring our services.</p>



              <button type="button" className="btn btn-secondary w-100 mt-3 p-2 male" data-bs-dismiss="modal" style={{ borderRadius: "20px", backgroundColor: `#F62EFF` }}>Confirm</button>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
}

export default SignUp;
