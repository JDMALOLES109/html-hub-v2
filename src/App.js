import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';




function App() {




  return (
    <Router>
        <Home />
    </Router>
  );
}

export default App;
