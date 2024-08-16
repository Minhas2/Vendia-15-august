// LayoutWithoutHeaderFooter.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutWithoutHeaderFooter = () => (
  <div>
    
    <Outlet />
  </div>
);

export default LayoutWithoutHeaderFooter;