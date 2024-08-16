import { React, useState, useEffect } from "react";
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
  MDBCol,
} from "mdb-react-ui-kit";
// import Container from "react-bootstrap/Container";
import { IoMdArrowRoundBack } from "react-icons/io";

import { MdOutlineArrowBack } from "react-icons/md";

export default function WebProfilePage() {
  // responsivness code from chat gpt

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center",
    
  };

  const buttonStyle = {
    width: "166px",
    height: "52px",
    paddingLeft: "26.72px",
    paddingRight: "26.72px",
    paddingTop: "23.38px",
    paddingBottom: "23.38px",
    background: "#4113A0",
    borderRadius: "111.31px",
    border: "1.11px white solid",
    textAlign: "center",
    color: "white",
    fontSize: "13.36px",
    fontFamily: "Outfit",
    fontWeight: 700,
    lineHeight: "20.04px",
    letterSpacing: "0.33px",
    wordWrap: "break-word",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "8px", // margin added for spacing
    transition: "all 0.3s ease", // smooth transition effect
  };

  const responsiveStyles = `
        @media (max-width: 576px) { // Extra small devices
          .responsive-button {
            width: calc(100% - 16px); // Adjust width for small screens
            padding: 16px; // Adjust padding
          }
        }
      
        @media (max-width: 768px) { // Smaller devices
          .responsive-button {
            width: calc(50% - 16px); // Adjust width for smaller screens
            padding: 16px; // Adjust padding
          }
        }
      `;

  // adding responsiveness by hasan minhas

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
    

    <section style={sectionStyle}>
      <div style={{ marginTop: "70px" }}>
        {isMobile ? (
          <>
            {/* mobile code */}
            <div className="container outfit-uniquifier">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  paddingLeft: 24,
                  paddingRight: 24,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 24,
                  display: "inline-flex",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: 100,
                        height: 61.59,
                        position: "relative",
                      }}
                    >
                      {/* <div style={{ width: "100%", height: "auto", left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: "100%", border: '2.59px #2CE1FA solid' }} /> */}
                      <img
                        style={{
                          width: "90%",
                          height: "auto",
                          // left: -18.39,
                          left:-20.40,
                          top: -16.16,
                          position: "absolute",
                          boxShadow:
                            "rgba(104, 70, 205, 0.5) 1px -4px 30px 30px",
                          borderRadius: "50%",
                        }}
                        src="./assets/pp.png"
                        alt="profile"
                      />
                    </div>
                    <div
                      style={{
                        width: 129,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 2,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "white",
                          fontSize: 22.02,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          wordWrap: "break-word",
                          marginLeft:"-55px"
                        }}
                      >
                        Yeezy Yanel
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "white",
                          fontSize: 12.59,
                          fontFamily: "Outfit",
                          fontWeight: "300",
                          wordWrap: "break-word",
                          marginLeft:"-40px"
                        }}
                      >
                        yeezyyanel@gmail.com
                      </div>
                      <div>
                        <span
                          style={{
                            color: "#72FBC2",
                            fontSize: 12,
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            wordWrap: "break-word",
                            marginLeft:"-25px"
                          }}
                        >
                          Vendia code:{" "}
                        </span>
                        <span
                          style={{
                            color: "#72FBC2",
                            fontSize: 12,
                            fontFamily: "Outfit",
                            fontWeight: "700",
                            wordWrap: "break-word",
                          }}
                        >
                          GSKG23
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 79,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 5,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        textAlign: "center",
                        color: "#03C876",
                        fontSize: 14,
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      Elite
                    </div>
                    <div
                      style={{
                        width: 83,
                        height: 22,
                        paddingLeft: 19,
                        paddingRight: 19,
                        paddingTop: 4,
                        paddingBottom: 4,
                        borderRadius: 30,
                        border: "1px white solid",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontSize: 10,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Upgrade
                      </div>
                    </div>
                    <div
                      style={{ width: 82, height: 24.6, position: "relative" }}
                    >
                      <div
                        style={{
                          width: 73.05,
                          height: 24.6,
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "#03C876",
                          borderRadius: 22.36,
                        }}
                      />
                      <div
                        style={{
                          width: 82,
                          height: 24.6,
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "rgba(3.17, 200.37, 117.55, 0)",
                          borderRadius: 22.36,
                          border: "1.49px white solid",
                        }}
                      />
                      <div
                        style={{
                          left: 26.09,
                          top: 5.22,
                          position: "absolute",
                          color: "white",
                          fontSize: 11.93,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        92%
                      </div>
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: 8,
                        fontFamily: "Outfit",
                        fontWeight: "300",
                        wordWrap: "break-word",
                      }}
                    >
                      Credit Score
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: 31,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Welcome back Yeezy!
                  </div>
                  <div style={{ alignSelf: "left" }}>
                    <span
                      style={{
                        color: "#2CE1FA",
                        fontSize: 14,
                        fontFamily: "Outfit",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      Here is a summary of your account this week
                    </span>
                    <span
                      style={{
                        color: "#2CE1FA",
                        fontSize: 14,
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      .
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 24,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 16,
                      paddingBottom: 16,
                      background:
                        "linear-gradient(90deg, #FC7EFF 0%, #4113A0 100%)",
                      borderRadius: 30,
                      border: "3px white solid",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <button
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Credit
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1 1 0",
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 16,
                      paddingBottom: 16,
                      background:
                        "linear-gradient(90deg, #FC7EFF 0%, #4113A0 100%)",
                      borderRadius: 30,
                      border: "3px white solid",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <button
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 16,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          lineHeight: 1,
                          wordWrap: "break-word",
                        }}
                      >
                        Cashout
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12.88,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 157.06,
                      height: 73.38,
                      paddingLeft: 27.45,
                      paddingRight: 27.45,
                      paddingTop: 11.76,
                      paddingBottom: 11.76,
                      background: "black",
                      borderRadius: 16.8,
                      border: "0.56px white solid",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5.6,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        height: 44,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 4,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          textAlign: "center",
                          color: "#00FFD1",
                          fontSize: 13.44,
                          fontFamily: "Outfit",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Total Balance
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 18,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        679 USDT
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 157.06,
                      height: 73.38,
                      paddingLeft: 23.53,
                      paddingRight: 23.53,
                      paddingTop: 11.76,
                      paddingBottom: 11.76,
                      background: "black",
                      borderRadius: 16.8,
                      border: "0.56px white solid",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5.6,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        height: 44,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 4,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          textAlign: "center",
                          color: "#FC7EFF",
                          fontSize: 13.44,
                          fontFamily: "Outfit",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Daily Profit
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 18,
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        300 USDT
                      </div>
                    </div>
                  </div>
                </div>

                {/* adding some stuff */}

                  
                {/* </div> */}


                {/*  adding button by hassan minhas */}
                <div className="d-flex justify-content-around"  style={{marginTop:"20px"}}>
                  <button type="button" className="btn btn-dark btn-sm button-font" style={{ border: '1.11px solid #FFFFFF', borderRadius: '111.31px', background: '#4113A0', }}>

                      Membership
                    </button>
                    <button type="button" className="btn btn-dark btn-sm button-font" style={{ border: '1.11px solid #FFFFFF', borderRadius: '111.31px', background: '#4113A0',  }}>
                      Products
                    </button>
                    <button type="button" className="btn btn-dark btn-sm button-font" style={{ border: '1.11px solid #FFFFFF', borderRadius: '111.31px', background: '#4113A0',  }}>
                      Tranasactions
                    </button>
                  </div>


                {/* adding photos and some ther stuff */}
                <div
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "inline-flex",
                    marginTop:"-20px"
                  }}
                >
                 
                </div>

                <div
                  style={{
                    height: 347.93,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 17.92,
                    display: "flex",
                    width: "100%",
                  }}
                >
                  {/* width 442 commented */}
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      marginBottom: "40px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        left: 0.33,
                        top: 1.09,
                        position: "absolute",
                      }}
                      src="./assets/elitemember.png"
                      alt="Elite Membership"
                    />
                    {/* <div style={{ left: 240.33, top: 29.86, position: 'absolute', color: 'black', fontSize: 23.89, fontFamily: 'Outfit', fontWeight: 700, wordWrap: 'break-word' }}>Elite Membership</div> */}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      marginBottom: "40px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        left: 0.33,
                        top: 1.03,
                        position: "absolute",
                      }}
                      src="./assets/deluxe member.png"
                      alt="Deluxe Membership"
                    />
                    {/* <div style={{ left: 240.33, top: 28.37, position: 'absolute', color: 'black', fontSize: 23.89, fontFamily: 'Outfit', fontWeight: 700, wordWrap: 'break-word' }}>Deluxe Membership</div> */}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      marginBottom: "30px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        left: 0.33,
                        top: 0.07,
                        position: "absolute",
                      }}
                      src="./assets/premium member.png"
                      alt="Premium Membership"
                    />
                    {/* <div style={{ left: 240.33, top: 22.40, position: 'absolute', color: 'black', fontSize: 23.89, fontFamily: 'Outfit', fontWeight: 700, wordWrap: 'break-word' }}>Premium Membership</div> */}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      marginBottom: "40px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        left: 0.33,
                        top: 1.32,
                        position: "absolute",
                      }}
                      src="./assets/starter member.png"
                      alt="Starter Membership"
                    />
                    {/* <div style={{ left: 240.33, top: 32.85, position: 'absolute', color: 'black', fontSize: 23.89, fontFamily: 'Outfit', fontWeight: 700, wordWrap: 'break-word' }}>Starter Membership</div> */}
                  </div>
                </div>
              </div>
            </div>


            
          </>
        ) : (
          <>
            {/*  for laotp view */}

<div className="container outfit-uniquifier">
<div className="row">
              <div className="col-lg-4">
                <div
                  style={{
                    width: 300,
                    background: "#4113A0",
                    borderRadius: "0px 0px 90px 90px",
                    position: "relative",
                  }}
                />

                {/* <div className="d-flex justify-content-center align-items-center flex-col py-5" style={{background: '#4113A0',borderRadius: "0px 0px 107px 104px"}}> */}
                <div
                  className="d-flex justify-content-center align-items-center flex-col py-5"
                  style={{
                    background: "#4113A0",
                    borderRadius: "0px 0px 90px 90px",
                  }}
                >
                  <div>
                    <img
                      style={{
                        // borderRadius: '55px',
                        //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

                        borderRadius: "50%",
                        border: "1px solid #9A46CD",
                        //   boxShadow: '30px 30px 30px 30px rgba(154, 70, 205, 0.5)
                        boxShadow: "rgba(154, 70, 205, 0.5) 1px -4px 30px 30px",
                      }}
                      src="./assets/pp.png"
                    />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <h2
                      style={{
                        color: "white",
                        fontSize: "32px",
                        fontWeight: "700",
                      }}
                    >
                      Yenzy Yenel
                    </h2>
                    <div style={{ color: "white", fontSize: "16px" }}>
                      yenzyyanel@gmail.com
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "16px",
                        color: "#72FBC2",
                      }}
                    >
                      Vendia Code:
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#72FBC2",
                        }}
                      >
                        GSKG23
                      </span>
                    </div>
                  </div>

                  <div style={{ marginTop: "35px", marginLeft: "15px" }}>
                    <img src="./assets/goldimg.png" />
                  </div>

                  <div
                    style={{
                      color: "white",
                      fontSize: "16px",
                      marginTop: "-5px",
                      marginBottom: "2px",
                    }}
                  >
                    {" "}
                    Gold
                  </div>
                  {/* <div style={{color:"white", fontSize:"14px",marginTop:"-5px", border:"2px solid white", borderRadius:"15px"}}> upgrade</div> */}
                  <div
                    style={{
                      width: "30%",
                      height: "100%",
                      borderRadius: 30,
                      border: "3px white solid",
                      color: "white",
                    }}
                  >
                    upgrade
                  </div>

                  <div
                    style={{
                      width: "30%",
                      border: "4px white solid",
                      borderRadius: 30,
                      marginTop: "60px",
                    }}
                  >
                    <div
                      style={{
                        width: "85%",
                        height: "100%",
                        background: "#03C876",
                        borderRadius: 30,
                        marginTop: "0px",
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      92%
                    </div>
                  </div>

                  <div
                    style={{
                      color: "white",
                      fontSize: 16,
                      // fontFamily: 'Outfit',
                      fontWeight: "300",
                      wordWrap: "break-word",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    Cedit Scoor
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div
                  style={{
                    //   width: 631.79,
                    width: 631.79,
                    height: 825.84,
                    padding: 24,
                    background: "rgba(65, 19, 160, 0.30)",
                    borderRadius: 16,
                    border: "1px #6D6D6D solid",
                    backdropFilter: "blur(44px)",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 24,
                    display: "inline-flex",
                    marginTop: "50px",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 11.91,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        fontSize: 48,
                        fontFamily: "Outfit",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Welcome back Yeezy!
                    </div>
                    <div style={{ alignSelf: "left" }}>
                      <span
                        style={{
                          color: "#2CE1FA",
                          fontSize: 18,
                          fontFamily: "Outfit",
                          fontWeight: 400,
                          wordWrap: "break-word",
                          textAlign: "left",
                          alignItems: "left",
                          justifyContent: "left",
                          justifyItems: "left",
                        }}
                      >
                        Here is a summary of your account this week
                      </span>
                      <span
                        style={{
                          color: "#2CE1FA",
                          fontSize: 18,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          wordWrap: "break-word",
                        }}
                      >
                        .
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 24,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background:
                          "linear-gradient(90deg, #FC7EFF 0%, #4113A0 100%)",
                        borderRadius: 30,
                        border: "3px white solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            lineHeight: 2,
                            wordWrap: "break-word",
                          }}
                        >
                          Credit
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1 1 0",
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background:
                          "linear-gradient(90deg, #FC7EFF 0%, #4113A0 100%)",
                        borderRadius: 30,
                        border: "3px white solid",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            lineHeight: 2,
                            wordWrap: "break-word",
                          }}
                        >
                          Cashout
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 23,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 280.39,
                        height: 131,
                        paddingLeft: 49,
                        paddingRight: 49,
                        paddingTop: 21,
                        paddingBottom: 21,
                        background: "black",
                        borderRadius: 30,
                        border: "1px white solid",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 80,
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            textAlign: "center",
                            color: "#00FFD1",
                            fontSize: 24,
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          Total Balance
                        </div>
                        <div
                          style={{
                            alignSelf: "stretch",
                            textAlign: "center",
                            color: "white",
                            fontSize: 40,
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            wordWrap: "break-word",
                          }}
                        >
                          679 USDT
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 280.39,
                        height: 131,
                        paddingLeft: 42,
                        paddingRight: 42,
                        paddingTop: 21,
                        paddingBottom: 21,
                        background: "black",
                        borderRadius: 30,
                        border: "1px white solid",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 80,
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            textAlign: "center",
                            color: "#FC7EFF",
                            fontSize: 24,
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            wordWrap: "break-word",
                          }}
                        >
                          Daily Profits
                        </div>
                        <div
                          style={{
                            alignSelf: "stretch",
                            textAlign: "center",
                            color: "white",
                            fontSize: 40,
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            wordWrap: "break-word",
                          }}
                        >
                          679 USDT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 583,
                      justifyContent: "space-between",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 166,
                        height: 52,
                        paddingLeft: 26.72,
                        paddingRight: 26.72,
                        paddingTop: 23.38,
                        paddingBottom: 23.38,
                        background: "#4113A0",
                        borderRadius: 111.31,
                        border: "1.11px white solid",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8.91,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 13.36,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          lineHeight: 20.04,
                          letterSpacing: 0.33,
                          wordWrap: "break-word",
                        }}
                      >
                        Memberships
                      </div>
                    </div>
                    <div
                      style={{
                        width: 167,
                        height: 52,
                        paddingLeft: 26.72,
                        paddingRight: 26.72,
                        paddingTop: 23.38,
                        paddingBottom: 23.38,
                        background: "#4113A0",
                        borderRadius: 111.31,
                        border: "1.11px white solid",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8.91,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 13.36,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          lineHeight: 20.04,
                          letterSpacing: 0.33,
                          wordWrap: "break-word",
                        }}
                      >
                        Products
                      </div>
                    </div>
                    <div
                      style={{
                        width: 166,
                        height: 52,
                        paddingLeft: 26.72,
                        paddingRight: 26.72,
                        paddingTop: 23.38,
                        paddingBottom: 23.38,
                        background: "#4113A0",
                        borderRadius: 111.31,
                        border: "1.11px white solid",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8.91,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 13.36,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          lineHeight: 20.04,
                          letterSpacing: 0.33,
                          wordWrap: "break-word",
                        }}
                      >
                        Transactions
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: 347.93,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 17.92,
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {/* width 442 commented */}
                    <div
                      style={{
                        width: "100%",
                        height: 79.14,
                        position: "relative",
                      }}
                    >
                      <img
                        style={{
                          width: 584,
                          height: 79,
                          left: 0.33,
                          top: 0.09,
                          position: "absolute",
                        }}
                        src="./assets/green1.png"
                        alt="Elite Membership"
                      />
                      <div
                        style={{
                          left: 240.33,
                          top: 29.86,
                          position: "absolute",
                          color: "black",
                          fontSize: 23.89,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          wordWrap: "break-word",
                        }}
                      >
                        Elite Membership
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 70.18,
                        position: "relative",
                      }}
                    >
                      <img
                        style={{
                          width: 584,
                          height: 70,
                          left: 0.33,
                          top: 0.03,
                          position: "absolute",
                        }}
                        src="./assets/blue1.png"
                        alt="Deluxe Membership"
                      />
                      <div
                        style={{
                          left: 240.33,
                          top: 28.37,
                          position: "absolute",
                          color: "black",
                          fontSize: 23.89,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          wordWrap: "break-word",
                        }}
                      >
                        Deluxe Membership
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 68.69,
                        position: "relative",
                      }}
                    >
                      <img
                        style={{
                          width: 584,
                          height: 69,
                          left: 0.33,
                          top: -0.07,
                          position: "absolute",
                        }}
                        src="./assets/purple1.png"
                        alt="Premium Membership"
                      />
                      <div
                        style={{
                          left: 240.33,
                          top: 22.4,
                          position: "absolute",
                          color: "black",
                          fontSize: 23.89,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          wordWrap: "break-word",
                        }}
                      >
                        Premium Membership
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 76.16,
                        position: "relative",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        style={{
                          width: 575,
                          height: 76,
                          left: 0.33,
                          top: 0.32,
                          position: "absolute",
                        }}
                        src="./assets/yellow1.png"
                        alt="Starter Membership"
                      />
                      <div
                        style={{
                          left: 240.33,
                          top: 32.85,
                          position: "absolute",
                          color: "black",
                          fontSize: 23.89,
                          fontFamily: "Outfit",
                          fontWeight: 700,
                          wordWrap: "break-word",
                        }}
                      >
                        Starter Membership
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </div>
            

          </>
        )}
      </div>
    </section>
  );
}
