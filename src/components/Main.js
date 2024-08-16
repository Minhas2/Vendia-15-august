import React from 'react';
import { Link } from 'react-router-dom';
import backgroundimage from "./Images/Backgorund.jpeg";
import './Main.css';

function Main() {
    const sectionStyle = {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const buttonStyle = {
        marginRight: '10px', // Adjust the right margin between buttons
        marginBottom: '10px', // Adjust the bottom margin between rows of buttons
    };

    return (
        <section style={sectionStyle}>
            <h1 style={{ color: 'white' }}>Button used to call components</h1>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Link to="/login" className="btn btn-primary" style={buttonStyle}>Login</Link>
                        <Link to="/forget" className="btn btn-success" style={buttonStyle}>Forget</Link>
                        <br />
                        <Link to="/resetpassword" className="btn btn-primary" style={buttonStyle}>Reset password</Link>
                        <Link to="/signup" className="btn btn-success" style={buttonStyle}>SignUp</Link>
                        <br />
                        <Link to="/reachoutform" className="btn btn-primary" style={buttonStyle}>Reach out anytime</Link>
                        <Link to="/LoggedINWorkstation" className="btn btn-success" style={buttonStyle}>Logged in work station</Link>
                        <br />
                        <Link to="/LoggedInHeader" className="btn btn-primary" style={buttonStyle}>Logged in Header</Link>
                        <Link to="/UserProfile" className="btn btn-success" style={buttonStyle}>User profile</Link>
                        <br />
                        <Link to="/TransactionHistory" className="btn btn-primary" style={buttonStyle}>transaction History</Link>
                        <Link to="/PendingTransactionsHistory" className="btn btn-success" style={buttonStyle}>Pending transaction History</Link>
                        <br />
                        <Link to="/AllTransactions" className="btn btn-primary" style={buttonStyle}>All transaction</Link>
                        <Link to="/CompletedTransactions" className="btn btn-success" style={buttonStyle}>Completed transaction</Link>
                        <br />
                        <Link to="/PendingTranscation" className="btn btn-primary" style={buttonStyle}>Pending transaction</Link>
                        <Link to="/TermsAndconditions" className="btn btn-success" style={buttonStyle}>Terms and conditions</Link>
                        <br />
                        <Link to="/FAQ" className="btn btn-primary" style={buttonStyle}>FAQS</Link>
                        <Link to="/AboutUs" className="btn btn-success" style={buttonStyle}>About Us</Link>
                       
                        <br />
                        <Link to="/CreditPage" className="btn btn-primary" style={buttonStyle}>Credit page</Link>
                        <Link to="/CreditHistory" className="btn btn-success" style={buttonStyle}>Credit history</Link>
                        <br />
                        <Link to="/Cashout" className="btn btn-primary" style={buttonStyle}>Cashout Page</Link>
                        <Link to="/CashoutHistory" className="btn btn-success" style={buttonStyle}>Cashout History</Link>
                        <br />
                        <Link to="/Personal_Information" className="btn btn-primary" style={buttonStyle}>Personal Page Info</Link>
                        <Link to="/Cashout_Pin" className="btn btn-success" style={buttonStyle}>Cashout Pin</Link>
                        <br />
                        <Link to="/Change_Password" className="btn btn-primary" style={buttonStyle}>Change password</Link>
                        <Link to="/Check_IN" className="btn btn-success" style={buttonStyle}>Check in</Link>
                        <br />
                        <Link to="/Customer_Service" className="btn btn-primary" style={buttonStyle}>Customer Service page</Link>
                        <Link to="/Cashout_details" className="btn btn-success" style={buttonStyle}>Cashout Details page</Link>
                        <br />
                        <Link to="/LandingPage" className="btn btn-primary" style={buttonStyle}>LandingPage</Link>
                        <Link to="/EContract" className="btn btn-success" style={buttonStyle}>E-Contracts</Link>
                        <br />
                        <Link to="/Incentive" className="btn btn-primary" style={buttonStyle}>Incentive Page</Link>
                        <Link to="/Notifaction" className="btn btn-success" style={buttonStyle}>Notifaction</Link>
                        <br />
                        <Link to="/Legal" className="btn btn-primary" style={buttonStyle}>Legal</Link>
                        <Link to="/MainDashboard" className="btn btn-primary" style={buttonStyle}>Dashboard</Link>
                        {/* <Link to="/Notifaction" className="btn btn-primary" style={buttonStyle}>Notifaction</Link> */}
                        {/* <Link to="/Cashout_details" className="btn btn-success" style={buttonStyle}>Cashout Details page</Link> */}
                   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
