import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import vendiaIcon from "./Images/Vendia icon.png";
import bellicon from "./Images/Message.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from 'react-router-dom';
import MobileNavbar1 from './MobileNavbar1'; // Assuming you have this component

export default function Navbarr() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileNavbar1 />;
  }

  return (
    <Navbar bg="light" expand="lg">
      <div className="container " style={{ display: 'flex', maxWidth: '1317px', width: '100%', margin: '0 auto' }}>
        <Navbar.Brand href="/">
          <img src={vendiaIcon} alt="Vendia Icon" className="  res-image " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="gap_setting">
          <Nav className="mr-auto" style={{ border: '1px solid black', borderRadius: '24px', padding: '6px' }}>
            {
              location.pathname !== '/dashboard' &&
              location.pathname !== '/CashOutPage' &&
              location.pathname !== '/AllTransactionsHistory' ? (
                <>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold", color: '#F62EFF' }}>
                    <Link to={'/CreditPage'}>Credit</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/CashOutPage'}>CashOut</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/MainDashboard'}>Dashboard</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/AllTransactionsHistory'}>Product History</Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold", color: '#F62EFF' }}>
                    <Link to={'/CreditPage'}>Credit</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/CashOutPage'}>CashOut</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/MainDashboard'}>Dashboard</Link>
                  </Nav.Link>
                  <Nav.Link className="mr-3" style={{ fontWeight: "bold" }}>
                    <Link to={'/AllTransactionsHistory'}>Product History</Link>
                  </Nav.Link>
                </>
              )
            }
          </Nav>
          <div className="d-flex align-items-center" style={{ padding: '6px' }}>
            <Link to={'/Notifaction'}>
              <div className="pe-3">
                <img src={bellicon} alt="Notification" />
              </div>
            </Link>
            <Link to={'/'}>
              <button
                type="button"
                className="btn btn-white mr-3"
                style={{
                  background: "#F62EFF",
                  borderRadius: "20px",
                  marginRight: "10px",
                  border: "1px solid var(--Color-Light-950, #242528)",
                  color: "white"
                }}
              >
                Log Out
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
