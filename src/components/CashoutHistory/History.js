import React from "react";

import './CashoutHistory.css'

const History = () => {
  return (
    <div className="">
      <div className=" container-fluid   mb-5  outfit-uniquifier">
        <div className="max-trans ">
          <div className="row ">
            <div className="col-12 trans1-box mt-auto">
              <div className="dash-bot-box ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>Type</div>
                  <div className="d-flex align-items-center">
                    <div className="pe-5">Amount</div>
                    <div className="ms-5">Status</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./assets/t2.png" alt="" />
                    </div>
                    <div className="px-2">Cashout</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="pe-5">$100</div>
                    <div className="trans-Cash-box">Pending</div>
                  </div>
                </div>
                <div className="trans-botline mt-3"></div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./assets/t2.png" alt="" />
                    </div>
                    <div className="px-2">Cashout</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="pe-5">$100</div>
                    <div className="trans-Rejected-box">Rejected</div>
                  </div>
                </div>
                <div className="trans-botline mt-3"></div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./assets/t2.png" alt="" />
                    </div>
                    <div className="px-2">Cashout</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="pe-5">$100</div>
                    <div className="trans-Complete-box">Completed</div>
                  </div>
                </div>
                <div className="trans-botline mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
