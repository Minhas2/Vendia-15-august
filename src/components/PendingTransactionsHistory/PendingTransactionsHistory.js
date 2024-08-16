import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";

import { Link, useNavigate } from 'react-router-dom';

import './PendingTransactionsHistory.css'
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// } from 'mdb-react-ui-kit';


function PendingTransactionsHistory() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',

    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column'


  };
  const navigate = useNavigate();

  return (
    <section style={sectionStyle}>

      <div className='text-white about-arrow arrow-margin' style={{ textAlign: 'left', fontSize: '30px' }} onClick={() => navigate(-1)}>
        {/* &larr; */}
        <img src="/arrow-left.png" alt="" />
      </div>

      <div className=' container-fluid trans-box p-4 mb-3 mt-4 outfit-uniquifier'>
        <div className="row">
          <div className=" col-12 col-sm-12 col-md-6 ">
            <div className='credithis d-flex justify-content-center align-items-center'>
              <img src="./assets/thl1" alt="" />
              Pending Transactions
            </div>
          </div>

        </div>

      </div>




      <div className=' container-fluid trans1-box p-5 mb-5  outfit-uniquifier'>
        <div className="row">
          <div className="col-12">
            <div className="dash-bot-box">
              {/* <div className="d-flex justify-content-between align-items-center mb-3">
                <div className='transaction-header'>Transactions</div>
                <div className='trans-para underline'>See ALL</div>
              </div> */}

              <div className="d-flex justify-content-between align-items-center">
                <div>Type</div>
                <div className='d-flex align-items-center'>
                  <div className='pe-5'>Amount</div>
                  <div className='ms-5'>Status</div>
                </div>
              </div>



              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className='d-flex align-items-center'>
                  <div><img src="./assets/t2.png" alt="" /></div>
                  <div className='px-2'>CashOut</div>
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
                  <div className='px-2'>CashOut</div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='pe-5'>$100</div>
                  <div className='trans-Cash-box'>Pending</div>

                </div>
              </div>
{/* 
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
              </div> */}

              {/* <div className="trans-botline mt-3"></div> */}





            </div>


          </div>
        </div>

      </div>





    </section>
  );
}

export default PendingTransactionsHistory;
