import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Team from './components/Team';
import Dropdown from './components/Dropdown';


function App() {

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
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <Content />
      <Team />
      <Footer />
    </>
  );
}

export default App;
