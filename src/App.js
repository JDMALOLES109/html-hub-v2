import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';




function App() {




  return (
    <Router>
      <Sidebar />
    <Navbar />

    </Router>
  );
}

export default App;
