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

import Navbarr from "./Navbarr";
import Navbarrr2 from "./Navbarrr2";

export default function CashOutHistoryPage() {

  

  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionStyle = {
    backgroundImage: isMobile
      ? "url('../assets/vmobile.png')"
      : "url('../assets/vendiabackground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
   
  };

 
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

  return (
   
    // <div style={{marginTop:"100px"}}

    
    <section style={sectionStyle}>
       

<Navbarrr2/>
<Navbarr/>
      
    <div style={{marginTop: "70px"}}>
      <div className="container outfit-uniquifier ">

   

<div style={{width: 38, height: 58, position: 'relative'}}>
  <div style={{width: 26.33, height: 46.33, left: 10.83, top: 35.83, position: 'absolute', border: '0px white solid', color:"white" }}>
    
<MdOutlineArrowBack  style={{color:"white"}}/>

  </div>
</div>




{/* button */}






{isMobile ? (
  <div style={{width: "85%", height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 21, paddingBottom: 21, background: '#F62EFF', borderRadius: 100, border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex', marginBottom:"10px"}}>

    <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: 27, letterSpacing: 0.30, wordWrap: 'break-word'}}>Cash Out History</div>
  </div>
) : (

  <div style={{width: 940, height: 48, justifyContent: 'flex-start', alignItems: 'center', gap: 12, marginLeft:"50px" ,marginTop:"50px"}}>
    <div style={{width: 333, height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 21, paddingBottom: 21, background: '#F62EFF', borderRadius: 100, border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
     
      <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: 27, letterSpacing: 0.30, wordWrap: 'break-word'}}>Cash Out History</div>
    </div>
  </div>
)}







    <MDBCard className='text-center' style={{ marginTop: "10px", backgroundColor: "#4113A0", marginLeft: isMobile ? "15px" : "50px", marginRight: isMobile ? "15px" : "auto", borderRadius: "20px" }}>
      <MDBCardBody>
        <MDBRow style={{ margin: 0 }}>
          <MDBCol style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
            <div style={{ width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2, background: '#4113A0', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word' }}>USDT</div>
                <div style={{ color: '#F30F38', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>-500</div>
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>2024-06-09 17:58.00</div>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Completed</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        
      </MDBCardBody>
    </MDBCard>
    
    <MDBCard className='text-center' style={{ marginTop: "10px", backgroundColor: "#4113A0", marginLeft: isMobile ? "15px" : "50px", marginRight: isMobile ? "15px" : "auto", borderRadius: "20px" }}>
      <MDBCardBody>
        <MDBRow style={{ margin: 0 }}>
          <MDBCol style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
            <div style={{ width: '100%', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#4113A0', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word' }}>USDT</div>
                <div style={{ color: '#F30F38', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>-500</div>
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>2024-06-09 17:58.00</div>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Completed</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        
      </MDBCardBody>
    </MDBCard>
    
    <MDBCard className='text-center' style={{ marginTop: "10px", backgroundColor: "#4113A0", marginLeft: isMobile ? "15px" : "50px", marginRight: isMobile ? "15px" : "auto", borderRadius: "20px" }}>
      <MDBCardBody>
        <MDBRow style={{ margin: 0 }}>
          <MDBCol style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
            <div style={{ width: '100%', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#4113A0', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word' }}>USDT</div>
                <div style={{ color: '#F30F38', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>-500</div>
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>2024-06-09 17:58.00</div>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Completed</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        
      </MDBCardBody>
    </MDBCard>
    
    <MDBCard className='text-center' style={{ marginTop: "10px", backgroundColor: "#4113A0", marginLeft: isMobile ? "15px" : "50px", marginRight: isMobile ? "15px" : "auto", borderRadius: "20px" }}>
      <MDBCardBody>
        <MDBRow style={{ margin: 0 }}>
          <MDBCol style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
            <div style={{ width: '100%', height: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#4113A0', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Outfit', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word' }}>USDT</div>
                <div style={{ color: '#F30F38', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>-500</div>
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>2024-06-09 17:58.00</div>
                <div style={{ color: '#DCDCDC', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', lineHeight: '19.20px', wordWrap: 'break-word' }}>Completed</div>
              </div>
            </div>
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
