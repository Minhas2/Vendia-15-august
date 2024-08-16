import {React,useState,useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";

import Container from "react-bootstrap/Container";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
// import { useEffect, useState } from "react";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardHeader,
  MDBCol
} from 'mdb-react-ui-kit';
// import Container from "react-bootstrap/Container";
import { IoMdArrowRoundBack } from "react-icons/io";

import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function AllTransactionpage() {

  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    const intervalId = setInterval(checkIsMobile, 1);
    return () => clearInterval(intervalId);
  }, []);

  

  const handleBackButtonClick = () => {
    // Your back button logic here
    console.log("Back button clicked");
  };

 
  const sectionStyle = {
    backgroundImage: isMobile
      ? "url('../assets/vmobile.png')"
      : "url('../assets/vendiabackground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
   
  };


  return (
    // <div style={{marginTop:"100px"}}

    
    <section style={sectionStyle}>
   
    <div style={{marginTop: "70px"}}
    
    
    
    
    >
      <div className="container outfit-uniquifier">

   

<div style={{width: 38, height: 58, position: 'relative'}}>
  <div style={{width: 26.33, height: 46.33, left: 10.83, top: 35.83, position: 'absolute', border: '0px white solid', color:"white" }}>
    
<MdOutlineArrowBack  style={{color:"white"}}/>

  </div>
</div>




{/* button */}






{isMobile ? (
  <button style={{width: 333, height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 21, paddingBottom: 21, background: '#F62EFF', borderRadius: 100, border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
    <img style={{width: 24, height: 24}} src="../assets/thl2.png" />
    <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: 27, letterSpacing: 0.30, wordWrap: 'break-word'}}>All Transactions</div>
  </button>
) : (
  // <div style={{width: 940, height: 48, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
  <div style={{width: 940, height: 48, justifyContent: 'flex-start', alignItems: 'center', gap: 12, marginLeft:"50px"}}>
    <div style={{width: 333, height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 21, paddingBottom: 21, background: '#F62EFF', borderRadius: 100, border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
      <img style={{width: 20, height: 20}} src="../assets/thl2.png" />
      <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: 27, letterSpacing: 0.30, wordWrap: 'break-word'}}>All Transactions</div>
    </div>
  </div>
)}






<MDBCard className='text-center' style={{marginTop:"20px", backgroundColor:"#4113A0", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"20px"}}>
      <MDBCardHeader>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"white", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
      <MDBCardBody>
       <MDBRow style={{alignContent:"left", justifyContent:"left"}}>
        <MDBCol md="8"  style={{alignItems:"left", justifyContent:"left", display:"flex",textAlign:"left"}}>
          
          <p style={{color:'#DCDCDC', justifyContent:"left", alignItems:"left",fontSize:isMobile? "12px":"18px", display:"flex-start", marginLeft:"5px"}}>
          Confirmed. Your deposit of  150. 00 USDT was successful 
          <br/>
          on 23/6/23 at 3:41 PM
          </p>

        </MDBCol>

        
        
       </MDBRow>
      </MDBCardBody>
    </MDBCard>


    <MDBCard className='text-center' style={{marginTop:"10px", backgroundColor:"#4113A0", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"20px"}}>
      <MDBCardHeader>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"white", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
      <MDBCardBody>
       <MDBRow style={{alignContent:"left", justifyContent:"left"}}>
        <MDBCol md="8"  style={{alignItems:"left", justifyContent:"left", display:"flex",textAlign:"left"}}>
          
          <p style={{color:'#DCDCDC', justifyContent:"left", alignItems:"left",fontSize:isMobile? "12px":"18px", display:"flex-start", marginLeft:"5px"}}>
          Confirmed. Your deposit of  150. 00 USDT was successful 
          <br/>
          on 23/6/23 at 3:41 PM
          </p>

        </MDBCol>

        
        
       </MDBRow>
      </MDBCardBody>
    </MDBCard>


    <MDBCard className='text-center' style={{marginTop:"10px", backgroundColor:"#4113A0", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"20px"}}>
      <MDBCardHeader>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"white", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
      <MDBCardBody>
       <MDBRow style={{alignContent:"left", justifyContent:"left"}}>
        <MDBCol md="8"  style={{alignItems:"left", justifyContent:"left", display:"flex",textAlign:"left"}}>
          
          <p style={{color:'#DCDCDC', justifyContent:"left", alignItems:"left",fontSize:isMobile? "12px":"18px", display:"flex-start", marginLeft:"5px"}}>
          Confirmed. Your deposit of  150. 00 USDT was successful 
          <br/>
          on 23/6/23 at 3:41 PM
          </p>

        </MDBCol>

        
        
       </MDBRow>
      </MDBCardBody>
    </MDBCard>




{/* adding transparent */}
         <MDBCard className='text-center' style={{marginTop:"10px", backgroundColor:"transparent", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"0px", borderColor:"transparent"}}>
      <MDBCardHeader style={{borderColor:"transparent"}}>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"transparent", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
          </MDBCard>

          <MDBCard className='text-center' style={{marginTop:"10px", backgroundColor:"transparent", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"0px", borderColor:"transparent"}}>
      <MDBCardHeader style={{borderColor:"transparent"}}>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"transparent", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
          </MDBCard>

          <MDBCard className='text-center' style={{marginTop:"10px", backgroundColor:"transparent", marginLeft:isMobile?"15px":"50px", marginRight:isMobile?"15px":"50px", borderRadius:"0px", borderColor:"transparent"}}>
      <MDBCardHeader style={{borderColor:"transparent"}}>

        
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{color:"transparent", fontWeight:"600", marginLeft:"5px"}}> Confirmed</div>
          
        </div>
      </MDBCardHeader>
          </MDBCard>
      
       



          </div>

    </div>

    </section>

   
  );
}
