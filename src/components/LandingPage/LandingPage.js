import React from 'react';
import Header from '../Header/Header';
// import Reachoutform from '../Reachoutform/Reachoutform';
import backgroundimage from "./Images/Backgorund.jpeg";
import box1image from "./Images/box1.png"
import box2image from "./Images/box2.png"
import box3image from "./Images/box3.png"
import box4image from "./Images/box4.png"
import box5image from "./Images/box5.png"
import './LandingPage.css'
import { Link } from 'react-router-dom';
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



function LandingPage() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };


  const reachout = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    Height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const PinkBox = {
    display: 'flex',
    justifyContent: 'center',  // Centers content horizontally
    alignItems: 'center',      // Centers content vertically
    backgroundColor: '#F62EFF', // Background color
    color: 'white'
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    // Add your form submission logic here
  }


  return (
    <div>
      {/* <Header /> */}
      <section className='heroSection padding-hero' style={sectionStyle}>
        <div className="container">
            <div className="row">
              <div className="col-lg-7  ">
                <div className="heroText">
                    <h1>
                      Trusted,<br /> accurate data everywhere <br /> it should be <br />
                      <span>never where it shouldn't</span>
                    </h1>
                    <h2>Ready to Launch Your Freelance Data Amplification Career?</h2>
                    <p>
                      Elevate your freelance journey by partnering with Vendia, the premier data automation platform. As a Vendia freelancer, you'll help companies worldwide amplify their data and products, all while enjoying the freedom to work remotely from anywhere.
                    </p>
                    <p>
                        Join Vendia today and embark on a rewarding online career. With our cutting-edge technology and trusted insights, you'll play a crucial role in transforming businesses and driving innovation. Your success story begins here at Vendia. Take the first step toward a brighter, more flexible future!
                    </p>
                </div>
                <div className="btnContainer ">
                  <Link to="/signup" className="primaryBtn">Register</Link>
                  <Link to="/login" className="secondaryBtn">Login to Your Account</Link>
                </div>
              </div>
            </div>
        </div>

      </section>

      <div className='p-vendia' style={PinkBox}>
        <h1 className='why-Choose-header'>Why you should choose Vendia</h1>
      </div>

      <div className="d-flex justify-content-center ">
        <div className='max-width-landingbox'>
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-8 col-sm-12">
              <div className='d-flex flex-column white-landing-box p-4 h-100'>
                <div><img src={box1image} alt="Box 1" /></div>
                <h1>Access to Premier Digital Projects</h1>
                <p className='m-0'>When you collaborate with us, you gain access to an exclusive portfolio of high-impact digital product amplifications. We partner with renowned brands to deliver projects that will not only challenge your skills but also shape the future of data automation and digital transformation.</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-12  land-mt">
              <div className='d-flex flex-column white-landing-box p-4 h-100'>
                <div><img src={box2image} alt="Box 2" /></div>
                <h1>Competitive Earnings</h1>
                <p className='m-0'>We believe in rewarding your dedication. At Vendia, you'll enjoy daily commissions for your contributions, ensuring that your hard work translates into substantial financial rewards. Additionally, we provide the stability of a weekly salary, so you can focus on what you do best.</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-5">
            <div className="col-12 col-md-4 col-sm-12 ">
              <div className='d-flex flex-column white-landing-box p-4 h-100'>
                <div><img src={box3image} alt="Box 3" /></div>
                <h1>Global Flexibility</h1>
                <p>Your workspace should adapt to your lifestyle. Our platform offers you the flexibility to work from wherever you find comfort, whether it's a cozy home office, a vibrant cafe, or a tranquil beachfront escape. Embrace true location independence while amplifying digital products and data insights.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-12">
              <div className='d-flex flex-column white-landing-box p-4 margin-Lbox4 h-100'>
                <div><img src={box4image} alt="Box 4" /></div>
                <h1>AI-Powered Excellence</h1>
                <p>
                  Welcome to a new era of freelancing. Our state-of-the-art AI technology complements your digital product amplification journey. Say goodbye to mundane tasks and hello to smarter, more efficient workflows. With AI support, you can concentrate on unleashing your creative genius.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-12 land-mt">
              <div className='d-flex flex-column white-landing-box p-4 margin-Lbox4 h-100'>
                <div><img src={box5image} alt="Box 5" /></div>
                <h1>Flexible Hours</h1>
                <p>Life doesn't adhere to a rigid schedule, and neither should your work. At Vendia, you have control over your time. Whether you are an early riser or prefer working late, our platform accommodates your unique schedule, ensuring a harmonious work-life balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={reachout}>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='my-5 mx-auto MAX-CARD-Reach' style={{ border: 'none', background: 'transparent' }}>

                <div className='d-flex justify-content-center align-items-center h-100'>
                  <h1 className='text-white reach-land'>Reach out anytime</h1>
                </div>
                <MDBCardBody className='py-5 syne'>
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
                    </div>

                    <div className="row mb-4">
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
                    </div>

                    <div className="form-outline">
                      <textarea className="form-control whiteplaceholder" placeholder='Write your message here...' id="exampleFormControlTextarea1" rows="5" style={{ backgroundColor: '#FFFFFF1A', border: '1px solid #747474', color: 'white' }}></textarea>
                    </div>




                    <hr className='my-4' />
                    <div data-bs-toggle="modal" data-bs-target="#ReachModal">
                    <div className="d-flex justify-content-center align-items-center">
                      <button className='w-Reach1 btn' style={{ backgroundColor: '#F62EFF', color: 'white', border: 'none', padding: '15px 11px', cursor: 'pointer', borderRadius: '40px' }}>
                       
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
      </div>

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
    </div>
  );
}

export default LandingPage;