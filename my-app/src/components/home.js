import React from 'react';
import RotatingNavMenu from './RotatingNavMenu.js';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home uk-container uk-animation-fade">
      <h1>Hi, <span className="txt-colour-red">I am &#123;</span><span className="txt-colour-blue txt-heavy">LUDO</span><span className="txt-colour-red">&#125;</span>.com</h1>
          <RotatingNavMenu />
        <p className="footer" >www.iamludo.com - {new Date().getFullYear()} &copy;</p>
    </section>

     )
}

export default Home;
