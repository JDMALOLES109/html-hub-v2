import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages';
import Content from './components/Content';




function App() {




  return (
    <Router>
        <Home />
        <Content />
    </Router>
  );
}

export default App;
