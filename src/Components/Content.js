// Content.js
import React from 'react';
import './Content.css'; // Correct the import path
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";



function Content() {
  return (
    <div className="content">
      <div className='cards'>
        <div className="flex-container1">
          {/* card1 */}
          <div className="card1">
            <div className="card-header">
              <h2 className="card-title">Basic</h2>
              <p className="final-price">
                <span className="crossed-price">$89.99/month</span><br></br>
                <div className='actual-price'>$9.99/month</div>
              </p>
              <div className="get-started-container">
              <button className="get-started-button">
  Get started &rarr;
</button>  
</div>            
</div>

            <hr className="divider" />
            <div className="card-content">
              <p className="content-title">What you will get:</p>
              <ul className="features-list">
                <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email Support</li>
              </ul>
            <div className='link'>
            <a href="#" className="explore-features-link" style={{ fontWeight: 600 }}>
              Explore features
            </a>
            <span className="play-button">&#9654;</span>
            </div>
            </div>
          </div>
          {/* card2 */}
          <div className="card1">
            <div className="card-header">
              <h2 className="card-title">Basic</h2>
              <p className="final-price">
                <span className="crossed-price">$89.99/month</span><br></br>
                <div className='actual-price'>$9.99/month</div>
              </p>
              <div className="get-started-container">
              <button className="get-started-button2">
  Get started &rarr;
</button>  
</div>            
</div>

            <hr className="divider" />
            <div className="card-content">
              <p className="content-title">What you will get:</p>
              <ul className="features-list">
                <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email+chat Support</li>
              </ul>
            <div className='link'>
            <a href="#" className="explore-features-link" style={{ fontWeight: 600 }}>
              Explore features
            </a>
            <span className="play-button2">&#9654;</span>
            </div>
            </div>
          </div>
          {/* card3 */}
          <div className="card1">
            <div className="card-header">
              <h2 className="card-title">Basic</h2>
              <p className="final-price">
                <span className="crossed-price">$89.99/month</span><br></br>
                <div className='actual-price'>$9.99/month</div>
              </p>
              <div className="get-started-container">
              <button className="get-started-button3">
  Get started &rarr;
</button>  
</div>            
</div>

            <hr className="divider" />
            <div className="card-content">
              <p className="content-title">What you will get:</p>
              <ul className="features-list">
                <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email Support</li>
              </ul>
            <div className='link'>
            <a href="#" className="explore-features-link" style={{ fontWeight: 600 }}>
              Explore features
            </a>
            <span className="play-button3">&#9654;</span>
            </div>
            </div>
          </div>        </div>
        <div className="flex-container2">
          {/* card4 */}
          {/* <div className="card4">
          <div className="card4-left">
  <button className="info-chip"></button>
  <h2 className="card4-title">Free starter</h2>
  <p className="card4-text">The quickest and easiest way to find Protocols <br></br>with basic functionalities</p>
  <button className="get-started-button4">
    Get started &rarr;
  </button>
</div>
        
<div className="card-content4">
              <p className="content-title4">What you will get:</p>
              <ul className="features-list">
                <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email Support</li>
                <li><FaCheckDouble />Basics of documents,Task flow,<br></br>Voting, Accounting, Banking, Notes, <br></br>Invstor, Director and Team <br></br>Management included</li>
              </ul>
              </div>
          </div> */}

{/* card5 */}
  <div className="card5">
    <div className="card-left">
      <div className="info-chip2">Free forever</div>
      <h2 className="card5-title">Free starter</h2>
      <p className="card5-text">The quickest and easiest way to find Protocols with basic functionalities</p>
      <button className="get-started-button4">    Get started &rarr;
</button>

    </div>

    <div className="card-right">
    <p className="content-title4">What you will get:</p>
    <ul className="features-list">
    <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email Support</li>
                <li><FaCheckDouble />Basics of documents,Taskflow, Voting, Accounting, Banking, Notes, Invstor, Director and Team Management included</li>
</ul>
    </div>

    {/* card6 */}
 

</div>    
<div className="card6">
<div className="card-left">
      <div className="info-chip6">Free forever</div>
      <h2 className="card5-title">Free starter</h2>
      <p className="card5-text">The quickest and easiest way to find Protocols with basic functionalities</p>
      <button className="get-started-button6">    Get started &rarr;
</button>

    </div>

    <div className="card-right">
    <p className="content-title4">What you will get:</p>
    <ul className="features-list">
    <li><FaRegUser />Up to 25 users</li>
                <li><MdOutlineCloudUpload />Up to 25Gb Storage</li>
                <li> <MdOutlineEmail />Email Support</li>
                <li><FaCheckDouble />Basics of documents,Taskflow, Voting, Accounting, Banking, Notes, Invstor, Director and Team Management included</li>
</ul>
    </div>

</div>
    </div>
    <p className='page-info'>*Some unique features are provided as add-ons with individual plans for each features</p>

      </div>
    </div>
  );
}

export default Content;

