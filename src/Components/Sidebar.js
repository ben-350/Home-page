// Sidebar.js
import React from 'react';
import '../App.css'; // Update the import path
import './Sidebar.css'; // Update the import path to Sidebar.css
import Profile from './Profile';
import { FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { FaPuzzlePiece } from "react-icons/fa6";
import { BsWechat } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";





function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section"><Profile/></div>

      <div className='button-section'>
       
        <button className='button'><MdDashboard />Dashboard</button>
        <button className='button'><GrAchievement />Perks</button>
        <button className='button'><FaPuzzlePiece />Addons</button>
        <button className='button'><BsWechat />FAQ</button> 
        <button className='button'><BiSupport />Support</button>       
      </div>

      <button className="logout">Logout<div className='logouticon'><FaPowerOff />
</div></button>
    </div>
  );
}

export default Sidebar;
