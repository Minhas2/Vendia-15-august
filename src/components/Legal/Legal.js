import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import certifactate1 from "./Images/Certifacte1.png"
import certifactate2 from "./Images/Certifacte2.png"

import './Legal.css'
import { useNavigate } from 'react-router-dom';

function Legal() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 392px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const navigate = useNavigate();

  return (
    <section style={sectionStyle}>
      <div
        className='text-white about-arrow1 arrow-margin'
        style={{ textAlign: 'left', fontSize: '30px', cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      >
        <img src='/arrow-left.png' alt='Go back' />
      </div>

      <div className='container-fluid legal-box p-4 mb-5 mt-4 outfit-uniquifier'>
        <div className='p-5'>
          <h1 className='mb-3 h1-font'>Legal & Certificate</h1>

          <div className='row'>
            <div className='col-12 col-md-4 col-sm-12'>
              <img src={certifactate1} alt='Certificate 1' className='w-100' />
            </div>
            <div className='col-12 col-md-4 col-sm-12 inc-mar'>
              <img src={certifactate2} alt='Certificate 2' className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Legal;