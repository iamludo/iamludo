import React from 'react';
import RotatingNavMenu from './RotatingNavMenu.js';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home uk-container uk-animation-fade">
    <div>

      <h1 className="txt-colour-green">Hi, <span className="txt-colour-blue">I·AM·LUDO</span>.com</h1>
      <p className="txt-colour-cyan">
      <span className="txt-colour-red">&#123; </span>front-end<b> · </b>developer<b> · </b>designer<span className="txt-colour-red"> &#125;</span>
      </p>

      </div>
          <RotatingNavMenu />
        <p className="footer" >www.iamludo.com - {new Date().getFullYear()} &copy;</p>
    </section>

     )
}

export default Home;
