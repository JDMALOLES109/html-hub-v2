import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';
import Service from './components/Service';




function App() {




  return (
    <Router>
        <Home />
        <Service />
    </Router>
  );
}

export default App;
