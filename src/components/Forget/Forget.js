import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Forget.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,

} from 'mdb-react-ui-kit';


function Forget() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 392px)',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <section style={sectionStyle}>

      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='my-5 mx-auto' style={{ border: 'none', maxWidth: '587px', background: 'transparent' }}>
              <MDBCardBody className='p-5'>
                <h2 className="fw-bold mb-4 text-center text-white outfit-uniquifier" style={{fontWeight:'700' }}>Forget password</h2>
                <p className="text-white mb-4 text-center">Please enter your email/username & we will send an OTP number</p>
                <form>
                  <div className='mb-4 text-align-login'>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-white mb-2">Email address/UserName *</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control form-control-lg input-login"
                        placeholder="email@example.com"
                        style={{ color: 'black' }}
                      />
                    </div>
                  </div>

                  <div className="mb-4 text-align-login">
                    <label htmlFor="password" className="form-label text-white mb-2">Phone Number *</label>
                    <input
                      // id="password"
                      // type="password"
                      className="form-control form-control-lg input-login"
                      placeholder="+2345054040"
                      style={{ color: 'black' }}
                    />
                  </div>
                  <hr className='my-4' />
                 
                  <button className='mb-2 w-100 btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '20px' }}>
                    <MDBIcon fab icon='google' className='mx-2' />
                    Submit
                  </button>
                  {/* <button type="button" class="btn btn-primary" data-mdb-ripple-init data-mdb-modal-init data-mdb-target="#exampleModal">
                    Launch demo modal
                  </button> */}


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

export default Forget;
