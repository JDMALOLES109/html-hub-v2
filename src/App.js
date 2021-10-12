import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';
import Service from './components/Service';
import Team from './components/Team';
import Footer from './components/Footer';
import Lingkod from './components/Lingkod';
import WebDev from './components/WebDev';
import Prog from './components/Prog';




function App() {




  return (
    <Router>
        <Home />
        <Service />
        <Lingkod />
        <Prog />
        <WebDev />
        <Team />
        <Footer />
    </Router>
  );
}

export default App;
