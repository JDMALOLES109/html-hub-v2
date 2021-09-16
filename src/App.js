import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import {Switch, Route} from 'react-router-dom';
import Html from './pages/Html';
import Css from './pages/Css';
import Js from './pages/Js';
import Home from './pages';


function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resize')
      }
    }

    window.addEventListener('resize', hideMenu)

    return ()  => {
      window.removeEventListener('resize', hideMenu)
    }
  })


  return (
    <>
<div className={isEnabled ? 'dark' : ''}>
<Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Html'  component={Html} />
        <Route path='/Css'  component={Css} />
        <Route path='/Js'  component={Js} />
      </Switch>
      <Footer />
      </div>
    </>
  );
}

export default App;
