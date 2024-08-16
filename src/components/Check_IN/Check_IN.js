import React from 'react';
import backgroundimage from "./Images/Backgorund.jpeg";
import { useNavigate } from 'react-router-dom';
import './Check_IN.css'
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


function Check_IN() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const navigate = useNavigate();

  return (
    <section style={sectionStyle} >
      
      <div className='text-white about-arrow1 arrow-margin' style={{ textAlign: 'left', fontSize: '30px', cursor:'pointer'}} onClick={() => navigate(-1)}>
      <img src='/arrow-left.png' alt='Go back' />
      </div>




      <div className='about-box p-4 mb-5 outfit-uniquifier container-fluid'>

        <h1 className='mb-3'>Check-IN</h1>
        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>01</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>02</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>03</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>04</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>05</div>
        </div></div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>06</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>07</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>08</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>09</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>10</div>
        </div></div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>11</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>12</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>13</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>14</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>15</div>
        </div></div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>16</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>17</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>18</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>19</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>20</div>
        </div></div>
        </div>


        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>21</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>22</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>23</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>24</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>25</div>
        </div></div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>26</div>
          </div>
          <div>
            <div>
              <div className='circle-with-tick-W'></div>
              <div className='text-center'>27</div>
            </div>
          </div>
          <div> <div>
            <div className='circle-with-tick'></div>
            <div className='text-center'>28</div>
          </div></div>
          <div>
          <div>
          <div className='circle-with-tick-W'></div>
          <p className='text-center'>29</p>
        </div>
          </div>
          <div> <div>
          <div className='circle-with-tick'></div>
          <div className='text-center'>30</div>
        </div></div>
        </div>

      </div>



    </section>
  );
}

export default Check_IN;
