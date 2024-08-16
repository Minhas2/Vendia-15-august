import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";

import './Change_Password.css'
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
  

function Change_Password() {
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
        <div className='text-white container' style={{ textAlign: 'left', fontSize: '30px' }}>
              &larr;
            </div>
          <MDBCard className='my-5 mx-auto' style={{ border: 'none', maxWidth: '587px', background: 'transparent' }}>
            
            <MDBCardBody className='p-5'>
            <h2 className="fw-bold mb-4 text-white" style={{ textAlign: 'left' }}>Log In Password</h2>
              {/* <p className="text-white mb-4 text-center">Please enter your email/username & we will send an OTP number</p> */}
              <form>
              <div className="mb-4 text-align-login">
                    <label htmlFor="password" className="form-label text-white mb-2">Old Password *</label>
                    <input
                      // id="password"
                      // type="password"
                      className="form-control form-control-lg input-changeP "
                      placeholder="Type Old Password"
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div className="mb-4 text-align-login">
                    <label htmlFor="password" className="form-label text-white mb-2">New Password *</label>
                    <input
                      // id="password"
                      // type="password"
                      className="form-control form-control-lg input-changeP"
                      placeholder="Type New Password"
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div className="mb-4 text-align-login">
                    <label htmlFor="password" className="form-label text-white mb-2">Confirm Password *</label>
                    <input
                      // id="password"
                      // type="password"
                      className="form-control form-control-lg input-changeP"
                      placeholder="Type Confirm Password"
                      style={{ color: 'black' }}
                    />
                  </div>
                {/* <div className='mb-4 text-align-forget'>
                  <label htmlFor='password' className='form-label text-white'>New Password</label>
                  <MDBInput id='password' type='password' size='lg' className='w-100' labelClass='text-white' placeholder='Type your New Password' />
                </div>
                <div className='mb-4 text-align-forget'>
                  <label htmlFor='password' className='form-label text-white'>Confirm New Password</label>
                  <MDBInput id='password' type='password' size='lg' className='w-100' labelClass='text-white' placeholder='Type your Confirm Password' />
                </div> */}
                <hr className='my-4' />
                <div className='d-flex justify-content-center'>
                <button className='mb-2 w-50 btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '20px' }}>
                    
                    Confirm
                  </button>
                  </div>
                  {/* <button type="button" class="btn btn-primary" data-mdb-ripple-init data-mdb-modal-init data-mdb-target="#exampleModal">
                    Launch demo modal
                  </button> */}
                  
                  <p className='text-white mt-5'>The user is advised to contact the online service for assistance if they have forgotten their previous login passowrd.</p>
                  
                  
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div class="modal-dialog modal-dialog-centered">...</div>
    </MDBContainer>

     
    </section>
  );
}
  
export default Change_Password;
