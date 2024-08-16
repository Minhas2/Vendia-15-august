
import React, { useState } from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import Up from './Images/UP.png'
import Down from './Images/Down.png'
import './FAQ.css'
import { useNavigate } from 'react-router-dom';

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// } from 'mdb-react-ui-kit';


function FAQ() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'

  };

 // State to manage which answers are open
 const [openItems, setOpenItems] = useState({});

 // Function to toggle an FAQ item
 const toggleItem = (index) => {
   setOpenItems(prevState => ({
     ...prevState,
     [index]: !prevState[index]
   }));
 };
 const navigate = useNavigate();
 return (
  <section style={sectionStyle}>
<div className='text-white about-arrow2 arrow-margin2 container' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      
      <img src='/arrow-left.png' alt='Go back' />
    </div>
   <div className='box-FAQ'>
        <h1 className='text-white'>FAQS</h1>
        
        <div className='FAQmini-box p-4 mt-5 outfit-uniquifier'>
          <div className="faq-item">
            <div className="question d-flex justify-content-between align-items-center" onClick={() => toggleItem(1)}>
              <h2 className='h-2FAQ'>Lorem ipsum</h2>
              <button className="toggle-button">
                {openItems[1] ? <img src={Up} alt="Up Arrow" /> : <img src={Down} alt="Down Arrow" />}
              </button>
            </div>
            <div className={`answer ${openItems[1] ? 'open' : ''}`}>
              <p className='p-FAQS'>Lorem ipsum dolor sit amet consectetur. Placerat tortor maecenas sit arcu velit erat. Sit tincidunt nisi massa amet. A enim pharetra massa sagittis ornare.</p>
            </div>
          </div>
        </div>

        <div className='FAQmini-box p-4 mt-3 outfit-uniquifier'>
          <div className="faq-item">
            <div className="question d-flex justify-content-between align-items-center" onClick={() => toggleItem(2)}>
              <h2 className='h-2FAQ'>Lorem ipsum</h2>
              
              <button className="toggle-button">
                {openItems[2] ? <img src={Up} alt="Up Arrow" /> : <img src={Down} alt="Down Arrow" />}
              </button>
            </div>
            <div className={`answer ${openItems[2] ? 'open' : ''}`}>
              <p className='p-FAQS'>Lorem ipsum dolor sit amet consectetur. Placerat tortor maecenas sit arcu velit erat. Sit tincidunt nisi massa amet. A enim pharetra massa sagittis ornare.</p>
            </div>
          </div>
        </div>
        
        <div className='FAQmini-box p-4 mt-3 outfit-uniquifier'>
          <div className="faq-item">
            <div className="question d-flex justify-content-between align-items-center" onClick={() => toggleItem(3)}>
              <h2 className='h-2FAQ'>Lorem ipsum</h2>
              <button className="toggle-button">
                {openItems[3] ? <img src={Up} alt="Up Arrow" /> : <img src={Down} alt="Down Arrow" />}
              </button>
            </div>
            <div className={`answer ${openItems[3] ? 'open' : ''}`}>
              <p className='p-FAQS'>Lorem ipsum dolor sit amet consectetur. Placerat tortor maecenas sit arcu velit erat. Sit tincidunt nisi massa amet. A enim pharetra massa sagittis ornare.</p>
            </div>
          </div>
        </div>

        <div className='FAQmini-box p-4 mt-3 outfit-uniquifier mb-5'>
          <div className="faq-item">
            <div className="question d-flex justify-content-between align-items-center" onClick={() => toggleItem(4)}>
              <h2 className='h-2FAQ'>Lorem ipsum</h2>
              <button className="toggle-button">
                {openItems[4] ? <img src={Up} alt="Up Arrow" /> : <img src={Down} alt="Down Arrow" />}
              </button>
            </div>
            <div className={`answer ${openItems[4] ? 'open' : ''}`}>
              <p className='p-FAQS'>Lorem ipsum dolor sit amet consectetur. Placerat tortor maecenas sit arcu velit erat. Sit tincidunt nisi massa amet. A enim pharetra massa sagittis ornare.</p>
            </div>
          </div>
        </div>
      </div>

</section>
 );
}

export default FAQ;