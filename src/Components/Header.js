// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Update the import path
import { FaChevronDown } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import plogo from '../assets/plogo.png'; // Adjust the path based on your project structure


function Header() {
  return (
    <div className="header">
      <div className="logo-section">
        <img src={plogo} alt="Company Logo" className="logo" />
        </div>
      <div className="company-info">
        <button className="company-name">
          <div className='company-logo'><IoLogoCodepen /></div> XYZ Enterprize Pvt.Ltd
        </button>
        <button className="company-name-arrow"><FaChevronDown /></button>

      </div>
    </div>
  );
}

export default Header;
