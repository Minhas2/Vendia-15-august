import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './LoggedINWorkstation.css'
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
  

function LoggedINWorkstation() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    
  };
  
  return (
    <section style={sectionStyle}>
      
      <h1 style={{ color: 'white' }}>LoggedINWorkstation component</h1>

     
    </section>
  );
}
  
export default LoggedINWorkstation;
