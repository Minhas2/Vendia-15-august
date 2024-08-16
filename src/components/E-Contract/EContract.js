import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './EContract.css'
import { useNavigate } from 'react-router-dom';

function EContract() {
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

      <div className='text-white about-arrow1 arrow-margin' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      
        <img src='/arrow-left.png' alt='Go back' />
      </div>

      <div className='about-box p-4 mb-5 mt-4 outfit-uniquifier'>

        <div>
          <h1 className='mb-3 h1-font'>E-Contract Agreement</h1>
          <p>Effective Date: 03/08/2021</p>
        </div>
        <div>
          <h4 className='h4-font'>1. Introduction</h4>
          <p className='p-font'>By signing up for an account with Vendia, you ("User") agree to abide by the
            terms and conditions outlined in this E-Contract Agreement ("Agreement"). This Agreement governs your access to and use of Vendia's services, including data
            amplification and related digital products. This role is a freelance, selfemployment
            position and does not require a physical contract beyond this
            universal e-contract.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>2. Acceptance of Terms</h4>
          <p className='p-font'>By clicking "Accept" or similar, you acknowledge that you have read, understood, and agree to be bound by this Agreement and our Privacy Policy.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>3. Services Provided</h4>
          <p className='p-font'>Vendia offers a platform for digital product amplification and data automation services.The specifics of these services are subject to change at any time at the discretion of Vendia.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>4. User Responsibilities</h4>
          <p className='p-font'>Provide accurate and complete registration information. <br />
            Maintain the security of your account credentials. <br />
            Comply with all applicable laws and regulations. <br />
            Refrain from using Vendia's services for any unlawful or prohibited activities.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>5. Nature of Employment</h4>
          <p className='p-font'>The User acknowledges that this role is a freelance, self-employment position. No physical contract is required beyond this universal e-contract. <br />
            The User is responsible for managing their own taxes and benefits as a selfemployed individual.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>6. Salary Package</h4>
          <p className='p-font'>Users will receive competitive earnings based on their membership level: <br />
            Starter: $1,100 per week <br />
            Premium: $1,300 per week <br />
            Deluxe: $1,700 per week <br />
            Elite: $2,400 per week <br />
            Earnings include daily commissions based on project contributions. Detailed payment terms, including frequency and methods, will be specified in project agreements.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>7. Confidentiality</h4>
          <p className='p-font'>Users must maintain the confidentiality of any proprietary information received through their engagement with Vendia. Unauthorized disclosure of such information is prohibited.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>8. Intellectual Property</h4>
          <p className='p-font'>All intellectual property rights related to the services provided by Vendia, including but not limited to software, data, and trademarks, remain the property of Vendia.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>9. Termination</h4>
          <p className='p-font'>Vendia reserves the right to suspend or terminate your account and access to our services at any time, without notice, for conduct that Vendia believes violates this Agreement or is harmful to other users of the service.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>10. Limitation of Liability</h4>
          <p className='p-font'>Vendia is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>11. Changes to Terms</h4>
          <p className='p-font'>Vendia reserves the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. Continued use of the services constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h4 className='mb-3 h4-font'>12. Contact Information</h4>
          <p className='p-font'>For any questions or concerns regarding this Agreement, please contact our customer service team.
          </p>
        </div>




      </div>


    </section>
  );
}

export default EContract;
