import React, { useState } from 'react';
import vendiaIcon from "./Images/Vendia icon.png";
import "./MobileNavbar.css";
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
            <div className="mobile-navbar d-flex justify-content-between align-items-center container">
                <div className="topnav">
                    <a href="#home" className="active">
                        <img src={vendiaIcon} alt="Vendia Icon" className="mr-3" style={{ width: '50%' }} />
                    </a>
                </div>

                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <img src="./assets/menu1.png" alt="" className='pe-2' />
                </a>
            </div>

            <div className='menu'>
            <div id="myLinks" style={{ display: isOpen ? 'block' : 'none' }} className='menu container'>
                <div className="d-flex flex-column ">
                    <Link to="/" className='white-links mt-3 mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2 mt-4'>Home</div>
                    </Link>
                    <Link to="/AboutUs" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>About</div>
                    </Link>
                    <Link to="/reachoutform" className='white-links mobile-nav-fonts' onClick={closeMenu}>
                        <div className='mb-4 ps-2'>Contact</div>
                    </Link>

                    <div style={{ padding: '6px' }} className='d-flex flex-column'>
                        <Link to='/login' onClick={closeMenu}>
                            <button type="button" className="btn btn-white mr-3 w-100 mb-2" style={{ padding: '13px 10px', cursor: 'pointer', borderRadius: '60px', marginRight: '10px', border: `1px solid white`, color: 'white' }}>
                                Login
                            </button>
                        </Link>
                        <Link to='/signup' onClick={closeMenu}>
                            <button type="button" className="btn btn-dark mr-3 w-100 mt-2 mb-3" style={{ padding: '13px 10px', cursor: 'pointer', borderRadius: '60px', backgroundColor: `#F62EFF` }}>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default MobileNavbar;
