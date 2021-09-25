import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';
import Service from './components/Service';
import Team from './components/Team';




function App() {




  return (
    <Router>
        <Home />
        <Service />
        <Team />
    </Router>
  );
}

export default App;
