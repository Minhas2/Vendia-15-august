import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './Login.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  // MDBCheckbox
} from 'mdb-react-ui-kit';

import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '82vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

  };

  const navigate = useNavigate();



  return (
    <section style={sectionStyle}>

<div className='text-white about-arrow2 arrow-margin2 container' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      
      <img src='/arrow-left.png' alt='Go back' />
    </div>


      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12' className='mb-5'>
            <MDBCard className='mb-5  mt-login mx-auto' style={{ border: 'none', maxWidth: '520px', background: 'transparent' }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <h2 className='text-white outfit-uniquifier log-header' style={{fontWeight:'700' }}>Login and kickstart your journey!</h2>
              </div>
              <div className='d-flex justify-content-center align-items-center h-100 mt-2'>
                <p className='text-white outfit-uniquifier'>Fields marked with * are mandatory</p>
              </div>
              <MDBCardBody className='p-login'>
                <form>
                  <div className='mb-4 text-align-login '>

                    <div className="mb-4 syne form-fonts">
                      <label htmlFor="email" className="form-label text-white mb-2">Email address *</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control form-control-lg input-login"
                        placeholder="email@example.com"
                        style={{ color: 'black' }}
                      />
                    </div>
                  </div>

                  <div className="mb-4 text-align-login syne form-fonts">
                    <label htmlFor="password" className="form-label text-white mb-2">Password *</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control form-control-lg input-login"
                      placeholder="............."
                      style={{ color: 'black' }}
                    />
                  </div>

             

                  {/* <div className='mb-4 text-align-login'>
                    <label htmlFor='password' className='form-label text-white mb-2'>Password *</label>
                    <MDBInput id='password' type='password' size='lg' className='w-100 input-login' placeholder='Enter your password' />
                  </div> */}


                  {/* <MDBCheckbox id='flexCheckDefault' className='mb-4 ' label='Remember password' labelClass='text-white' style={{ backgroundColor: '#F62EFF' }} /> */}
                  <div className="form-check mb-4 d-flex justify-content-between text-white check-font">
                    <div className='syne'>
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault" style={{ backgroundColor: '#F62EFF' }} />
                      <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                        Remember password
                      </label>
                    </div>
                    <div><Link to={'/forget'} className='forget-tag syne'>Forget Password?</Link></div>
                  </div>
                  {/* <hr className='my-4' /> */}
                  <Link to="/MainDashboard">

                  <button className='mb-4 w-100 btn login-btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '15px 11px', cursor: 'pointer', borderRadius: '60px' }}>
                    Log in
                  </button>
                   </Link>
                  <Link to="/signup">
                  <button className='mb-2 w-100 btn syne sign-btn' style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid #828282', padding: '15px 11px', cursor: 'pointer', borderRadius: '60px' }}>
           
                    Register
                  </button>
                  </Link>






                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Login;
