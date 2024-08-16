import {React,useState,useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';


import {
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import {
    // MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  
import { IoMdArrowRoundBack } from "react-icons/io";

import { Modal, Button } from 'react-bootstrap';



import { GoDotFill } from "react-icons/go";









import './models.css'

export default function WorkStationPage() {



    // adding popup button
    const [centredModal, setCentredModal] = useState(false);

    const toggleOpen = () => setCentredModal(!centredModal);
//   

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

  // ading section style
  const sectionStyle = {
    backgroundImage: isMobile
    ? "url('../assets/vmobile.png')"
    : "url('../assets/vendiabackground.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
    
  };

// adding model
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);

// const handleShow = () => setShow(true);
// const handleClose = () => setShow(false);
// const handleConfirm = () => {
//   console.log("Confirm clicked");
//   setShow(false);
// };
// const handleCancel = () => {
//   console.log("Cancel clicked");
//   setShow(false);
// };

// adding some stuff for model

const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
const handleConfirm = () => {
  console.log("Confirm clicked");
  setShow(false);
};
const handleCancel = () => {
  console.log("Cancel clicked");
  setShow(false);
};



// for model 2
const handleShow2 = () => setShow2(true);
const handleClose2 = () => setShow2(false);
const handleConfirm2 = () => {
  console.log("Confirm clicked");
  setShow2(false);
};
const handleCancel2 = () => {
  console.log("Cancel clicked");
  setShow2(false);
};


//  for desktop view  model 2 

const modalStyle = {
  width: '100%',
  height: '100%',
  padding: 35.18,
  background: '#4113A0',
  borderRadius: 35.18,
  border: '1.47px white solid',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 46.91,
};

const headerStyle = {
  height: 124.45,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 23.45,
};

const titleStyle = {
  alignSelf: 'stretch',
  textAlign: 'center',
  color: 'white',
  fontSize: 26.39,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '36.94px',
  wordWrap: 'break-word',
};
// const titleStyle2body={
//   alignSelf: 'stretch',
//   textAlign: 'center',
//   color: '#C1C1C1',
//   fontSize: 20.52,
//   fontFamily: 'Work Sans',
//   fontWeight: 400,
//   lineHeight: '31.94px',
//   wordWrap: 'break-word',
// }

const bodyTextStyle = {
  width: 378.19,
  textAlign: 'center',
  color: '#C1C1C1',
  fontSize: 20.52,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '31.81px',
  wordWrap: 'break-word',
};


// const bodyTextStyle2 = {
//   width: 378.19,
//   textAlign: 'left',
//   color: '#C1C1C1',
//   fontSize: 20.52,
//   fontFamily: 'Work Sans',
//   fontWeight: 600,
//   lineHeight: '31.81px',
//   wordWrap: 'break-word',
// };

const buttonContainerStyle = {
  width: 419.23,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const buttonStyle = {
  width: 197.89,
  height: 70.36,
  padding: '11.73px 23.45px',
  borderRadius: 146.58,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 11.73,
};



const cancelButtonStyle = {
  ...buttonStyle,
  border: '1.47px #6A6A6A solid',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
  background: 'none',
};

const confirmButtonStyle = {
  ...buttonStyle,
  background: '#F62EFF',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
};

const buttonTextStyle = {
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '24.80px',
  wordWrap: 'break-word',
};

//  for desktop  view model  1 end


//  for mobile  view model 1



const modalStyleM = {
  width: '100%',
  height: '100%',
  padding: 24,
  background: '#4113A0',
  borderRadius: 24 ,

  boxShadow: '0 0 0 1px white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 32,
};



const headerStyleM = {
  height: 85,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16,
};

const titleStyleM = {
  alignSelf: 'stretch',
  textAlign: 'center',
  color: 'white',
  fontSize: 18,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '25.20px',
  wordWrap: 'break-word',
};

const bodyTextStyleM = {
  width: 258,
  textAlign: 'center',
  color: '#C1C1C1',
  fontSize: 14,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '21.70px',
  wordWrap: 'break-word',
};

const buttonContainerStyleM = {
  width: 286,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 16,
};

const buttonStyleM = {
  flex: '1 1 0',
  height: 48,
  padding: '8px 16px',
  borderRadius: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

const cancelButtonStyleM = {
  ...buttonStyleM,
  border: '1px #6A6A6A solid',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
  background: 'none',
};

const confirmButtonStyleM = {
  ...buttonStyleM,
  background: '#F62EFF',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
};

const buttonTextStyleM = {
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '24.80px',
  wordWrap: 'break-word',
};


//  for  model mobile view  end 




//  for model 2 mobile view


//  for model 2 laptop view



// adding for model 2

const modalStyle2 = {
  width: '100%',
  height: '100%',
  padding: 35.18,
  background: '#4113A0',
  borderRadius: 35.18,
  border: '1.47px white solid',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 46.91,
};

const headerStyle2 = {
  height: 92.45,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 23.45,
};

const titleStyle2 = {
  alignSelf: 'stretch',
  textAlign: 'center',
  color: 'white',
  fontSize: 26.39,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '36.94px',
  wordWrap: 'break-word',
};

const bodyTextStyle2 = {
  width: 378.19,
  textAlign: 'center',
  color: '#C1C1C1',
  fontSize: 20.52,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '31.81px',
  wordWrap: 'break-word',
};

const reminderContainerStyle2 = {
  alignSelf: 'stretch',
  height: 163,
  padding: 12,
  background: 'rgba(255, 255, 255, 0.10)',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 16,
};

const reminderTitleStyle2 = {
  alignSelf: 'stretch',
  color: 'white',
  fontSize: 20,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '28px',
  wordWrap: 'break-word',
};

const reminderTextStyle2 = {
  alignSelf: 'stretch',
  color: '#C1C1C1',
  fontSize: 16,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '24.80px',
  wordWrap: 'break-word',
};

const buttonContainerStyle2 = {
  width: 419.23,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 23.45,
};

const confirmButtonStyle2 = {
  width: 420,
  height: 70,
  padding: '11.73px 23.45px',
  background: '#F62EFF',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
  borderRadius: 146.58,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 11.73,
};

const buttonTextStyle2 = {
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  fontFamily: 'Inter Tight',
  fontWeight: 600,
  letterSpacing: 0.16,
  wordWrap: 'break-word',
};



// testing model 2



//  adding css for model 2 mobile view

const modalStyle2mobile = {
  width: '100%',
  height: '100%',
  padding: 24,
  background: '#4113A0',
  // background: 'transparent',
  
  borderRadius: 24,
  border: '1px white solid',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 32,
  
};

const headerStyle2mobile = {
  height: 63,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16,
};

const titleStyle2mobile = {
  alignSelf: 'stretch',
  textAlign: 'center',
  color: 'white',
  fontSize: 18,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '25.20px',
  wordWrap: 'break-word',
};

const bodyTextStyle2mobile = {
  width: 258,
  textAlign: 'center',
  color: '#C1C1C1',
  fontSize: 14,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '21.70px',
  wordWrap: 'break-word',
};

const reminderContainerStyle2mobile = {
  alignSelf: 'stretch',
  height: 175,
  padding: 12,
  background: 'rgba(255, 255, 255, 0.10)',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 16,
};

const reminderTitleStyle2mobile = {
  alignSelf: 'stretch',
  color: 'white',
  fontSize: 18,
  fontFamily: 'Work Sans',
  fontWeight: 600,
  lineHeight: '25.20px',
  wordWrap: 'break-word',
};

const reminderTextStyle2mobile = {
  alignSelf: 'stretch',
  color: '#C1C1C1',
  fontSize: 14,
  fontFamily: 'Work Sans',
  fontWeight: 400,
  lineHeight: '21.70px',
  wordWrap: 'break-word',
};

const buttonContainerStyle2mobile = {
  width: 286,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
};

const confirmButtonStyle2mobile = {
  flex: '1 1 0',
  height: 48,
  padding: '8px 16px',
  background: '#F62EFF',
  boxShadow: '0px 1px 2px rgba(13, 13, 18, 0.06)',
  borderRadius: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

const buttonTextStyle2mobile = {
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  fontFamily: 'Inter Tight',
  fontWeight: 600,
  letterSpacing: 0.16,
  wordWrap: 'break-word',
};
const iconStyle2mobile = {
  marginRight: 8, // Space between the icon and the text
  verticalAlign: 'middle', // Align the icon vertically with the text
};

  return (

    <section style={sectionStyle}>

     <div style={{marginTop:"70px"}}>

       {/*code  */}
       {/* <div className="container"  style={{position:"relative", height:"100%"}}> */}
 

       {/* <Button variant="primary" onClick={handleShow}>
        Show Modal
      </Button>


      <Button variant="primary" onClick={handleShow2}>
        Show Modal 2
      </Button> */}


      {
        isMobile? (
          <>
         
          <Modal show={show} onHide={handleClose} centered  style={{ backdropFilter: 'blur(10px)'}} >
        <div style={modalStyleM } >
          <div style={headerStyleM}>
            <div style={titleStyleM}>Vendia</div>
            <div style={bodyTextStyleM}>Account balance must be above 100.00 USDT to begin submission.</div>
          </div>
          <div style={buttonContainerStyleM}>
            <Button variant="secondary" onClick={handleCancel} style={cancelButtonStyleM}>
              <div style={buttonTextStyleM}>Cancel</div>
            </Button>
            <Button variant="primary" onClick={handleConfirm} style={confirmButtonStyleM}>
              <div style={{ ...buttonTextStyleM, fontFamily: 'Inter Tight', letterSpacing: 0.16 }}>Confirm</div>
            </Button>
          </div>
        </div>
      </Modal>

          
          


          </>
        ):(
          <>
            <Modal show={show} onHide={handleClose} centered style={{ backdropFilter: 'blur(10px)'}}>
        <div style={modalStyle} className="outfit-uniquifier">
          <div style={headerStyle}>
            <div style={titleStyle}>Vendia</div>
            <div style={bodyTextStyle}>Account balance must be above 100.00 USDT to begin submission.</div>
          </div>
          <div style={buttonContainerStyle}>
            <Button variant="secondary" onClick={handleCancel} style={cancelButtonStyle}>
              <div style={buttonTextStyle}>Cancel</div>
            </Button>
            <Button variant="primary" onClick={handleConfirm} style={confirmButtonStyle}>
              <div style={{ ...buttonTextStyle, fontFamily: 'Inter Tight', letterSpacing: 0.16 }}>Confirm</div>
            </Button>
          </div>
        </div>
           </Modal>

          </>
        )
      }


      {
        isMobile? 
        ( <>
        <Modal show={show2} onHide={handleClose2} centered  style={{ backdropFilter: 'blur(10px)'}}>
        <div style={modalStyle2mobile}>
          <div style={headerStyle2mobile}>
            <div style={titleStyle2mobile}>Vendia</div>
            <div style={bodyTextStyle2mobile}>Opening Hours: 10:00:00 - 22:00:00</div>
          </div>
          <div style={reminderContainerStyle2mobile}>
            <div style={reminderTitleStyle2mobile}>Key Reminder</div>
            <div style={reminderTextStyle2mobile}>
              
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <GoDotFill style={iconStyle2mobile} />
                <span>Operating hours are from 10:00 to 22:00.</span>
              </div>
              <br />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <GoDotFill style={iconStyle2mobile} />
                <span>Products distribution will be paused outside of operating hours.</span>
              </div>

              </div>
          </div>
          <div style={buttonContainerStyle2mobile}>
            <Button variant="primary" onClick={handleConfirm2} style={confirmButtonStyle2mobile}>
              <div style={buttonTextStyle2mobile}>Confirm</div>
            </Button>
          </div>
        </div></Modal>

        </>)
        :
        (
          <> 
              <Modal show={show2} onHide={handleClose2} centered style={{ backdropFilter: 'blur(10px)'}}>

              <div style={modalStyle2}>
                        <div style={headerStyle2}>
                          <div style={titleStyle2}>Vendia</div>
                          <div style={bodyTextStyle2}>Opening Hours: 10:00:00 - 22:00:00</div>
                        </div>
                        <div style={reminderContainerStyle2}>
                          <div style={reminderTitleStyle2}>Key Reminder</div>
                          <div style={reminderTextStyle2}>
                            
                            {/* Operating hours are from 10:00 to 22:00.<br />Products distribution will be paused outside of operating hours.</div> */}
                        
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                <GoDotFill style={iconStyle2mobile} />
                <span>Operating hours are from 10:00 to 22:00.</span>
              </div>
              <br />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <GoDotFill style={iconStyle2mobile} />
                <span>Products distribution will be paused outside of operating hours.</span>
              </div>
              </div>
                        </div>
                        <div style={buttonContainerStyle2}>
                          <Button variant="primary" onClick={handleConfirm2} style={confirmButtonStyle2}>
                            <div style={buttonTextStyle2}>Confirm</div>
                          </Button>
                        </div>
                      </div>
              </Modal>  
      
          </>
        )

      }

     
    


 <div className="container-fluid" style={{
 
         backgroundImage: isMobile ? "none" : "url('../assets/topbackgroundofws.png')", // Replace with your image path
         backgroundSize: "cover",
         backgroundPosition: "center",
         padding: "10px",
         width:"100%"

         
         
 
       }}>
 

         {isMobile && (

   <div style={{height:"22px", width:"22px" , flexShrink:"0", marginLeft:"15px",marginTop:"10px"}}>
     <IoMdArrowRoundBack  onClick={handleBackButtonClick} style={{color:"white"}}>
       back
     </IoMdArrowRoundBack>
   </div>
 )}
 
 
 {/* display in row and colums  */}
         
       {isMobile ? (
         <>
 {/*mobile view  */}
         <div className="row" >
 
           
             {/* Column 1: Profile Photo */}
             <div className="col-lg-3 col-md-4 col-sm-2 col-4 order-lg-1 order-md-1 order-sm-1 order-1">
               <img
                 src="../assets/pp.png" // Replace with the actual image path
                 alt="Profile"
                 style={{ width: '100%', borderRadius: '50%',boxShadow:
                  "rgba(104, 70, 205, 0.5) 1px -4px 30px 30px", marginTop:"20px"
                 }} // Styling the image as a circle
               />
             </div>
           
           
             {/* Column 2: Username and Email */}
             <div className="col-lg-3 col-md-4 col-sm-8 col-4 order-lg-2 order-md-2 order-sm-2 order-2" style={{padding:"10px"}}>
               <div style={{ color: "white", marginTop: "30px", marginLeft:"-22px", fontSize:"22.08px" , fontWeight:"600"}}>Yeezy Yanel</div>
               <p style={{ color: "white", marginTop: "2px", fontSize:isMobile?"12px":"35px", marginLeft:"-18px"  }}>YeezyYanel@gmail.com</p>
             </div>
        
             {/* Column 4: Three Rows */}
 
 {/* updating it  */}
 <div className="col-lg-3 col-md-4 col-sm-2 col-4 order-lg-4 order-md-3 order-sm-3 order-3" style={{ padding: "5px", marginBottom:"20px" }}>
   <div className="row mb-3">
     <div className="col d-flex justify-content-center">
       <img
         src="../assets/goldimg.png" // Replace with actual image path
         alt="Description"
         style={{ width: '70%', marginTop:"-20px" }} // Styling the image
       />
     </div>
   </div>
   <div className="row mb-3">
     <div className="col text-center">
       <p  onClick={handleShow2} style={{ color: "white", fontSize: "15px", marginTop: "-15px" }}>Gold</p>
     </div>
   </div>
   <div className="row">
     <div className="col d-flex justify-content-center">
       <button className="btn" onClick={handleShow} style={{ backgroundColor: "transparent", border: "2px solid white", borderRadius: "20px", color: "white", fontSize: "10px", marginTop:"-30px" }}>Upgrade</button>
     </div>
   </div>
 </div>
          </div>
               <div className="col-12 order-sm-4 order-4">
               <div className="row" style={{marginTop:"10px", padding:"10px"}}>
                 <div className="col-6 mb-3">
                   <div className="card" style={{ backgroundColor: "white", borderRadius: "19px" }}>
                     <div className="card-body" style={{ backgroundColor: "black", borderRadius: "20px" }}>
                       <p className="card-title" style={{ color: "white", textAlign:"left" }}>Today's Profile</p>
                       <p className="card-text" style={{ fontSize: '23.58px', color: "white", fontWeight: "800", textAlign:"left" }}>697 USDT</p>
                       <p className="card-text" style={{ backgroundColor: "black", color: "#2CE1FA", fontSize: "14.14px", textAlign:"left",marginTop:"-9px" }}>+3.57%</p>
                     </div>
                   </div>
                 </div>
                 <div className="col-6">
                   <div className="card" style={{ backgroundColor: "white", borderRadius: "19px" }}>
                     <div className="card-body" style={{ backgroundColor: "black", borderRadius: "20px" }}>
                       <p className="card-title" style={{ color: "white" , textAlign:"left"}}>Balance</p>
                       <p className="card-text" style={{ fontSize: '23.58px', fontWeight: "800", color: "white", textAlign:"left" }}>697 USDT</p>
                       <p className="card-text" style={{ color: "#FA2C2C", fontSize: "14.14px" , textAlign:"left", marginTop:"-9px"}}>-1.62%</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           
           
         </>
       ) : (
         <div className="row  " style={{marginTop:"50px", marginBottom:"20px"}} >
           {/* Column 1: Profile Photo */}
           <div className="col-lg-2 col-md-4 col-sm-4 col-4 order-lg-1 order-md-1 order-sm-1 order-1">
             <img
               src="../assets/pp.png" // Replace with the actual image path
               alt="Profile"
               style={{ width: '100%', marginLeft:"45px",marginTop:"50px", boxShadow:
                "rgba(84, 70, 205, 0.5) 1px -4px 30px 30px",
              borderRadius: "50%", }} // Styling the image as a circle
             />
           </div>
           {/* Column 2: Username and Email */}
           {/* <div className="col-lg-4 col-md-4 col-sm-4 col-4 order-lg-2 order-md-2 order-sm-2 order-2 " style={{paddingTop:"80px"}}> */}
           <div className="col-lg-4 col-md-4 col-sm-4 col-4 order-lg-2 order-md-2 order-sm-2 order-2 " style={{marginTop:"50px"}}>
             <p style={{ color: "white", marginTop: "40px", fontSize:"48px", fontWeight:"700" }}>Yeezy Yanel</p>
             <p style={{ color: "#C9C9C9", marginTop: "4px" , fontSize:"25px" }}>YeezyYanel@example.com</p>
           </div>
           {/* Column 4: Three Rows */}
           <div className="col-lg-2 col-md-4 col-sm-4 col-4 order-lg-4 order-md-3 order-sm-3 order-3">
             <div className="row mb-3" >
               <div className="col d-flex justify-content-center" style={{padding:"0px"}}>
                 <img
                   src="../assets/goldimg.png" // Replace with actual image path
                   alt="Description"
                   style={{ width: '70%' }} // Styling the image
                 />
               </div>
             </div>
             <div className="row mb-3">
               <div className="col text-center " style={{alignContent:"center", padding:"0px"}}>
                 <p onClick={handleShow2} style={{color:"white",  fontSize:"25px", marginTop:"-20px"}}>Gold</p>
               </div>
             </div>
             <div className="row">
               <div className="col d-flex justify-content-center">
                 {/* <button className="btn" style={{backgroundColor:"transparent", border:"2px solid white",borderRadius:"20px", marginLeft:"10%",marginTop:"-50px", color:"white" onClick={toggleOpen}}>Upgrade</button> */}
                 {/* <button className="btn" style={{ backgroundColor: "transparent", border: "2px solid white", borderRadius: "20px", color: "white" , marginTop:"-25px" }} onClick={toggleOpen}>Upgrade</button> */}
                 <button onClick={handleShow} className="btn" style={{ backgroundColor: "transparent", border: "2px solid white", borderRadius: "20px", color: "white" , marginTop:"-25px" }}>Upgrade</button>
               </div>
             </div>
           </div>
           {/* Column 3: Two Cards */}
           <div className="col-lg-4 col-md-6 col-sm-12 col-12 order-lg-3 order-md-4 order-sm-4 order-4">
             <div className="card mb-3" style={{ backgroundColor: "white", borderRadius: "19px" }}>
               <div className="card-body" style={{ backgroundColor: "black", borderRadius: "20px" , textAlign:"left"}}>
                 <h5 className="card-title" style={{ color: "white" , fontSize:"16px"}}>Today's Profile</h5>
                 <p className="card-text" style={{ fontSize: '36px', color: "white", fontWeight: "800" }}>697 USDT</p>
                 <p className="card-text" style={{ backgroundColor: "black", color: "green", fontSize: "22px" }}>+3.57%</p>
               </div>
             </div>
             <div className="card" style={{ backgroundColor: "white", borderRadius: "19px" }}>
               <div className="card-body" style={{ backgroundColor: "black", borderRadius: "20px", textAlign:"left" }}>
                 <h5 className="card-title" style={{ color: "white", fontSize:"16px" , textAlign:"left"}}>Balance</h5>
                 <p className="card-text" style={{ fontSize: '36px', fontWeight: "800", color: "white" }}>697 USDT</p>
                 <p className="card-text" style={{ color: "red", fontSize: "22px" }}>-1.62%</p>
               </div>
             </div>
           </div>
         </div>
        
       )}
 
 
 
      </div>
 
 
 
 {/* </div> */}
 
 
 {/* images */}
 
 <div  className='container' >
 
     
 
 
 <MDBRow className='row-cols-3 row-cols-md-3 g-4'style={{padding:isMobile?"5px":"150px"}}>
   <MDBCol style={{marginBottom:"50px"}}>
     <MDBCard className='h-100'  style={{ background: 'linear-gradient(to bottom, #2CE1FA, #FFFFFF)',borderRadius:isMobile?"19.8px":"20px"}}>
       <MDBCardImage
         src='../assets/boot1.png'
         alt='...'
         position='top' 
         style={{margin:"0px" , padding:isMobile ? "20px" : "60px"}}
       />
       <MDBCardImage
         src='../assets/3_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "60px"}}
       />
       <MDBCardImage
         src='../assets/6_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "60px"}}
       />
 
       
     </MDBCard>
   </MDBCol>
 
   <MDBCol style={{marginBottom:"50px"}}>
  
 
     <MDBCard className='h-100' style={{ background: 'linear-gradient(to bottom, #FC7EFF, #FFFFFF)',borderRadius:isMobile?"19.8px":"20px"}}>
       <MDBCardImage
         src='../assets/2_.png'
         alt='...'
         position='top' 
         style={{marginTop:isMobile?"-10px":"0px" , padding:isMobile ? "20px" : "75px"}}
       />
       <MDBCardImage
         src='../assets/4_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "65px"}}
       />
       <MDBCardImage
         src='../assets/5_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "65px"}}
       />
 
       
     </MDBCard>
   </MDBCol>
 
 
   <MDBCol style={{marginBottom:"50px"}}>
     <MDBCard className='h-100' style={{ background: 'linear-gradient(to bottom, #2CF1FA, #FFFFFF)',borderRadius:isMobile?"19.8px":"20px"}}>
       {/* <MDBCardImage
         src='../assets/7_.png'
         alt='...'
         position='top' 
         style={{margin:"0px" , padding:isMobile ? "20px" : "65px"}}
       />
       <MDBCardImage
         src='../assets/8_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "65px"}}
       />
       <MDBCardImage
         src='../assets/9_.png'
         alt='...'
         position='top'
         style={{margin:"0px" ,  padding:isMobile ? "20px" : "65px"}}
       /> */}

       
 
       
     </MDBCard>
   </MDBCol>



 
 </MDBRow>



       
 
 
 
 
 
 </div>
 

     </div>

     {isMobile ? (
   <div style={{ width: "100%", justifyContent: "center"}}>
   {/* <div style={{ width: "inherit", justifyContent: "center"}}> */}
     <div style={{ position: "relative" }}>
       <img src="../assets/sbmobile.png" alt="" 
         style={{ position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
     </div>
   </div>
 ) : (
   <div style={{ width: "100%" }}>
     <img src="../assets/slidetostart.png" alt=""  style={{width:"inherit"}}/>
   </div>
 )}
        
      


    </section>
  );
}