
// adding my stuff test 01

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaGlobe } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookies from 'js-cookie';
import { FaBell } from "react-icons/fa";


import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [testmobile, settestmobile]=useState(false);

  const texts = {
    en: {
      credit: "Credit",
      cashout: "Cashout",
      membership: "Memberships",
      transactionHistory: "Transaction History",
      products: "Products",
      termsAndConditions: "Terms & Conditions",
      more: "More",
      profile: "Profile",
      checkIn: "Check-In",
      customerService: "Customer Service",
      cashoutDetails: "Cashout Details",
      eventDetails: "Event Details",
      
      LogOut: "Log Out"
    }
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    const intervalId = setInterval(checkIsMobile, 1);
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    const checktestmobile = () => {
      settestmobile(window.innerWidth > 1024);
    };
    settestmobile();
    const intervalId = setInterval(settestmobile, 1);
    return () => clearInterval(intervalId);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const handleNavMouseEnter = (e) => {
    e.target.style.color = "#F62EFF"; // Change background color on hover
  };

  const handleNavMouseLeave = (e) => {
    e.target.style.color = "#000"; // Reset background color on mouse leave
  };

  
  return (

    <div className="outfit-uniquifier">
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        padding: "0.1rem 0",
        height: "5rem",
        top: "0",
        backgroundColor: isMobile ? "#4113A0" : "#fff",
      
      }}
    >
      <Container style={{ backgroundColor: isMobile ? "#4113A0" : "#fff" }}>
        {/* for barand logg */}
      {!isMobile && (
  <Navbar.Brand
    as={Link}
    to="/"
    onClick={() => setExpanded(false)}
    style={{ margin: "0px 10px" }}
  >
    <img
      src={"../assets/vendialogo.png"}
      alt=""
      style={{
        width: "183px",
        // width: "210px",
        height: "38px",
        margin: "auto",
        marginRight: "auto",
      }}
    />
  </Navbar.Brand>
      )}
      {/* for toggle left and notification icon on right */}

        {isMobile ? (
          <>
       
          <button
            aria-controls="navbarScroll"
            onClick={handleToggle}
            className={expanded ? "black-toggle" : ""}
            style={{
              
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "white",
              marginLeft:'20px'
            }}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </button>

        
   
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <IoIosNotificationsOutline style={{ margin: "10px", fontSize: "35px", color :"white" }} />
    <span style={{
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px'
    }}>
      3 {/* Replace with the actual notification count */}
    </span>
  </div>


    
  </>
         

        ) : null}

        <Navbar.Collapse id="navbarScroll" >
          {/* <Nav className="ml-auto my-2 my-lg-0" navbarScroll  style={{border:'1px solid black', borderRadius:'20px'}}> */}
      

          
          <Nav   className={`ml-auto my-2 my-lg-0 ${isMobile ? '' : 'border-class'}`}  navbarScroll style={isMobile ? {} : { border: '1px solid black', borderRadius: '20px' }  }>
            <Nav.Link
              as={Link}
              to="/credit"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px",  padding: isMobile ? "10px 25px" : '5px'  ,textAlign: isMobile ? "left" : "center"   }}
            >
              {texts.en.credit}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cashout"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px'  ,textAlign: isMobile ? "left" : "center"  }}
            >
              {texts.en.cashout}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/membership"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px',textAlign: isMobile ? "left" : "center"  }}
            >
              {texts.en.membership}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/AllTransactionsHistory"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px"  , padding: isMobile ? "10px 25px" : '5px' ,textAlign: isMobile ? "left" : "center" }}
            >
              {texts.en.transactionHistory}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px' ,textAlign: isMobile ? "left" : "center"  }}
            >
              {texts.en.products}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/termsAndConditions"
              onClick={handleNavLinkClick}
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
              style={{ fontWeight: "500", color:isMobile ? "white" : "black", fontSize: "14px" , padding: isMobile ? "10px 25px" : '5px' ,textAlign: isMobile ? "left" : "center"  }}
            >
              {texts.en.termsAndConditions}
            </Nav.Link>
      
            {/* ADDINF AND REMOVEING DROPDOWN */}
           
           
           
            {isMobile ? (
  <>
    <Nav.Link
      as={Link}
      to="/WebProfile"
      onClick={handleNavLinkClick}
      style={{
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        padding: "10px 25px",
        backgroundColor: "#4113A0",
        transition: "background-color 0.3s",
        // display: "block", // Ensure full width for mobile view
        textAlign: isMobile ? "left" : "center" 
      }}
    >
      {texts.en.profile}
    </Nav.Link>
    <Nav.Link
      as={Link}
      to="/checkIn"
      onClick={handleNavLinkClick}
      style={{
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        padding: "10px 25px",
        backgroundColor: "#4113A0",
        transition: "background-color 0.3s",
        // display: "block", // Ensure full width for mobile view
        textAlign: isMobile ? "left" : "center" 
      }}
    >
      {texts.en.checkIn}
    </Nav.Link>
    <Nav.Link
      as={Link}
      to="/customerService"
      onClick={handleNavLinkClick}
      style={{
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        padding: "10px 25px",
        backgroundColor: "#4113A0",
        transition: "background-color 0.3s",
        // display: "block", // Ensure full width for mobile view
        textAlign: isMobile ? "left" : "center"
      }}
    >
      {texts.en.customerService}
    </Nav.Link>
    <Nav.Link
      as={Link}
      to="/cashoutDetails"
      onClick={handleNavLinkClick}
      style={{
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        padding: "10px 25px",
        backgroundColor: "#4113A0",
        transition: "background-color 0.3s",
        // display: "block", // Ensure full width for mobile view
        textAlign: isMobile ? "left" : "center"
      }}
    >
      {texts.en.cashoutDetails}
    </Nav.Link>
    <Nav.Link
      as={Link}
      to="/eventDetails"
      onClick={handleNavLinkClick}
      style={{
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        padding: "10px 25px",
        backgroundColor: "#4113A0",
        transition: "background-color 0.3s",
        // display: "block", // Ensure full width for mobile view
        textAlign: isMobile ? "left" : "center"
      }}
    >
      {texts.en.eventDetails}
    </Nav.Link>
  </>
              ) : (
                <NavDropdown
                  title={texts.en.more}
                  id="basic-nav-dropdown"
                  className="no-caret dropdown-menu.show"
                  style={{
                    fontWeight: "500",
                    color: "#000",
                    fontSize: "14px",
                    border: "none",
                    padding: "0px",
                    borderRadius: "35px",
                  }}
                >
                  {/* Dropdown items for desktop view */}
                  <NavDropdown.Item
                    as={Link}
                    to="/WebProfile"
                    onClick={handleNavLinkClick}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px 25px",
                      backgroundColor: "#4113A0",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {texts.en.profile}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/checkIn"
                    onClick={handleNavLinkClick}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px 25px",
                      backgroundColor: "#4113A0",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {texts.en.checkIn}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/customerService"
                    onClick={handleNavLinkClick}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px 25px",
                      backgroundColor: "#4113A0",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {texts.en.customerService}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/cashoutDetails"
                    onClick={handleNavLinkClick}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px 25px",
                      backgroundColor: "#4113A0",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {texts.en.cashoutDetails}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/eventDetails"
                    onClick={handleNavLinkClick}
                    style={{
                      fontWeight: "500",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px 25px",
                      backgroundColor: "#4113A0",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {texts.en.eventDetails}
                  </NavDropdown.Item>
                </NavDropdown>
              )}



          </Nav>

{/* notification icon */}
         
          {!isMobile && (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <IoIosNotificationsOutline style={{ margin: "10px", fontSize: "35px" }} />
    <span style={{
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px'
    }}>
      3 {/* Replace with the actual notification count */}
    </span>
  </div>)}


{/* logout button */}
          <button
  className="buttonn d-flex align-items-center"
  style={{
    backgroundColor: "#F62EFF",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    padding: "13px 20px",
    borderRadius: "30px",
    marginBottom: "10px",
    width: isMobile ? "100%" : "auto",
    justifyContent: "center",
  }}
>
  {texts.en.LogOut}
          </button>

        </Navbar.Collapse>


      </Container>
    </Navbar>

    
    </div>





   
  );
}
