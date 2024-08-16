import { React, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import Container from "react-bootstrap/Container";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
// import { useEffect, useState } from "react";
import "./CashOutPage.css";

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
import { useNavigate } from "react-router-dom";

export default function CreditPage() {
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

  // on handle click
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/AllTransactionsHistory"); // replace '/desired-page' with your target route
  };

  const handleClick2 = () => {
    navigate("/CashoutHistory"); // replace '/desired-page' with your target route
  };

  const handleClick3 = () => {
    navigate("/PendingTransatinHistory"); // replace '/desired-page' with your target route
  };

  const sectionStyle = {
    backgroundImage: isMobile
      ? "url('../assets/vmobile.png')"
      : "url('../assets/vendiabackground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 392px)",
  };

  // adding style for mobile

  const styles = {
    container: {
      width: "100%",
      height: "100%",
      paddingTop: 11,
      paddingBottom: 12,
      paddingLeft: 19,
      paddingRight: 20,
      background: "#4113A0",
      borderRadius: 16,
      // overflow: 'hidden',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      display: "inline-flex",
    },
    innerContainer: {
      alignSelf: "stretch",
      height: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 16,
      display: "inline-flex",
    },
    headerText: {
      alignSelf: "left",
      color: "white",
      fontSize: 14,
      fontFamily: "Outfit",
      fontWeight: 700,
      wordWrap: "break-word",
    },
    cardContainer: {
      alignSelf: "stretch",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 6,
      display: "inline-flex",
    },
    card: {
      width: "33.33%",
      height: 99,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 17,
      paddingBottom: 17,
      borderRadius: 15,
      border: "1px white solid",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 11,
      display: "inline-flex",
    },
    cardText: {
      textAlign: "center",
      color: "white",
      fontSize: 15,
      fontFamily: "Outfit",
      fontWeight: 300,
      wordWrap: "break-word",
    },
    cardAmount: {
      color: "white",
      fontSize: 18,
      fontFamily: "Outfit",
      fontWeight: 700,
      wordWrap: "break-word",
    },
    cardReceive: {
      textAlign: "center",
      color: "white",
      fontSize: 10,
      fontFamily: "Outfit",
      fontWeight: 400,
      wordWrap: "break-word",
    },
    inputContainer: {
      alignSelf: "stretch",
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12,
      background: "white",
      borderRadius: 10,
      border: "1px #747474 solid",
      backdropFilter: "blur(74px)",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      display: "inline-flex",
    },
    inputTextContainer: {
      flex: "1 1 0",
      height: 24,
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      display: "flex",
    },
    inputLabelText: {
      color: "#4113A0",
      fontSize: 16,
      fontFamily: "Outfit",
      fontWeight: 600,
      lineHeight: 24,
      wordWrap: "break-word",
    },
    inputPlaceholderText: {
      flex: "1 1 0",
      color: "rgba(0, 0, 0, 0.20)",
      fontSize: 15,
      fontFamily: "Outfit",
      fontWeight: 400,
      wordWrap: "break-word",
    },
    submitButton: {
      alignSelf: "stretch",
      height: 45,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 21,
      paddingBottom: 21,
      background: "#F62EFF",
      borderRadius: 100,
      border: "1px white solid",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      display: "inline-flex",
    },
    submitButtonText: {
      textAlign: "center",
      color: "white",
      fontSize: 12,
      fontFamily: "Outfit",
      fontWeight: 700,
      lineHeight: 18,
      letterSpacing: 0.3,
      wordWrap: "break-word",
    },
  };
  // ending style for mobile

  return (
    // <div style={{marginTop:"100px"}}

    <section style={sectionStyle}>
      <div style={{}}>

      <div
          className="text-white about-arrow2  container"
          style={{ textAlign: "left", fontSize: "30px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <img
            src="/arrow-left.png"
            alt="Go back"
            className="arrow-margin2 mb-4"
          />
        </div>
        <div className="container outfit-uniquifier">
          {/* <div style={{ width: 38, height: 58, position: "relative" }}>
            <div
              style={{
                width: 26.33,
                height: 46.33,
                left: 10.83,
                top: 35.83,
                position: "absolute",
                border: "0px white solid",
                color: "white",
              }}
            >
              <MdOutlineArrowBack
                style={{ color: "white" }}
                onClick={() => navigate(-1)}
              />
            </div>
          </div> */}

          {/* button */}
          <div className="max-trans ">

          {isMobile ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: 48,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 1,
                  display: "inline-flex",
                }}
              >
                <button
                  onClick={handleClick1}
                  style={{
                    width: "90%",
                    height: 48,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 21,
                    paddingBottom: 21,
                    background: "#F62EFF",
                    borderRadius: 100,
                    border: "1px white solid",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    display: "flex",
                    margin: "2%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Credit Now
                  </div>
                </button>

                <div
                  onClick={handleClick2}
                  style={{
                    width: "90%",
                    height: 48,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 21,
                    paddingBottom: 21,
                    background: "#4113A0",
                    borderRadius: 100,
                    border: "1px white solid",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    display: "flex",
                    margin: "2%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Credit History
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                width: "100%",
                height: 48,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 12,
                display: "inline-flex",
                marginTop: "30px",
              }}
            >
              <div
                onClick={handleClick1}
                style={{
                  flex: "1 1 0",
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 21,
                  paddingBottom: 21,
                  background: "#F62EFF",
                  borderRadius: 100,
                  border: "1px white solid",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: 27,
                    letterSpacing: 0.3,
                    wordWrap: "break-word",
                  }}
                >
                  Credit Now
                </div>
              </div>
              <div
                onClick={handleClick2}
                style={{
                  flex: "1 1 0",
                  height: 48,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 21,
                  paddingBottom: 21,
                  background: "#4113A0",
                  borderRadius: 100,
                  border: "1px white solid",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: 27,
                    letterSpacing: 0.3,
                    wordWrap: "break-word",
                  }}
                >
                  Credit History
                </div>
              </div>
            </div>
          )}

          {/* ending in buttons */}

          {/* adding responsiveness */}

          {isMobile ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: 488,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 24,
                  display: "inline-flex",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 416,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 13,
                    display: "flex",
                  }}
                >
                  {/* Card 1 of 676 USDT */}
                  <div
                    style={{
                      // width: 327,
                      width: "100%",
                      height: 128,
                      position: "relative",
                      backgroundImage: 'url("./assets/cashoutimg2.png")', // Add your background image here
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 16,
                      // overflow: 'hidden',
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center", // Center the content vertically
                      alignItems: "center", // Center the content horizontally
                      color: "white", // Ensure text is visible on the background image
                      textAlign: "center", // Center the text
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "17.8px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        wordWrap: "break-word",
                        marginTop: "10px",
                      }}
                    >
                      Total Balance
                    </div>
                    <div
                      style={{
                        fontSize: "41.49px",
                        fontFamily: "Outfit",
                        fontWeight: 700,
                        wordWrap: "break-word",
                        marginBottom: 8, // Add some margin between heading and text
                      }}
                    >
                      676 USDT
                    </div>
                  </div>
                  {/* adding Credit Amount text */}
                  <div style={styles.container}>
                    <div style={styles.innerContainer}>
                      <div style={styles.headerText}>Cashout Amount</div>
                      <div style={styles.cardContainer}>
                        <div style={{ ...styles.card, background: "#F62EFF" }}>
                          <div style={styles.cardText}>
                            USDT
                            <br />
                            <span style={styles.cardAmount}>100.00</span>
                          </div>
                          <div style={styles.cardReceive}>Receive 100.00</div>
                        </div>
                        <div
                          style={{
                            ...styles.card,
                            background: "rgba(217, 217, 217, 0)",
                          }}
                        >
                          <div style={styles.cardText}>
                            USDT
                            <br />
                            <span style={styles.cardAmount}>200.00</span>
                          </div>
                          <div style={styles.cardReceive}>Receive 200.00</div>
                        </div>
                        <div
                          style={{
                            ...styles.card,
                            background: "rgba(217, 217, 217, 0)",
                          }}
                        >
                          <div style={styles.cardText}>
                            USDT
                            <br />
                            <span style={styles.cardAmount}>500.00</span>
                          </div>
                          <div style={styles.cardReceive}>Receive 500.00</div>
                        </div>
                      </div>
                      <div style={styles.inputContainer}>
                        <div style={styles.inputTextContainer}>
                          <div style={styles.inputLabelText}>
                            Cashout Amount
                          </div>
                          <div style={styles.inputPlaceholderText}>
                            Cashout Amount
                          </div>
                        </div>
                      </div>
                      {/* <div style={styles.inputContainer}>
          <div style={styles.inputTextContainer}>
            <div style={styles.inputLabelText}>Cashout Pin</div>
            <div style={styles.inputPlaceholderText}>Cashout Pin</div>
          </div>
        </div> */}
                      <div style={styles.submitButton}>
                        <div style={styles.submitButtonText}>Submit</div>
                      </div>
                    </div>
                  </div>
                    
                </div>
              </div>
            </>
          ) : (
            <>
              {/* for desktop */}

              <div
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: "16px 24px",
                  backgroundImage: 'url("./assets/cashoutimg1.png")', // Add your background image here
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Center the content vertically
                  alignItems: "center", // Center the content horizontally
                  gap: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "20px",
                  color: "white", // Ensure text is visible on the background image
                  textAlign: "center", // Center the text
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "17px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Total Balance.
                </div>
                <div
                  style={{
                    fontSize: "41.7px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  679 USDT
                </div>
              </div>

              {/*  adding some stuff for redit amount page */}

              <div className="container_desktop">
                <div className="innerContainer_desktop">
                  <div className="headerText_desktop">Credit Amount</div>
                  <div className="cardContainer_desktop">
                    <div
                      className="card_desktop"
                      style={{ background: "#F62EFF" }}
                    >
                      <div className="cardText_desktop">
                        USDT
                        <br />
                        <span className="cardAmount_desktop">100.00</span>
                      </div>
                      <div className="cardReceive_desktop">Receive 100.00</div>
                    </div>
                    <div
                      className="card_desktop"
                      style={{ background: "rgba(217, 217, 217, 0)" }}
                    >
                      <div className="cardText_desktop">
                        USDT
                        <br />
                        <span className="cardAmount_desktop">200.00</span>
                      </div>
                      <div className="cardReceive_desktop">Receive 200.00</div>
                    </div>
                    <div
                      className="card_desktop"
                      style={{ background: "rgba(217, 217, 217, 0)" }}
                    >
                      <div className="cardText_desktop">
                        USDT
                        <br />
                        <span className="cardAmount_desktop">500.00</span>
                      </div>
                      <div className="cardReceive_desktop">Receive 500.00</div>
                    </div>
                  </div>
                  <div className="inputContainer_desktop">
                    <div className="inputTextContainer_desktop">
                      <div className="inputLabelText_desktop">
                        Cashout Amount
                      </div>
                      <div className="inputPlaceholderText_desktop">
                        Cashout Amount
                      </div>
                    </div>
                  </div>
                  <div className="inputContainer_desktop">
                    <div className="inputTextContainer_desktop">
                      <div className="inputLabelText_desktop">Cashout Pin</div>
                      <div className="inputPlaceholderText_desktop">
                        Cashout Pin
                      </div>
                    </div>
                  </div>
                  <div className="submitButton_desktop">
                    <div className="submitButtonText_desktop">Submit</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
