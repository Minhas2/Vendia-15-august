// MobileDashboard.js
import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import { Link } from 'react-router-dom';
import './MDashboard.css';
import MobileNavbar1 from '../others/MobileNavbar1';
import Navarr2 from "../others/Navbarrr2"
import './models.css'

const MobileDashboard = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
    };

    return (
        <>
            <MobileNavbar1 />

            <section className='d-flex ' style={sectionStyle}>
                <div className="container">
                    <div className='mt-3 row mb-3'>
                        <div className="col-8">
                            <h5>Dashboard</h5>
                            <p>Welcome Back Ashley Monroe</p>

                            <div className='d-flex align-items center'>
                                <div><img src="./assets/pp.png" alt="" className='w-100 ' /></div>

                                <div className='mt-auto'>
                                    <h1 className='ash-mob'>Ashley Monroe</h1>
                                    <div className='ash-e-mob'>ashleymonroe@gmail.com</div>
                                    <div className='Code-mobile'>Vendia code: GSKG23</div>
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
                                            <div className='total-header1'>Total Balance</div>
                                            <div className='usdt'>USDT</div>
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
                                            <div className='total-header1'>Total Profit</div>
                                            <div className='usdt'>USDT</div>
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

                        <div className="col-12 mb-5">
                            <div className="">
                                <h1 className='member-header mb-4 mt-3 text-center'>Membership</h1>

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

            </section>

            <Navarr2 />
        </>
    );
};

export default MobileDashboard;
