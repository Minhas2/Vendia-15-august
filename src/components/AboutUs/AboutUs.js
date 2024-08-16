import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 392px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
  const navigate = useNavigate();
  return (

    <section style={sectionStyle}>

      <div className='text-white about-arrow arrow-margin' style={{ textAlign: 'left', fontSize: '30px' }} onClick={()=>navigate(-1)}>
        {/* &larr; */}
        <img src="/arrow-left.png" alt="" />
      </div>

      <div className='about-box p-4 mb-5 mt-4 outfit-uniquifier'>

        <div>
          <h1 className='mb-3 about-header'>About US</h1>
          <h4 className='h4-font'>Trusted,Accurate Data Everywhere it Should Be-Never Where It Shouldn,t</h4>
          <p className='p-font'>Vendia is the only data automation platform that lets you power any system, anywhere, with trusted business insights and complete data oversight.
          </p>
        </div>
        <div>
          <h4 className='h4-font'>Who We Are</h4>
          <p className='p-font'>At Vendia, we are more than just a data automation platform. We leverage our data to enhance e-marketing and improve our platform. With over four years of industry experience, we have been at the forefront of digital innovation, crafting accurate strategies and boosting your product's visibility. Our platform empowers any system, anywhere, ensuring your data is always where it should be and never where it shouldn't.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>Our Mission</h4>
          <p className='p-font'>Our name reflects our core mission — helping customers automate data across companies, clouds, and technology stacks. But it also reflects how we show up as individuals with unique skills and experiences, coming together to create something amazing.
            Data sprawl affects every company and is a limiting factor in a successful digital and cloud journey. Responsible, compliant, real-time data collaboration has the power to transform industries, customer experiences, and communities — all for the better. At Vendia, we envision a world where more time, talent, and money are spent on indisputable truth, earned trust, and valuable innovation.
          </p>
        </div>

        <div>
          <h1 className='h1-font'>Our Values</h1>
          <p>Here’s an overview of the five values that make us great: Trust, Ingenuity, Growth, Responsibility and Results.
          </p>
        </div>

        <div>
          <h3 className='h3-font'>Trust</h3>
          <p className='p-font'>We build trust with customers and each other by working as a team, operating with transparency, and using good judgment.
          </p>
        </div>

        <div>
          <h3 className='h3-font'>Ingenuity</h3>
          <p className='p-font'>We embrace tough questions with curiosity and are always learning. We’re creative, inventive, and trailblazing.
          </p>
        </div>

        <div>
          <h3 className='h3-font'>Growth</h3>
          <p>We are builders with a growth mindset. We don’t settle. Instead, we strive and continuously improve in all that we do.
          </p>
        </div>

        <div>
          <h3 className='h3-font'>Responsibility</h3>
          <p className='p-font'> We own our successes and failures. We respectfully question each other, ask for feedback, and speak up if concerns arise.</p>
        </div>



      </div>


    </section>
  );
}

export default AboutUs;
