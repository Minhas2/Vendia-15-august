
import './Dashboard.css'
import React, { useState, useEffect } from 'react';
import MobileDashboard from './MobileDashboard';
import DesktopDashboard from './DesktopDashboard'





const MainDashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileDashboard /> : <DesktopDashboard />;
};

export default MainDashboard;



// function MainDashboard() {
//   const sectionStyle = {
//     backgroundImage: `url(${backgroundimage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: 'calc(100vh - 392px)',
//     color: 'white',





//   };

//   return (

//     <section className='d-flex' style={sectionStyle}>


//       <div className="dash-box">

//         <div className='d-flex text-white align-items-center justify-content-center mb-3'>
//           <img src={vendiaicon} alt="Vendia Icon" className='w-dash' />
//           &#8592;
//         </div>

//         <div className='d-flex justify-content-between pink-dash mb-5'>
//           <div>Dashboard</div>
//           <div><img src={dashicon} alt="" /></div>
//         </div>

//         <div className="d-flex flex-column   nav-menu">
//           <p className='side-dash-para'>Navigation Menu</p>


//           <Link to="/Personal_Information" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex class-textwhite'>
//                 <div><img src={profileicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Profile</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>



//           <Link to="/Incentive" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={Incentiveicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Incentives</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>


//           <Link to="/Check_IN" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={checkinicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Check In</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>


//           <Link to="/Cashout_details" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={cashouticon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Cashout Details</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>

//           <p className='side-dash-para'>Legal & Others</p>


//           <Link to="/Legal" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={legalicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Legal & Certificate</div>
//               </div>
//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>


//           <Link to="/EContract" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={econtract} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>E-Contract</div>
//               </div>
//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link >


//           <Link to="/TermsAndconditions" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={termicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>Terms & Conditions</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>



//           <Link to="/FAQ" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3 margin-dash">
//               <div className='d-flex'>
//                 <div><img src={faqicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-2'>FAQ's</div>
//               </div>

//               <div>
//                 <img src={DownArrow} alt="" />
//               </div>
//             </div>
//           </Link>

//           {/* bot dash board starts heres */}

//           <Link to="/TermsAndconditions" className='white-links'>
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
//               <div className='d-flex'>
//                 <div><img src={termicon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-3'>Terms & Conditions</div>
//               </div>

//               <div>
//                 <img src={notifcationicon} alt="" />
//               </div>
//             </div>
//           </Link>


//           <Link to="/" className='white-links'>
//             <div className="d-flex  align-items-center pt-3 pb-3 mb-4">
//               <div className='d-flex'>
//                 <div><img src={logouticon} alt="" className=' h-100 w-100' /></div>
//                 <div className='px-3'>Log Out</div>
//               </div>

//               {/* <div>
//               <img src={DownArrow} alt="" />
//             </div> */}
//             </div>
//           </Link>




//         </div>

//       </div>
//       <div className='d-flex flex-column w-100'>






//         <div className="dash_nav">
//           <div className="container">

//             <div className="dash-nav-white p-3 mt-4 mb-4 d-flex justify-content-end align-items-center">
//               <div className='Dash-nav-para'>Notification: Your cashout request has been approved and amount has been sent to your account wallet.</div>
//               <img src="./assets/speaker.png" alt="" className='ps-2' />

//               <Link to={'/Notifaction'}>
//                 <img src="./assets/bell_icon.png" alt="" className='ps-2' />
//               </Link>
//             </div>


//           </div>
//         </div>

//         <div className="container">
//           <div className="row">




//             <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-8">
//               <div className='d-flex flex-column mt-4 mb-4'>
//                 <h1>Dashboard</h1>
//                 <p>Welcome Back <span className='user-color'> Ashley Monroe </span></p>
//               </div>

//               <div className="row">

//                 <div className="col-4 col-lg-6 col-xl-4 col-md-6">
//                   <div className="second-box">
//                     <div className="d-flex  flex-column">
//                       <div className="d-flex align-items-center">
//                         <div><img src="./assets/Balance icon.png" alt="" /></div>
//                         <div className='px-3 d-flex flex-column'>
//                           <div className='total-header'>Total Balance</div>
//                           <div className='usdt'>USDT</div>
//                         </div>
//                       </div>

//                       <div className='relative'>
//                         <img src="./assets/BalanceVector.png" alt="" className='w-100' />
//                         <div className='white-box d-flex justify-content-between align-items-center'>
//                           <div className='dollar-profit'>$21,345.28</div>

//                           <div className='d-flex'>
//                             <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
//                             <div>-4%</div>
//                           </div>

//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-4 col-lg-6 col-xl-4 col-md-6">
//                   <div className="second-box">
//                     <div className="d-flex  flex-column">
//                       <div className="d-flex align-items-center">
//                         <div><img src="./assets/Balance icon.png" alt="" /></div>
//                         <div className='px-3 d-flex flex-column'>
//                           <div className='total-header'>Total Balance</div>
//                           <div className='usdt'>USDT</div>
//                         </div>
//                       </div>

//                       <div className='relative'>
//                         <img src="./assets/ProfitVector.png" alt="" className='w-100' />
//                         <div className='white-box d-flex justify-content-between align-items-center'>
//                           <div className='dollar-profit'>$21,345.28</div>

