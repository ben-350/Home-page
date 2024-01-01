import React from 'react';
import dp from '../assets/dp.jpg'; // Update the import path
import Sidebar from './Sidebar';
import App from '../App';
import { IoIosArrowForward } from "react-icons/io";



const Profile = () => {
  const imgStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  
  const userInfoStyle = {
    textAlign: 'center',
    marginTop: '10px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 'bold', // Add this line to make the text bold
    fontSize: '14px', // Add this line to set the font size

  };

  return (
    <div>
      <div className='profile-content'>
        <div className='dp-image'>
      <img src={dp} alt="Profile Image" style={imgStyle} /></div>
      <div style={userInfoStyle}>
        <p>Ram Mohan</p>
        <div className='mail'>
  <p>rammohan2@gmail.com</p>
  <div className='arrow'><IoIosArrowForward /></div>
</div>

      </div>
    </div>
    </div>
  );
};

export default Profile;
