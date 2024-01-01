import React, { useState } from 'react';
import '../App.css';
import './Sidebar.css';
import Profile from './Profile';
import { FaPowerOff } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GrAchievement } from 'react-icons/gr';
import { FaPuzzlePiece } from 'react-icons/fa6';
import { BsWechat } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

function Sidebar() {
  // Use state to manage the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // You can add logic or actions based on the button click here
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <Profile />
      </div>

      <div className="button-section">
        <button
          className={`button ${activeButton === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <MdDashboard />
          Dashboard
        </button>
        <button
          className={`button ${activeButton === 'perks' ? 'active' : ''}`}
          onClick={() => handleButtonClick('perks')}
        >
          <GrAchievement />
          Perks
        </button>
        <button
          className={`button ${activeButton === 'addons' ? 'active' : ''}`}
          onClick={() => handleButtonClick('addons')}
        >
          <FaPuzzlePiece />
          Addons
        </button>
        <button
          className={`button ${activeButton === 'faq' ? 'active' : ''}`}
          onClick={() => handleButtonClick('faq')}
        >
          <BsWechat />
          FAQ
        </button>
        <button
          className={`button ${activeButton === 'support' ? 'active' : ''}`}
          onClick={() => handleButtonClick('support')}
        >
          <BiSupport />
          Support
        </button>
      </div>

      <button className="logout">
        Logout
        <div className="logouticon">
          <FaPowerOff />
        </div>
      </button>
    </div>
  );
}

export default Sidebar;
