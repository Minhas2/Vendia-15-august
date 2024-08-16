import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './Notifaction.css'
import { useNavigate } from 'react-router-dom';

function Notifaction() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '93vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
  const navigate = useNavigate();
  return (

    <section style={sectionStyle}>

<div className='text-white about-arrow2 arrow-margin2 container' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      
      <img src='/arrow-left.png' alt='Go back' />
    </div>

      <div className='container-fluid not-box p-4 mb-5 mt-4 outfit-uniquifier'>

        <div>
          <h1 className='mb-3 h1-font'>Notification</h1>
        </div>

        <div className='p-not '>
          <p className='date-not'>21 July, 2024</p>
          <h4 className='h4-font'>Welcome to Vendia</h4>
          <p className='notifaction-font'>We are thrilled to have you on board. Let’s revolutionize data together!
          </p>
          <h4 className='h4-font'>Congrats!</h4>
          <p className='notifaction-font'>You’ve received a $50 welcome bonus. Enjoying amplifying with Vendia.
          </p>
          <h4 className='h4-font'>Customer Service Notice</h4>
          <p className='notifaction-font'>For any inquiries, please contact the customer service of your respective region from the frop-down menu. <br />
            We’re here to help from 10am to 00:00 San Francisco PDT GMT-7!
          </p>

          <p className='date-not mt-5'>21 July, 2024</p>
          <h4 className='h4-font'>Christmas Holiday Hours.</h4>
          <p className='notifaction-font'>We’re currently enhancing our platform to improve our services to serve you better. <br />
          Please bear with us and check back soon. Thank you for your patience.
          </p>
          <h4 className='h4-font'>Congrats!</h4>
          <p className='notifaction-font'>Due to Chrismas, our platform and customer service will be available for only 6 hours today. Thank you for your understanding and Merry Christmas!
          </p>

        </div>

       


      </div>


    </section>
  );
}

export default Notifaction;
