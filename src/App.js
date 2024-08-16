// App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutWithHeaderFooter from './components/Screens/LayoutWithHeaderFooter';
import LayoutWithoutHeaderFooter from './components/Screens/LayoutWithoutHeaderFooter';
import LayoutWithLoggedinheader from './components/Screens/LayoutWithLoggedinheader'
import Main from './components/Main';
import Login from './components/Login/Login';
import Forget from './components/Forget/Forget';
import Resetpassword from './components/ResetPassword/ResetPassowrd';
import Signup from './components/SignUp/SignUp';
import Reachoutform from './components/Reachoutform/Reachoutform';
import LoggedINWorkstation from './components/LoggedINWorkstation/LoggedINWorkstation';
import UserProfile from './components/UserProfile/UserProfile';

import PendingTransactionsHistory from './components/PendingTransactionsHistory/PendingTransactionsHistory';
import CompletedTransactions from './components/CompletedTransactions/CompletedTransactions';
import PendingTranscation from './components/PendingTranscation/PendingTranscation';
import TermsAndconditions from './components/Terms&conditions/Terms&conditions';
import FAQ from './components/FAQ/FAQ';
import AboutUs from './components/AboutUs/AboutUs';
// import CreditPage from './components/CreditPage/CreditPage';
import CreditHistory from './components/CreditHistory/CreditHistory';
import Cashout from './components/Cashout/Cashout';
import CashoutHistory from './components/CashoutHistory/CashoutHistory';
import Personal_Information from './components/Personal_Information/Personal_Information';

import Change_Password from './components/Change_Password/Change_Password';
import Check_IN from './components/Check_IN/Check_IN';
import Customer_Service from './components/Customer_Service/Customer_Service';
import Cashout_details from './components/Cashout_details/Cashout_details';
import LandingPage from './components/LandingPage/LandingPage';
import EContract from './components/E-Contract/EContract';
import Incentive from './components/Incentive/Incentive';
import Notifaction from './components/Notifaction/Notifaction';
import Legal from './components/Legal/Legal';
import MainDashboard from './components/Dashboard/Dashboard';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import ResetPassowrd from './components/ResetPassword/ResetPassowrd';
import Cashout_Pin from './components/Cashout_Pin/Cashout_Pin';







// other components
import CashOutPage from './components/others/CashOutPage';
import AllTransactions from './components/others/AllTransactionpage';
import AllTransactionsHistory from './components/others/AllTransactionHistoryPage';
import AllTransactionCompletedPage from './components/others/AllTransactionCompletedPage';
import AllTransactionPendingPage from './components/others/AllTransactionPendingPage'
import Home from './components/others/Home';
import WebProfilePage from './components/others/WebProfilePage';
import CompletedTransactionHistoryPage from './components/others/CompletedTransactionHistoryPage';
import CreditPage from './components/others/CreditPage';
import WorkStationPage from './components/others/WorkStationPage';

import History from './components/CashoutHistory/History';

// import CompletedTransactions from './components/others/CompletedTransactionsPage';
// import PendingTransactionsHistory from './components/others/PendingTransactionsPage';




function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with header and footer */}
        <Route path="/" element={<LayoutWithHeaderFooter />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<WebProfilePage />} />


          <Route path="home" element={<Home />} />

          <Route path="UserProfile" element={<UserProfile />} />

          <Route path="PendingTransactionsHistory" element={<PendingTransactionsHistory />} />

          <Route path="PendingTranscation" element={<PendingTranscation />} />




          <Route path="CreditHistory" element={<CreditHistory />} />
          <Route path="Cashout" element={<Cashout />} />

          {/* checking comps */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="/reachoutform" element={<Reachoutform />} />
        </Route>

        {/* Routes without header and footer */}
        <Route path="/" element={<LayoutWithoutHeaderFooter />}>
          <Route path="/MainDashboard" element={<MainDashboard />} />
        </Route>

        {/* ----------------------------------------Logged in header -----------------------------------------------------------------*/}
        <Route path="/" element={<LayoutWithLoggedinheader />}>
          <Route path="Personal_Information" element={<Personal_Information />} />
          <Route path="Incentive" element={<Incentive />} />
          <Route path="Check_IN" element={<Check_IN />} />
          <Route path="Cashout_details" element={<Cashout_details />} />
          <Route path="Legal" element={<Legal />} />
          <Route path="EContract" element={<EContract />} />
          <Route path="TermsAndconditions" element={<TermsAndconditions />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Customer_Service" element={<Customer_Service />} />
          <Route path="Notifaction" element={<Notifaction />} />
          <Route path="ResetPassowrd" element={<ResetPassowrd />} />
          <Route path="Change_Password" element={<Change_Password />} />
          <Route path="Cashout_Pin" element={<Cashout_Pin />} />


          {/*------------------------------- others ------------------------------------------------------------------------------------*/}

          <Route path="AllTransactions" element={<AllTransactions />} />
          <Route path="AllTransactionsHistory" element={<AllTransactionsHistory />} />
          <Route path="AllTransactionCompletedPage" element={<AllTransactionCompletedPage />} />
          <Route path="AllTransactionPendingPage" element={<AllTransactionPendingPage />} />
          <Route path="CompletedTransactionHistoryPage" element={<CompletedTransactionHistoryPage />} />
          <Route path="/CompletedTransactinHistory" element={<CompletedTransactions />} />
          <Route path="/WebProfilePage" element={<WebProfilePage />} />
          <Route path="/PendingTransatinHistory" element={<PendingTransactionsHistory />} />
          <Route path="/TransactionHistory" element={<TransactionHistory />} />
          <Route path="/CreditPage" element={<CreditPage />} />

     
            <Route path="cashouthistory" element={<CashoutHistory />}>
              <Route index element={<History />} /> 
              <Route path="CashOutPage" element={<CashOutPage />} />
            </Route>
        

          <Route path="/WorkStationPage" element={<WorkStationPage />} />

        </Route>



      </Routes>
    </Router>
  );
}

export default App;


