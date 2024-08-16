import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import vendiaIcon from "./Images/Vendia icon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

function Header() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1020); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <Navbar bg="light" expand="lg">
        <div style={{ display: 'flex', width: '100%', margin: '0 auto' }} className='justify-content-between aligns-items-center container'>
          <Navbar.Brand href="/">
            <img src={vendiaIcon} alt="Vendia Icon" className="mr-3 res-image" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Nav className="mr-auto" style={{ border: '1px solid black', borderRadius: '24px', padding: '3px' }}>
            {
              location.pathname !== '/dashboard' &&
              location.pathname !== '/CashOutPage' &&
              location.pathname !== '/AllTransactionsHistory' ? (
                <>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold", color: '#F62EFF' }}>
                    <Link to={'/'}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/AboutUs'}>
                      About Us
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/reachoutform'}>
                      Contact Us
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold", color: '#F62EFF' }}>
                    <Link to={'/CashOutPage'}>
                      Credit
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/CashOutPage'}>
                      Cashout
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/FAQ'}>
                      Memberships
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/AllTransactionsHistory'}>
                      Transaction History
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/reachoutform'}>
                      Products
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/reachoutform'}>
                      Terms & Conditions
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    title={'More'}
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
                    <NavDropdown.Item as={Link} to="/Personal_Information" style={{ fontWeight: "500", color: "white", fontSize: "14px", padding: "10px 25px", backgroundColor: "#4113A0", transition: "background-color 0.3s" }}>
                      {'Profile'}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Check_IN" style={{ fontWeight: "500", color: "white", fontSize: "14px", padding: "10px 25px", backgroundColor: "#4113A0", transition: "background-color 0.3s" }}>
                      {'Check-In'}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Customer_Service" style={{ fontWeight: "500", color: "white", fontSize: "14px", padding: "10px 25px", backgroundColor: "#4113A0", transition: "background-color 0.3s" }}>
                      {'Customer Service'}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Cashout_details" style={{ fontWeight: "500", color: "white", fontSize: "14px", padding: "10px 25px", backgroundColor: "#4113A0", transition: "background-color 0.3s" }}>
                      {'Cashout Details'}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/eventDetails" style={{ fontWeight: "500", color: "white", fontSize: "14px", padding: "10px 25px", backgroundColor: "#4113A0", transition: "background-color 0.3s" }}>
                      {'Event Details'}
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )
            }
          </Nav>
          <div style={{  display: 'flex', alignItems: 'center' }}>
            <Link to={'/login'}>
              <button type="button" className="btn btn-white mr-3 Log-btn" style={{ borderRadius: "20px", marginRight: '10px', border: `1px solid var(--Color-Light-950, #242528)` }}>
                Login
              </button>
            </Link>
            <Link to={'/signup'}>
              <button type="button" className="btn btn-dark mr-3 sign-btn" style={{ borderRadius: "20px", backgroundColor: `#F62EFF` }}>
                Register
              </button>
            </Link>
          </div>
        </div>
      </Navbar>
      
      )}
    </div>
  );
}

export default Header;
