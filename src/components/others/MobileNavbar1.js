import React, { useState } from 'react';
import vendiaIcon from "./Images/Vendia icon.png";
import "./MobileNavbar1.css";
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="mobile-navbar d-flex justify-content-between align-items-center p-4 log-in">
                <div className="topnav">
                    <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                        <img src="./assets/menu-2.png" alt="" className='pe-2' />
                    </a>
                </div>
                <Link to="/Notifaction" className='white-links'>
                <a  className="active">
                    <img src="./assets/mobile-bell.png" alt="" />
                </a>
                </Link>
            </div>

            <div id="myLinks" style={{ display: isOpen ? 'block' : 'none' }} className='menu'>
                <div className="d-flex flex-column p-3">
                    <Link to="/Incentive" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-3 mt-4 ps-2'>Incentive</div>
                    </Link>
                    <Link to="/CashOutPage" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Credit</div>
                    </Link>
                    <Link to="/Cashout_details" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Cashout</div>
                    </Link>
                    <Link to="/TermsAndconditions" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Terms & Conditions</div>
                    </Link>
                    <Link to="/Check_IN" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Check-In</div>
                    </Link>
                    <Link to="/Customer_Service" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Customer Service</div>
                    </Link>
                    <Link to="/Check_IN" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Cashout details</div>
                    </Link>
                    <Link to="/Legal" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Legal & Certificate</div>
                    </Link>
                    <Link to="/EContract" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>E-Contract</div>
                    </Link>
                    <Link to="/FAQ" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>FAQS</div>
                    </Link>

                    <div style={{ padding: '6px' }} className='d-flex flex-column'>
                        <Link to={'/'}>
                            <button type="button" className="btn btn-dark mr-3 w-100 mt-2" style={{ padding: '13px 10px', cursor: 'pointer', borderRadius: '60px', backgroundColor: `#F62EFF` }} onClick={closeMenu}>
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
