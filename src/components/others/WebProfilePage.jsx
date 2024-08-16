import { React, useState, useEffect } from "react";


import Container from "react-bootstrap/Container";
import { Link, useNavigate } from 'react-router-dom';

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
import { IoMdArrowRoundBack } from "react-icons/io";

import { MdOutlineArrowBack } from "react-icons/md";

export default function WebProfilePage() {

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
    minHeight: 'calc(100vh - 392px)',

  };
  const navigate = useNavigate();

  return (


    <section style={sectionStyle}>
      <div>
        {isMobile ? (
          <>
            {/* mobile code */}
            <div className="container outfit-uniquifier">
              <div className="container ">
                <div className='row mb-3'>
                  <div className="col-8 mt-3">
                    <h5 className="text-white">Dashboard</h5>
                    <p className="text-white" >Welcome Back Ashley Monroe</p>

                    <div className='d-flex align-items center'>
                      <div><img src="./assets/pp.png" alt="" className='w-100 ' /></div>

                      <div className='mt-auto'>
                        <h1 className='ash-mob  text-white'>Ashley Monroe</h1>
                        <div className='ash-e-mob text-white'>ashleymonroe@gmail.com</div>
                        <div className='Code-mobile '>Vendia code: GSKG23</div>
                      </div>
                    </div>
                  </div>

                  <div className='col-4 mt-auto'>
                    <div className='d-flex justify-content-center align-items center flex-column'>
                      <div className='d-flex justify-content-center align-items-center'><img src="./assets/gold mobile.png" alt="" /></div>
                      <div className='d-flex justify-content-center align-items-center'>Gold</div>

                      <Link to="/Customer_Service" className='white-links'><div className='Up-box'>Upgrade</div></Link>
                      <div className='profile-score-box mt-1'>
                        <div className='percent-score-box'>92%</div>
                      </div>
                      <div className='d-flex justify-content-center c-score mt-2'>Credit Score</div>
                    </div>

                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="second-box">
                      <div className="d-flex  flex-column">
                        <div className="d-flex align-items-center">
                          <div><img src="./assets/Balance icon.png" alt="" /></div>
                          <div className='px-3 d-flex flex-column'>
                            <div className='total-header1 text-white'>Total Balance</div>
                            <div className='usdt text-white'>USDT</div>
                          </div>
                        </div>

                        <div className='relative'>
                          <img src="./assets/ProfitVector.png" alt="" className='' />
                          <div className='white-box d-flex justify-content-between align-items-center'>
                            <div className='dollar-profit1'>$21,345.28</div>

                            <div className='d-flex'>
                              <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
                              <div>-4%</div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="second-box mt-3">
                      <div className="d-flex  flex-column">
                        <div className="d-flex align-items-center">
                          <div><img src="./assets/Profit icon.png" alt="" /></div>
                          <div className='px-3 d-flex flex-column'>
                            <div className='total-header1 text-white'>Total Profit</div>
                            <div className='usdt text-white'>USDT</div>
                          </div>
                        </div>

                        <div className='relative'>
                          <img src="./assets/BalanceVector.png" alt="" className='' />
                          <div className='white-box d-flex justify-content-between align-items-center'>
                            <div className='dollar-profit1'>$21,345.28</div>

                            <div className='d-flex'>
                              <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
                              <div>-4%</div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row mt-3">
                      <div className="col-6">
                        <Link to="/CreditPage" className='white-links'>
                          <div className='d-flex justify-content-center third-info-box mb-4 w-100'>
                            Credit
                          </div>
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link to="/CashOutPage" className='white-links'>
                          <div className='d-flex justify-content-center third-info-box'>
                            Cashout
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="dash-bot-box">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className='transaction-header text-white'>Transactions</div>
                        <div className='trans-para underline text-white'>See ALL</div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center text-white">
                        <div>Type</div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>Amount</div>
                          <div className='ms-5'>Status</div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t1.png" alt="" /></div>
                          <div className='px-2'>Credit</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Complete-box'>Completed</div>

                        </div>
                      </div>

                      <div className="trans-botline mt-3"></div>

                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t2.png" alt="" /></div>
                          <div className='px-2'>Cashout</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Cash-box'>Pending</div>

                        </div>
                      </div>
                      <div className="trans-botline mt-3"></div>

                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t2.png" alt="" /></div>
                          <div className='px-2'>Cashout</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Complete-box'>Completed</div>

                        </div>
                      </div>
                      <div className="trans-botline mt-3"></div>
                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t3.png" alt="" /></div>
                          <div className='px-2'>Salary</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Paid-box'>Paid</div>

                        </div>
                      </div>
                      <div className="trans-botline mt-3"></div>

                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t4.png" alt="" /></div>
                          <div className='px-2'>Bonus</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Paid-box'>Paid</div>

                        </div>
                      </div>
                      <div className="trans-botline mt-3"></div>

                      <div className="d-flex justify-content-between align-items-center mt-3 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t1.png" alt="" /></div>
                          <div className='px-2'>Credit</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Complete-box'>Completed</div>

                        </div>
                      </div>
                      <div className="trans-botline mt-3"></div>

                      <div className="d-flex justify-content-between align-items-center mt-3 mb-2 text-white">
                        <div className='d-flex align-items-center'>
                          <div><img src="./assets/t2.png" alt="" /></div>
                          <div className='px-2'>Cashout</div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='pe-5'>$100</div>
                          <div className='trans-Rejected-box'>Rejected</div>

                        </div>
                      </div>




                    </div>
                  </div>

                  <div className="col-12 mb-5">
                    <div className="dash-bot-box">
                      <h1 className='member-header mb-4 mt-3 text-white'>Membership</h1>

                      <div className='mt-5' data-bs-toggle="modal" data-bs-target="#eliteModal">
                        <img src="../assets/elitemembership1.png" alt="" className='w-100 mb-4' />
                      </div>
                      <div data-bs-toggle="modal" data-bs-target="#deluModal">
                        <img src="../assets/deluxemembership1.png" alt="" className='w-100 mb-4' />
                      </div>
                      <div data-bs-toggle="modal" data-bs-target="#premModal">
                        <img src="../assets/Preimiummebership1.png" alt="" className='w-100 mb-4' />
                      </div>
                      <div data-bs-toggle="modal" data-bs-target="#starModal">
                        <img src="../assets/Startermebership1.png" alt="" className='w-100 mb-4' />
                      </div>

                    </div>
                  </div>



                </div>


              </div>


              {/* <!-- Modal --> elite*/}
              <div className="modal fade" id="eliteModal" tabIndex={-1} aria-labelledby="eliteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
                      <h1 className="title s-meb-header p-3">Elite  Membership</h1>
                    </div>
                    <div className='modal-body relative neg-mar-image'>
                      <img src="./assets/green box.png" alt="" className='w-100 ' />
                      <ul className='pos-ab-content'>
                        <li className='s-meb-para'>Can submit up to <span className='black'>55</span> <br />
                          products</li>
                        <li className='s-meb-para'>Single products: <span className='black'>2%</span> <br />
                          commission</li>
                        <li className='s-meb-para'>Combined products: <br />
                          <span className='black'>4.5%</span> commission</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>


              {/* <!-- Modal --> prem*/}
              <div className="modal fade" id="premModal" tabIndex={-1} aria-labelledby="premModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
                      <h1 className="title s-meb-header p-3">Premium  Membership</h1>
                    </div>
                    <div className='modal-body relative neg-mar-image'>
                      <img src="./assets/purple box.png" alt="" className='w-100 ' />
                      <ul className='pos-ab-content'>
                        <li className='s-meb-para'>Can submit up to <span className='black'>40</span> <br />
                          products</li>
                        <li className='s-meb-para'>Single products: <span className='black'>1.2%</span> <br />
                          commission</li>
                        <li className='s-meb-para'>Combined products: <br />
                          <span className='black'>1.8%</span> commission</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* <!-- Modal --> delu*/}
              <div className="modal fade" id="deluModal" tabIndex={-1} aria-labelledby="deluModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
                      <h1 className="title s-meb-header p-3">Deluxe  Membership</h1>
                    </div>
                    <div className='modal-body relative neg-mar-image'>
                      <img src="./assets/blue box.png" alt="" className='w-100 ' />
                      <ul className='pos-ab-content1'>
                        <li className='s-meb-para'>Can submit up to <span className='black'>45</span> <br />
                          products</li>
                        <li className='s-meb-para'>Single products: <span className='black'>1.8%</span> <br />
                          commission</li>
                        <li className='s-meb-para'>Combined products: <br />
                          <span className='black'>2.8%</span> commission</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* <!-- Modal --> star*/}
              <div className="modal fade" id="starModal" tabIndex={-1} aria-labelledby="starModalLabel" aria-hidden="true ">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">

                    <div className='header d-flex justify-content-center' style={{ zIndex: "10" }}>
                      <h1 className="title s-meb-header p-3">Starter  Membership</h1>
                    </div>
                    <div className='modal-body relative neg-mar-image'>
                      <img src="./assets/orange.png" alt="" className='w-100 ' />
                      <ul className='pos-ab-content '>
                        <li className='s-meb-para'>Can submit up to <span className='black'>35</span> <br />
                          products</li>
                        <li className='s-meb-para'>Single products: <span className='black'>0.7%</span> <br />
                          commission</li>
                        <li className='s-meb-para'>Combined products: <br />
                          <span className='black'>1.2%</span> commission</li>
                      </ul>
                    </div>
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
                    className="d-flex justify-content-center align-items-center flex-column py-5"
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
                        textAlign: "center"
                      }}
                      onClick={() => navigate('/Customer_Service')}
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

                          textAlign: "center"
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

                <div className="col-lg-8 text-center">
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
                        onClick={(() => navigate('/CashOutPage'))}

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
                        onClick={(() => navigate('/CashOutPage'))}

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

                          onClick={(() => navigate('/AllTransactions'))}
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
