import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import vendiaicon from "./Images/Vendia icon.png"
import dashicon from "./Images/dashicon.png"
import profileicon from "./Images/profile.png"
import DownArrow from "./Images/down-arrow.png"
import Incentiveicon from "./Images/Incentivesicon.png"
import checkinicon from "./Images/check-In icon.png"
import cashouticon from "./Images/Cashout icon.png"
import legalicon from "./Images/Legal icon.png"
import econtract from "./Images/E-contract icon.png"
import termicon from "./Images/Terms & Conditions icon.png"
import faqicon from "./Images/Faqs icon.png"
import notifcationicon from "./Images/Notif icon.png"
import customericon from "./Images/customer icon.png"
import logouticon from "./Images/logout icon.png"


import { Link, useNavigate } from 'react-router-dom';
import './models.css'

import './Dashboard.css'


function MainDashboard() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 392px)',
    color: 'white',
  };








  return (

    <section className='d-flex' style={sectionStyle}>


      <div className="dash-box">

        <div className='d-flex text-white align-items-center justify-content-center mb-3'>
          <img src={vendiaicon} alt="Vendia Icon" className='w-dash' />
          &#8592;
        </div>

        <div className='d-flex justify-content-between pink-dash mb-5'>
          <div>Dashboard</div>
          <div><img src={dashicon} alt="" /></div>
        </div>

        <div className="d-flex flex-column   nav-menu">
          <p className='side-dash-para'>Navigation Menu</p>


          <Link to="/Personal_Information" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex class-textwhite'>
                <div><img src={profileicon} alt="" className=' w-100' /></div>
                <div className='px-2'>Profile</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>



          <Link to="/Incentive" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={Incentiveicon} alt="" className='  w-100' /></div>
                <div className='px-2'>Incentives</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>


          <Link to="/Check_IN" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={checkinicon} alt="" className='  w-100' /></div>
                <div className='px-2'>Check In</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>


          <Link to="/Cashout_details" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={cashouticon} alt="" className='  w-100' /></div>
                <div className='px-2'>Cashout Details</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>

          <p className='side-dash-para'>Legal & Others</p>


          <Link to="/Legal" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={legalicon} alt="" className='  w-100' /></div>
                <div className='px-2'>Legal & Certificate</div>
              </div>
              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>


          <Link to="/EContract" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={econtract} alt="" className='  w-100' /></div>
                <div className='px-2'>E-Contract</div>
              </div>
              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link >


          <Link to="/TermsAndconditions" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={termicon} alt="" className='  w-100' /></div>
                <div className='px-2'>Terms & Conditions</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>



          <Link to="/FAQ" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3 margin-dash">
              <div className='d-flex'>
                <div><img src={faqicon} alt="" className='  w-100' /></div>
                <div className='px-2'>FAQ's</div>
              </div>

              <div>
                <img src={DownArrow} alt="" />
              </div>
            </div>
          </Link>

          {/* bot dash board starts heres */}

          <Link to="/TermsAndconditions" className='white-links'>
            <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
              <div className='d-flex'>
                <div><img src={termicon} alt="" className='  w-100' /></div>
                <div className='px-3'>Terms & Conditions</div>
              </div>

              <div>
                <img src={notifcationicon} alt="" />
              </div>
            </div>
          </Link>


          <Link to="/" className='white-links'>
            <div className="d-flex  align-items-center pt-3 pb-3 mb-4">
              <div className='d-flex'>
                <div><img src={logouticon} alt="" className='  w-100' /></div>
                <div className='px-3'>Log Out</div>
              </div>

              {/* <div>
              <img src={DownArrow} alt="" />
            </div> */}
            </div>
          </Link>




        </div>

      </div>

      <div className='d-flex flex-column w-100'>






        <div className="dash_nav">
          <div className="container">

            <div className="dash-nav-white p-3 mt-4 mb-4 d-flex justify-content-end align-items-center">
              <div className='Dash-nav-para'>Notification: Your cashout request has been approved and amount has been sent to your account wallet.</div>
              <img src="./assets/speaker.png" alt="" className='ps-2' />

              <Link to={'/Notifaction'}>
                <img src="./assets/bell_icon.png" alt="" className='ps-2' />
              </Link>
            </div>


          </div>
        </div>

        <div className="container">
          <div className="row">




            <div className="col-12 col-lg-8 col-md-8 col-sm-12 col-xl-8">
              <div className='d-flex flex-column mt-4 mb-4'>
                <h1>Dashboard</h1>
                <p>Welcome Back <span className='user-color'> Ashley Monroe </span></p>
              </div>

              <div className="row">

                <div className="col-4 col-lg-6 col-xl-4 col-md-6">
                  <div className="second-box">
                    <div className="d-flex  flex-column">
                      <div className="d-flex align-items-center">
                        <div><img src="./assets/Balance icon.png" alt="" /></div>
                        <div className='px-3 d-flex flex-column'>
                          <div className='total-header'>Total Balance</div>
                          <div className='usdt'>USDT</div>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src="./assets/BalanceVector.png" alt="" className='w-100' />
                        <div className='white-box d-flex justify-content-between align-items-center'>
                          <div className='dollar-profit'>$21,345.28</div>

                          <div className='d-flex'>
                            <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
                            <div>-4%</div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-4 col-lg-6 col-xl-4 col-md-6">
                  <div className="second-box ">
                    <div className="d-flex  flex-column">
                      <div className="d-flex align-items-center">
                        <div><img src="./assets/Profit icon.png" alt="" /></div>
                        <div className='px-3 d-flex flex-column'>
                          <div className='total-header'>Total Profit</div>
                          <div className='usdt'>USDT</div>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src="./assets/ProfitVector.png" alt="" className='w-100' />
                        <div className='white-box d-flex justify-content-between align-items-center'>
                          <div className='dollar-profit'>$21,345.28</div>

                          <div className='d-flex'>
                            <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
                            <div>-4%</div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-4 col-lg-12 col-xl-4 col-md-12 three-res-mt">




                  <div className="third-box d-flex flex-column  justify-content-center">
                    <Link to="/CreditPage" className='white-links'>
                      <div className='d-flex justify-content-center third-info-box mb-4'>
                        Credit
                      </div>
                    </Link>

                    <Link to="/CashOutPage" className='white-links'>
                      <div className='d-flex justify-content-center third-info-box'>
                        Cashout
                      </div>
                    </Link>



                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12 col-md-12 col-sm-12 col-xl-6">
                  <div className="dash-bot-box">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className='transaction-header'>Transactions</div>
                      <div className='trans-para underline'>See ALL</div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>Type</div>
                      <div className='d-flex align-items-center'>
                        <div className='pe-5'>Amount</div>
                        <div className='ms-5'>Status</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
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

                    <div className="d-flex justify-content-between align-items-center mt-3">
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

                    <div className="d-flex justify-content-between align-items-center mt-3">
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
                    <div className="d-flex justify-content-between align-items-center mt-3">
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

                    <div className="d-flex justify-content-between align-items-center mt-3">
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

                    <div className="d-flex justify-content-between align-items-center mt-3">
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

                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
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

                {/* Membships */}

                <div className="col-12 col-md-8 col-sm-12 col-xl-6 three-res-mt" >
                  <div className="dash-bot-box ">
                    <h1 className='member-header mb-4 mt-3'>Membership</h1>

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

            <div className="col-12 col-lg-4 col-md-4 col-sm-12 col-xl-4">
              <div className="profile-box d-flex flex-column">
                <div className="d-flex justify-content-center mt-5">
                  <img src="./assets/pp.png" alt="" className='w-pp' />
                </div>

                <div className="d-flex justify-content-center flex-column align-items-center mb-4">
                  <h1 className='ash-font-res'>Ashley Monroe</h1>
                  <p className='ash-email-res'>ashleymonroe@gmail.com</p>
                  <p className='ash-code-res'>Vendia code: GSKG23</p>
                </div>

                <div className="d-flex justify-content-center">
                  <img src="./assets/goldimgcrop.png" alt="" />
                </div>


                <div className="d-flex justify-content-center align-items-center flex-column mb-5" >
                  <h1 className='gold-header' >Gold</h1>
                  <div className="profile-white-box mb-4">Upgrade</div>
                  <div className='profile-score-box'>
                    <div className="percent-score-box">
                      92%
                    </div>
                  </div>
                  <div className='credit'>Credit Score</div>
                </div>
              </div>

              <div className='getstarted-box p-3 mt-3'>
                <div className='acces-header mb-2'>Access to Workstation</div>
                <div className="start-white-box p-3 d-flex justify-content-between">
                  <div className='get-res'>Get Started</div>
                  <div className='d-flex align-items-center'>
                    <div className='pe-2 bye'>&#62;</div>
                    <div className='pe-2 bye'>&#62;</div>
                    <div className='pe-2'>&#62;</div>
                    <div className='pe-2 '>&#62;</div>
                    <div className='white-arrow-box'>&#62;</div>
                  </div>
                </div>


              </div>






            </div>
          </div>
        </div>
      </div>






      {/* <!-- Modal --> elite*/}
      <div className="modal fade" id="eliteModal" tabIndex={-1} aria-labelledby="eliteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <div className='header d-flex justify-content-center'style={{zIndex:"10"}}>
              <h1 className="title s-meb-header p-3">Elite  Membership</h1>
            </div>
            <div className='modal-body relative neg-mar-image'>
              <img src="./assets/green box.png" alt=""  className='w-100 '/>
              <ul className='pos-ab-content'>
                <li className='s-meb-para'>Can submit up to <span className='black'>55</span> <br />
                products</li>
                <li className='s-meb-para'>Single products: <span className='black'>2%</span> <br />
                commission</li>
                <li className='s-meb-para'>Combined products: <br />
                <span className='black'>4.5%</span> commission</li>
              </ul>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>



      {/* <!-- Modal --> prem*/}
      <div className="modal fade" id="premModal" tabIndex={-1} aria-labelledby="premModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <div className='header d-flex justify-content-center'style={{zIndex:"10"}}>
              <h1 className="title s-meb-header p-3">Premium  Membership</h1>
            </div>
            <div className='modal-body relative neg-mar-image'>
              <img src="./assets/purple box.png" alt=""  className='w-100 '/>
              <ul className='pos-ab-content'>
                <li className='s-meb-para'>Can submit up to <span className='black'>40</span> <br />
                products</li>
                <li className='s-meb-para'>Single products: <span className='black'>1.2%</span> <br />
                commission</li>
                <li className='s-meb-para'>Combined products: <br />
                <span className='black'>1.8%</span> commission</li>
              </ul>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Modal --> delu*/}
      <div className="modal fade" id="deluModal" tabIndex={-1} aria-labelledby="deluModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          <div className='header d-flex justify-content-center'style={{zIndex:"10"}}>
              <h1 className="title s-meb-header p-3">Deluxe  Membership</h1>
            </div>
            <div className='modal-body relative neg-mar-image'>
              <img src="./assets/blue box.png" alt=""  className='w-100 '/>
              <ul className='pos-ab-content'>
                <li className='s-meb-para'>Can submit up to <span className='black'>45</span> <br />
                products</li>
                <li className='s-meb-para'>Single products: <span className='black'>1.8%</span> <br />
                commission</li>
                <li className='s-meb-para'>Combined products: <br />
                <span className='black'>2.8%</span> commission</li>
              </ul>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Modal --> star*/}
      <div className="modal fade" id="starModal" tabIndex={-1} aria-labelledby="starModalLabel" aria-hidden="true ">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className='header d-flex justify-content-center'style={{zIndex:"10"}}>
              <h1 className="title s-meb-header p-3">Starter  Membership</h1>
            </div>
            <div className='modal-body relative neg-mar-image'>
              <img src="./assets/orange.png" alt=""  className='w-100 '/>
              <ul className='pos-ab-content'>
                <li className='s-meb-para'>Can submit up to <span className='black'>35</span> <br />
                products</li>
                <li className='s-meb-para'>Single products: <span className='black'>0.7%</span> <br />
                commission</li>
                <li className='s-meb-para'>Combined products: <br />
                <span className='black'>1.2%</span> commission</li>
              </ul>
            </div>

            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>




    </section>






  );
}

export default MainDashboard;
