// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import RightMenu from './Components/Rightmenu';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-container">
          <Sidebar />
          <Content /> 
        </div>
        <RightMenu />
      </div>
    </Router>
  );
}

export default App;
