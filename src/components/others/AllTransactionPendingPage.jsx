import { React, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./AllTransactionHistoryPage.css"

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
import { useNavigate } from "react-router-dom";

export default function AllTransactionPendingPage() {
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
    navigate("/AllTransactionCompletedPage"); // replace '/desired-page' with your target route
  };

  const handleClick3 = () => {
    navigate("/AllTransactionPendingPage"); // replace '/desired-page' with your target route
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
      <div>
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

        <div className="container outfit-uniquifier ">
          {/* <div style={{width: 38, height: 58, position: 'relative'}} className="mb-5 ">
<div style={{width: 26.33, height: 46.33, left: 10.83, top: 35.83, position: 'absolute', border: '0px white solid', color:"white" }}>
<img src='/arrow-left.png' alt='Go back' />

</div>
</div> */}

          <div className="max-trans ">

          {/* button */}

          {isMobile ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: 48,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 12,
                  display: "inline-flex",
                }}
              >
                <button
                  onClick={handleClick1}
                  style={{
                    width: "33%",
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
                  }}
                >
                  <img
                    style={{ width: 20, height: 20 }}
                    src="../assets/thl1.png"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      lineHeight: 18,
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    All
                  </div>
                </button>

                <div
                  onClick={handleClick2}
                  style={{
                    width: "33%",
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
                  }}
                >
                  <img
                    style={{ width: 20, height: 20 }}
                    src="../assets/thl2.png"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      lineHeight: 18,
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Completed
                  </div>
                </div>

                <div
                  onClick={handleClick3}
                  style={{
                    width: "33%",
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
                  }}
                >
                  <img
                    style={{ width: 20, height: 20 }}
                    src="../assets/thl3.png"
                  />
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Outfit",
                      fontWeight: "700",
                      lineHeight: 18,
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Pending
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
                  background: "#4113A0",
                  borderRadius: 100,
                  border: "1px white solid",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <img
                  style={{ width: 24, height: 24 }}
                  src="../assets/thl1.png"
                />
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
                  All
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
                <img
                  style={{ width: 24, height: 24 }}
                  src="../assets/thl2.png"
                />
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
                  Completed
                </div>
              </div>
              <div
                onClick={handleClick3}
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
                <img
                  style={{ width: 24, height: 24 }}
                  src="../assets/thl3.png"
                />
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
                  Pending
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
                  {/* Card 1 */}
                  <div
                    style={{
                      width: "100%",
                      height: 128,
                      position: "relative",
                      background: "white",
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: 113,
                        width: "95%",
                        left: 15,
                        top: 7,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "inline-flex",
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
                            opacity: 0.5,
                            color: "black",
                            fontSize: 8,
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            wordWrap: "break-word",
                          }}
                        >
                          2024/06/08-11:28 am
                        </div>
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
                              color: "#03C876",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            Merged
                          </div>
                          <div
                            style={{
                              color: "#FA2C2C",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            Pending
                          </div>
                          <div
                            style={{
                              width: 42,
                              height: 15,
                              paddingLeft: 8,
                              paddingRight: 8,
                              paddingTop: 2,
                              paddingBottom: 2,
                              background: "#4113A0",
                              borderRadius: 15,
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 10,
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                color: "white",
                                fontSize: 8,
                                fontFamily: "Outfit",
                                fontWeight: "500",
                                wordWrap: "break-word",
                              }}
                            >
                              Submit
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: 0,
                                left: 0,
                                top: 17,
                                position: "absolute",
                                border: "1px rgba(0, 0, 0, 0.10) solid",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: 297,
                          height: 54,
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <img
                          style={{ width: 54, height: 54 }}
                          src="./assets/7_.png"
                        />
                        <div
                          style={{
                            color: "black",
                            fontSize: 12,
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          HP Elitebook, 16GB RAM, 14’ Screen
                        </div>
                      </div>
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
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Total Amount
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 300.00
                          </div>
                        </div>
                        <div
                          style={{
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Profit
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 10.00
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 0,
                          left: 0,
                          top: 85,
                          position: "absolute",
                          border: "1px rgba(0, 0, 0, 0.10) solid",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div
                    style={{
                      width: "100%",
                      height: 128,
                      position: "relative",
                      background: "white",
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: 113,
                        width: "95%",
                        left: 15,
                        top: 7,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "inline-flex",
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
                            opacity: 0.5,
                            color: "black",
                            fontSize: 8,
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            wordWrap: "break-word",
                          }}
                        >
                          2024/06/08-11:28 am
                        </div>

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
                              color: "#03C876",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            Merged
                          </div>
                          <div
                            style={{
                              color: "#F77EF9",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            Frozen
                          </div>
                          <div
                            style={{
                              width: "100%",
                              height: 0,
                              left: 0,
                              top: 17,
                              position: "absolute",
                              border: "1px rgba(0, 0, 0, 0.10) solid",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: 297,
                          height: 54,
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <img
                          style={{ width: 54, height: 54 }}
                          src="./assets/9_.png"
                        />
                        <div
                          style={{
                            color: "black",
                            fontSize: 12,
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            lineHeight: 1,
                            wordWrap: "break-word",
                            textAlign: "left",
                          }}
                        >
                          Silver Home Fan, Metallic Casing, 5000MAH
                        </div>
                      </div>
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
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Total Amount
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 35.02
                          </div>
                        </div>
                        <div
                          style={{
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Profit
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 3.19
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 0,
                          left: 0,
                          top: 85,
                          position: "absolute",
                          border: "1px rgba(0, 0, 0, 0.10) solid",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div
                    style={{
                      width: "100%",
                      height: 128,
                      position: "relative",
                      background: "white",
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: 113,
                        width: "95%",
                        left: 15,
                        top: 7,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 6,
                        display: "inline-flex",
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
                            opacity: 0.5,
                            color: "black",
                            fontSize: 8,
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            wordWrap: "break-word",
                          }}
                        >
                          2024/06/08-11:28 am
                        </div>
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
                              color: "#03C876",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            Completed
                          </div>
                          <div
                            style={{
                              width: "100%",
                              height: 0,
                              left: 0,
                              top: 17,
                              position: "absolute",
                              border: "1px rgba(0, 0, 0, 0.10) solid",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: 297,
                          height: 54,
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <img
                          style={{ width: 54, height: 54 }}
                          src="./assets/2_.png"
                        />
                        <div
                          style={{
                            color: "black",
                            fontSize: 12,
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            lineHeight: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          Samsung Galaxy A55, 4GB RAM, 6.5’ Screen
                        </div>
                      </div>
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
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Total Amount
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 300.00
                          </div>
                        </div>
                        <div
                          style={{
                            width: 64,
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 3,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "#4113A0",
                              fontSize: 8,
                              fontFamily: "Outfit",
                              fontWeight: "500",
                              wordWrap: "break-word",
                              marginTop: "5px",
                              textAlign: "left",
                            }}
                          >
                            Profit
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: 10,
                              fontFamily: "Outfit",
                              fontWeight: "700",
                              wordWrap: "break-word",
                              marginTop: "-5px",
                              textAlign: "left",
                            }}
                          >
                            USDT 10.00
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 0,
                          left: 0,
                          top: 85,
                          position: "absolute",
                          border: "1px rgba(0, 0, 0, 0.10) solid",
                        }}
                      ></div>
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
                  maxWidth: "100%", // Changed from fixed width to responsive max-width
                  height: "auto", // Changed from fixed height to auto
                  padding: "16px 24px", // Simplified padding
                  background: "white",
                  borderRadius: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      opacity: "0.5",
                      color: "black",
                      fontSize: "11px",
                      fontFamily: "Outfit",
                      fontWeight: "300",
                      wordWrap: "break-word",
                    }}
                  >
                    2024/06/08-11:28 am
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
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
                          color: "#03C876",
                          fontSize: 15,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Merged
                      </div>
                      <div
                        style={{
                          color: "#FA2C2C",
                          fontSize: 15,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Pending
                      </div>
                      <div
                        style={{
                          width: 42,
                          height: 15,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 2,
                          paddingBottom: 2,
                          background: "#4113A0",
                          borderRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            fontSize: 10,
                            fontFamily: "Outfit",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Submit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "100px", // Changed from fixed width to max-width
                      height: "auto", // Adjust height automatically
                    }}
                    src="./assets/9_.png"
                  />
                  <div
                    style={{
                      color: "black",
                      fontSize: "16.787px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      lineHeight: "1.5",
                    }}
                  >
                    Silver Home Fan, Metallic Casing, 5000MAH
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Total Amount
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      USDT 35.02
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Profit
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      USDT 3.19
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  maxWidth: "100%", // Allow card to be responsive
                  width: "auto", // Allow width to adapt based on content
                  padding: "16px 24px", // Simplified padding
                  background: "white",
                  borderRadius: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "24.88px",
                  // marginBlock:"50px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%", // Ensure the width adapts to its container
                  }}
                >
                  <div
                    style={{
                      opacity: "0.5",
                      color: "black",
                      fontSize: "11px",
                      fontFamily: "Outfit",
                      fontWeight: "300",
                      wordWrap: "break-word",
                    }}
                  >
                    2024/06/08-11:28 am
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        color: "#03C876",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Completed
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                    width: "100%", // Ensure the divider spans the full width
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "100px", // Use max-width for better responsiveness
                      height: "auto", // Maintain aspect ratio
                    }}
                    src="./assets/2_.png"
                    alt="Product"
                  />
                  <div
                    style={{
                      color: "black",
                      fontSize: "16px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      flex: "1", // Allow text to take up remaining space
                      marginLeft: "8px",
                      textAlign: "left",
                      fontSize: "16.787px",
                    }}
                  >
                    Samsung Galaxy A55, 4GB RAM, 6.5’ Screen
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                    width: "100%", // Ensure the divider spans the full width
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Total Amount
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      USDT 300.00
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Profit
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      USDT 10.00
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  maxWidth: "100%", // Make the card responsive
                  width: "auto", // Allow width to adapt based on content
                  padding: "16px 24px", // Simplified padding
                  background: "white",
                  borderRadius: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "28.88px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      opacity: "0.5",
                      color: "black",
                      fontSize: "11px",
                      fontFamily: "Outfit",
                      fontWeight: "300",
                      wordWrap: "break-word",
                    }}
                  >
                    2024/06/08-11:28 am
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
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
                          color: "#03C876",
                          fontSize: 15,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Merged
                      </div>
                      <div
                        style={{
                          color: "#F77EF9",
                          fontSize: 15,
                          fontFamily: "Outfit",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Frozen
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "100px", // Use max-width for better responsiveness
                      height: "auto", // Maintain aspect ratio
                    }}
                    src="./assets/7_.png"
                    alt="Product"
                  />
                  <div
                    style={{
                      // color: 'black',
                      fontSize: "66px",
                      fontFamily: "Outfit",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      fontSize: "16.787px",
                    }}
                  >
                    HP Elitebook, 16GB RAM, 14’ Screen
                  </div>
                </div>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Total Amount
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      USDT 300.00
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4113A0",
                        fontSize: "11px",
                        fontFamily: "Outfit",
                        fontWeight: "500",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      Profit
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      USDT 10.00
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  maxWidth: "100%",
                  width: "auto",
                  padding: "16px 24px",
                  background: "transparent",
                  borderRadius: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "24.88px",
                }}
              ></div>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
