import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import './AllTransactions.css'
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
  

function AllTransactions() {
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
      
      <h1 style={{ color: 'white' }}>AllTransactions component</h1>

     
    </section>
  );
}
  
export default AllTransactions;