//                           <div className='d-flex'>
//                             <div><img src="./assets/greenarrow.png" alt="" className='px-2' /></div>
//                             <div>-4%</div>
//                           </div>

//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-4 col-lg-12 col-xl-4 col-md-12 ">




//                   <div className="third-box d-flex flex-column  justify-content-center">
//                     <Link to="/CashOutPage" className='white-links'>
//                       <div className='d-flex justify-content-center third-info-box mb-4'>
//                         Credit
//                       </div>
//                     </Link>

//                     <Link to="/CashOutPage" className='white-links'>
//                       <div className='d-flex justify-content-center third-info-box'>
//                         Cashout
//                       </div>
//                     </Link>



//                   </div>
//                 </div>
//               </div>

//               <div className="row mt-4">
//                 <div className="col-12 col-md-6 col-sm-12">
//                   <div className="dash-bot-box">
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className='transaction-header'>Transactions</div>
//                       <div className='trans-para underline'>See ALL</div>
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>Type</div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>Amount</div>
//                         <div className='ms-5'>Status</div>
//                       </div>
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t1.png" alt="" /></div>
//                         <div className='px-2'>Credit</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Complete-box'>Completed</div>

//                       </div>
//                     </div>

//                     <div className="trans-botline mt-3"></div>

//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t2.png" alt="" /></div>
//                         <div className='px-2'>Cashout</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Cash-box'>Pending</div>

//                       </div>
//                     </div>
//                     <div className="trans-botline mt-3"></div>

//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t2.png" alt="" /></div>
//                         <div className='px-2'>Cashout</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Complete-box'>Completed</div>

//                       </div>
//                     </div>
//                     <div className="trans-botline mt-3"></div>
//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t3.png" alt="" /></div>
//                         <div className='px-2'>Salary</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Paid-box'>Paid</div>

//                       </div>
//                     </div>
//                     <div className="trans-botline mt-3"></div>

//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t4.png" alt="" /></div>
//                         <div className='px-2'>Bonus</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Paid-box'>Paid</div>

//                       </div>
//                     </div>
//                     <div className="trans-botline mt-3"></div>

//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t1.png" alt="" /></div>
//                         <div className='px-2'>Credit</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Complete-box'>Completed</div>

//                       </div>
//                     </div>
//                     <div className="trans-botline mt-3"></div>

//                     <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
//                       <div className='d-flex align-items-center'>
//                         <div><img src="./assets/t2.png" alt="" /></div>
//                         <div className='px-2'>Cashout</div>
//                       </div>
//                       <div className='d-flex'>
//                         <div className='pe-5'>$100</div>
//                         <div className='trans-Rejected-box'>Rejected</div>

//                       </div>
//                     </div>




//                   </div>
//                 </div>

//                 <div className="col-12 col-md-6 col-sm-12">
//                   <div className="dash-bot-box">
//                     <h1 className='member-header mb-4 mt-3'>Membership</h1>

//                     <div className='mt-5'><img src="../assets/elitemembership1.png" alt="" className='w-100 mb-4' /></div>
//                     <div><img src="../assets/deluxemembership1.png" alt="" className='w-100 mb-4' /></div>
//                     <div><img src="../assets/Preimiummebership1.png" alt="" className='w-100 mb-4' /></div>
//                     <div><img src="../assets/Startermebership1.png" alt="" className='w-100 mb-4' /></div>

//                   </div>
//                 </div>
//               </div>


//             </div>

//             <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-4">
//               <div className="profile-box d-flex flex-column">
//                 <div className="d-flex justify-content-center mt-5">
//                   <img src="./assets/pp.png" alt="" />
//                 </div>

//                 <div className="d-flex justify-content-center flex-column align-items-center mb-4">
//                   <h1>Ashley Monroe</h1>
//                   <p>ashleymonroe@gmail.com</p>
//                   <p>Vendia code: GSKG23</p>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                   <img src="./assets/goldimgcrop.png" alt="" />
//                 </div>


//                 <div className="d-flex justify-content-center align-items-center flex-column mb-5">
//                   <h1 className='gold-header'>Gold</h1>
//                   <div className="profile-white-box mb-4">Upgrade</div>
//                   <div className='profile-score-box'>
//                     <div className="percent-score-box">
//                       92%
//                     </div>
//                   </div>
//                   <div className='credit'>Credit Score</div>
//                 </div>
//               </div>

//               <div className='getstarted-box p-3 mt-3'>
//                 <div className='acces-header mb-2'>Access to Workstation</div>
//                 <div className="start-white-box p-3 d-flex justify-content-between">
//                   <div>Get Started</div>
//                   <div className='d-flex'>
//                     <div className='pe-2'>&#62;</div>
//                     <div className='pe-2'>&#62;</div>
//                     <div className='pe-2'>&#62;</div>
//                     <div className='pe-2 '>&#62;</div>
//                     <div className='white-arrow-box'>&#62;</div>
//                   </div>
//                 </div>


//               </div>






//             </div>
//           </div>
//         </div>
//       </div>

//       <div>Mobile dash board</div>





//     </section>
//   );
// }

// export default MainDashboard;
