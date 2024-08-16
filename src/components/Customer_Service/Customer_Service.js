import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import Workchat from "./Images/Workchat.png"
import { Link, useNavigate } from 'react-router-dom';
import './Customer_Service.css'
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
// outfit-uniquifier class to use outfit font

function Customer_Service() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 392px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'

  };

  return (
    <section style={sectionStyle}>

        <div className='text-white about-arrow1 arrow-margin' style={{ textAlign: 'left', fontSize: '30px' }}>
        <Link to="/WebProfilePage" className='white-links'>
          <img src='/arrow-left.png' />
          </Link>
        </div>
    

      <div className='Customer_box p-4 mb-5 mt-4 '>
        <div className='d-flex justify-content-center mb-3'>
          <div className='greetingbox p-3 cus-btn-res'>
            <div>We,re here for you!</div>
            <div>How can I help?</div>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <div className='greetingbox2 p-3 cus-btn-res'>
            <div>I hope.....</div>
          </div>
        </div>

        <div className='d-flex justify-content-center'><img src={Workchat} alt="Workchat" className='w-100' /></div>

        <div className='d-flex justify-content-center'>
          <div className='d-flex justify-content-center flex-column align-items-center Contactbox '>
            <h2 className='text-center'>Contact Us Now</h2>
            <p className='text-center'>For any inquiries or assistance, please contact our customer service team. We're here to help with all your needs!</p>

          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <button className='mb-2 w-service btn cus-btn-res2 cus-btn-res-1248' style={{ backgroundColor: '#F62EFF', color: 'white', border: '1px solid #FFFFFF', padding: '21px 24px', cursor: 'pointer', borderRadius: '100px' }}>

            Direct Customer Support
          </button>
        </div>







      </div>


    </section>
  );
}

export default Customer_Service;
