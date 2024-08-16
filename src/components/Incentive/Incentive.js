import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import rack1 from "./Images/Rack1.png"
import rack2 from "./Images/Rack2.png"
import './Incentive.css'
import { useNavigate } from 'react-router-dom';

function Incentive() {
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

      <div className='container-fluid incentive-box  my-4'>
        <div className='row'>
          <div className='col-12 col-md-6 col-sm-12'>
            <img src={rack1} alt='Rack 1' className='w-100' />
          </div>
          <div className='col-12 col-md-6 col-sm-12 inc-mar'>
            <img src={rack2} alt='Rack 2' className='w-100 ' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Incentive;