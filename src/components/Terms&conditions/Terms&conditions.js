import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import { useNavigate } from 'react-router-dom';
import './Terms&conditions.css'
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
  

function TermsAndconditions() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
        flexDirection: 'column'
    
  };

  const navigate = useNavigate();
  
  return (
    <section style={sectionStyle}>
      

      <div className='text-white about-arrow1 arrow-margin' style={{ textAlign: 'left', fontSize: '30px',cursor:'pointer' }} onClick={() => navigate(-1)}>
      <img src='/arrow-left.png' alt='Go back' />
    </div>
    
    <div className='about-box p-4 mb-5 mt-4 outfit-uniquifier'>
      <div>
        <h1 className='mb-3 h1-term'>Terms & Conditions</h1>
      </div>
      
      <div>
        <h3 className='h3-term'>Welcome to Vendia</h3>
      </div>
      
      <div>
        <p className='p-term'>Welcome toVendia!</p>
        <p className='p-term'>These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Mobile Application, [Your App Name].</p>
        <p className='p-term'>By downloading or using this app, we assume you accept these terms and conditions. Do not continue to use [Your App Name] if you do not agree to take all of the terms and conditions stated on this page.</p>
        <p className='p-term'>**1. License**</p>
        <p className='p-term'>[Your Company Name] grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the app strictly in accordance with the terms of this Agreement.</p>
        
        <p className='p-term'> You must not:</p>
        <p className='p-term'>- Modify, copy, or create derivative works of the app.</p>
        <p className='p-term'>- Use the app for any commercial purpose or for any public display.</p>
        <p className='p-term'>- Attempt to reverse engineer or extract the source code of the app.</p>
        <p className='p-term'>- Remove any copyright or other proprietary notations from the app.</p>
        
        <p className='p-term'>**2. User Content**</p>
        <p className='p-term'>- Certain parts of this app may allow users to submit, post, or display content such as comments, messages, and other information ("User Content").</p>
        <p className='p-term'>- You are solely responsible for your User Content and the consequences of posting or publishing it. By submitting User Content to the app, you grant [Your Company Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content.
        </p>
        
        <p className='p-term'>**3. Restrictions**</p>
        <p className='p-term'>You agree not to:</p>
        <p className='p-term'>- Use the app in any way that could damage, disable, overburden, or impair the app.</p>
        <p className='p-term'>- Use any automated system, including but not limited to robots, spiders, or offline readers, to access the app.</p>
        <p className='p-term'> - Attempt to gain unauthorized access to the app, user accounts, computer systems, or networks connected to the app.</p>
        
        <p className='p-term'> **4. Intellectual Property**</p>
        <p className='p-term'>The app and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The app is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
        
        <p className='p-term'>**5. Privacy**</p>
        <p className='p-term'>Your use of the app is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the app and informs users of our data collection practices.</p>
        
        <p className='p-term'>**6. Termination**</p>
        <p className='p-term'>We may terminate or suspend your access to the app immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.
        </p>
        <p className='p-term'>Upon termination, your right to use the app will cease immediately. If you wish to terminate your account, you may simply discontinue using the app.</p>
        
        <p className='p-term'>**7. Changes to This Agreement</p>
        <p className='p-term'>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        
        <p className='p-term'>**8. Disclaimer**</p>
        <p className='p-term'>The app is provided on an "AS IS" and "AS AVAILABLE" basis. [Your Company Name] makes no representations or warranties of any kind, express or implied, as to the operation of the app or the information, content, or materials included in the app. You expressly agree that your use of the app is at your sole risk.</p>

        <p className='p-term'>**9. Limitation of Liability**</p>
        <p className='p-term'>To the maximum extent permitted by applicable law, in no event shall [Your Company Name], its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the app; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our app by any third party; (iv) any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the app, whether based on warranty, contract, tort (including negligence), or any other legal theory, and whether or not we have been advised of the possibility of such damages.</p>

        <p className='p-term'>**10. Governing Law**</p>
        <p className='p-term'>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>

        <p className='p-term'>**11. Contact Us**</p>
        <p className='p-term'>If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].</p>

        <p>---</p>
        <p className='p-term'>Please ensure this document is reviewed by a legal professional to meet your specific needs and local laws.</p>
      </div>
    </div>

     
    </section>
  );
}
  
export default TermsAndconditions;
