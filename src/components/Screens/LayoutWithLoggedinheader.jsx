import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbarr from '../others/Navbarr';
import Navarr2 from "../others/Navbarrr2"

const LayoutWithLoggedinheader = () => (
  <div>
    <Navbarr />
  
    <Outlet />
    <Navarr2/>
  </div>
);

export default LayoutWithLoggedinheader;
