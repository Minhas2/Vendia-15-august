import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './Reachoutform.css'
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
import { Link, useNavigate } from 'react-router-dom';


function Reachoutform() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '83vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
          <MDBCol col='12' className='mb-5'>
            <MDBCard className='mt-form mb-5 mx-auto MAX-CARD-Reach' style={{ border: 'none', background: 'transparent' }}>
              {/* <div className='d-flex justify-content-center align-items-center h-100'>
              <h2 className='text-white'>Login and kickstart your journey!</h2>
            </div> */}
              <div className='d-flex justify-content-center align-items-center h-100'>
                
                <h1 className='text-white'>Reach out anytime</h1>
              </div>
              <MDBCardBody className='p-5 syne'>
                <form onSubmit={handleSubmit}>

                  <div className="row mb-4">
                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white " htmlFor="firstName">Name *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="Shakeel Ahmad" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline ">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Country *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="United States" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 mt-2">
                      <div data-mdb-input-init className="form-outline ">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="firstName">Email Address *</label></div>
                        <input type="text" id="firstName" className="form-control whiteplaceholder" placeholder="alexa.mate@example.com" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="col mt-2">
                      <div data-mdb-input-init className="form-outline ">
                        <div style={{ textAlign: 'left' }}><label className="form-label text-white" htmlFor="lastName">Phone *</label></div>
                        <input type="text" id="lastName" className="form-control whiteplaceholder" placeholder="+1 234 404 555" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }} />
                      </div>
                    </div>
                    <div className="form-outline mt-3">
                    <textarea className="form-control whiteplaceholder" placeholder='Write your message here...' id="exampleFormControlTextarea1" rows="5" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }}></textarea>
                    {/* <label className="form-label" htmlFor="exampleFormControlTextarea1" >Example textarea</label> */}
                  </div>

                  </div>

                  {/* <div className="row mb-4">
                    
                  </div> */}

           




                  {/* <hr className='my-4' /> */}
                  <div data-bs-toggle="modal" data-bs-target="#ReachModal">
                    <div className="d-flex justify-content-center align-items-center">
                      <button className=' w-Reach1 btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '15px 11px', cursor: 'pointer', borderRadius: '40px' }}>

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
      <div className="modal fade" id="ReachModal" tabIndex={-1} aria-labelledby="ReachModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
              <h1 className="title s-meb-header p-3">Elite  Membership</h1>
            </div> */}
            <div className='modal-body gender-box '>

              <h2 className='text-white text-center mt-3 '>Message Sent Successfully!</h2>

              <p className='text-white text-center mt-3 mb-4'>Thank you for reaching out to us! Your message has been successfully sent. Our team will review your inquiry and get back to you as soon as possible.</p>



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

export default Reachoutform;
