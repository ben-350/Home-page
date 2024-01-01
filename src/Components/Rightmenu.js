// RightMenu.js
import React from 'react';
import App from '../App';
import { FaPlus } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";


function RightMenu() {
  return (
    <div className="right-menu">
      <div className="notification-icon"><IoMdNotifications />
</div>
      <button className="plus-button"><FaPlus />
</button>
    </div>
  );
}

export default RightMenu;

