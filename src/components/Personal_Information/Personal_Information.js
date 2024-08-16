import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import userimage from './Images/userimage.png'

import './Personal_Information.css'
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


function Personal_Information() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '95vh',
    display: 'flex',
    alignItems: 'center',

  };
  const navigate = useNavigate();

  return (
    <section style={sectionStyle}>
      <div className='text-white about-arrow3 arrow-margin3Z  d-flex justify-content-start align-items-start' style={{ textAlign: 'left', fontSize: '30px', cursor: 'pointer' }} onClick={() => navigate(-1)}>

        <img src='/arrow-left.png' alt='Go back' />
      </div>

      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12' className='mb-5 ' >

            <MDBCard className='my-5 mx-auto MAX-CARD-PI' style={{ border: 'none', background: 'transparent' }}>
              <div className='center-personal'><img src={userimage} alt="User Image" /></div>

              <MDBCardBody >


                <form>

                  <div className="row mb-4 syne">






                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Full Name *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Shakeel Ahmad " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Username *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="shakel4 " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>


                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Email Address *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="alexa.mate@example.com " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Phone *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="+1 234 404 5555 " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 mt-2">
                      <Link to="/Cashout_Pin" className='white-links'>
                        <div data-mdb-input-init className="form-outline">
                          <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Cashout Pin *</label></div>
                          <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="2333 " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                        </div>
                      </Link>
                    </div>
                    <div className="col mt-2">
                      <div data-bs-toggle="modal" data-bs-target="#genderModal">
                        <div data-mdb-input-init className="form-outline">
                          <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Gender *</label></div>
                          <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="Male " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                        </div>
                      </div>
                    </div>


                    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 mt-2">

                      <Link to="/Change_Password" className='white-links'>
                        <div data-mdb-input-init className="form-outline">
                          <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Log in Password *</label></div>
                          <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="........ " style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                        </div>
                      </Link>


                    </div>


                  </div>


                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <!-- Modal --> gender*/}
      <div className="modal fade" id="genderModal" tabIndex={-1} aria-labelledby="genderModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className='modal-body gender-box '>
              <div data-bs-toggle="modal" data-bs-target="#C-genderModal">
                <button type="button" className="btn btn-dark w-100 p-2 male" style={{ borderRadius: "20px", backgroundColor: `#F62EFF` }}>
                  Male
                </button>
              </div>

              <div data-bs-toggle="modal" data-bs-target="#C-genderModal">
                <button type="button" className="btn btn-dark w-100 mt-3 p-2 male" style={{ borderRadius: "20px", backgroundColor: `white`, color: "black" }}>
                  Femal
                </button>
              </div>

              <button type="button" className="btn btn-secondary w-100 mt-3 p-2 male" data-bs-dismiss="modal" style={{ borderRadius: "20px", backgroundColor: `#4113A0` }}>Cancel</button>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Modal --> conifrmgender*/}
      <div className="modal fade" id="C-genderModal" tabIndex={-1} aria-labelledby="C-genderModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
              <h1 className="title s-meb-header p-3">Elite  Membership</h1>
            </div> */}
            <div className='modal-body gender-box '>

              <h2 className='text-white text-center mt-3 '>Gender Changed</h2>

              <p className='text-white text-center mt-3 mb-4'>Your gender has been changed.</p>



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

export default Personal_Information;
