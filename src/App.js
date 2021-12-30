import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Home from './components/pages/index';
import cSharp from './components/pages/cSharp';
import Navbar from './components/Navbar/index'
import Sidebar from './components/Sidebar/index'
import Footer from './components/Footer';
import signIn from './components/pages/signIn';
import register from './components/pages/register';



function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <Router>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/csharp" component={cSharp} />
          <Route path="/register" component={register} />
          <Route path="/signin" component={signIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
