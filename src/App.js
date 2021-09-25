import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';
import Service from './components/Service';
import Team from './components/Team';
import Footer from './components/Footer';




function App() {




  return (
    <Router>
        <Home />
        <Service />
        <Team />
        <Footer />
    </Router>
  );
}

export default App;
