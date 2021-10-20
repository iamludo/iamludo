import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import NavBar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Portfolio from './components/portfolio.js';
import Project from './components/Project.js';
import Skills from './components/skills.js';
import Beehive from './components/beehive.js';
import Contact from './components/contact.js';
import Footer from './components/Footer.js';





import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route path='/skills' component={Skills} />
      <Route path='/beehive' component={Beehive} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio/:project_path' component={Project} />
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
