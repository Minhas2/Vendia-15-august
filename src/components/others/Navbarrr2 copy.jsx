
// test 2
import React, { useState } from 'react';
import { FaHome, FaRocket, FaUser, FaSyncAlt } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

export default function Navbarrr2() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    switch (icon) {
      case 'home':
        navigate('/WebProfile'); // Adjust the path as needed
        break;
      case 'rocket':
        navigate('/CompletedTransactions'); // Adjust the path as needed
        break;
      case 'user':
        navigate('/WorkStationPage'); // Adjust the path as needed
        break;
      case 'refresh':
        navigate('/AllTransactions'); // Adjust the path as needed
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isMobile && (
        <nav style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#4113A0',
          padding: '10px 0',
          position: 'fixed',
          bottom: '0',
          width: '100%',
          zIndex: '1000',
          height: '100px',
        }}>
          <FaHome
            style={{ fontSize: '34px', color: activeIcon === 'home' ? '#00CADD' : '#fff' }}
            onClick={() => handleIconClick('home')}
          />
          <FaRocket
            style={{ fontSize: '34px', color: activeIcon === 'rocket' ? '#00CADD' : '#fff' }}
            onClick={() => handleIconClick('rocket')}
          />
          <FaUser
            style={{ fontSize: '34px', color: activeIcon === 'user' ? '#00CADD' : '#fff' }}
            onClick={() => handleIconClick('user')}
          />
          <FaSyncAlt
            style={{ fontSize: '34px', color: activeIcon === 'refresh' ? '#00CADD' : '#fff' }}
            onClick={() => handleIconClick('refresh')}
          />
        </nav>
      )}
    </>
  );
}
