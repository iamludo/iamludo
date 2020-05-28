import React from 'react';
import TimeLine from './TimeLine.js';
import '../styles/about.css';

const About = () => {
  return (
    <section className="uk-container uk-animation-fade">
      <ul className="uk-breadcrumb uk-flex-center"><li><span>home</span></li><li><span>about</span></li></ul>
      <h1>About me</h1>
      <p> With a decade of experience helping marketing teams from brands like
      Groupon, UPS, and Funding Circle achieve their goals, Ludovico D’Aietti
      <strong className="txt-colour-green"> brings art to the science of programming</strong>.
      An experienced partner to developers and creative teams, Ludo has proven
      experience helping creative agencies adapt to fast changing consumer demand
      and the world of web development.
      </p>

      <TimeLine />

      <p className="footer txt-centered" >www.iamludo.com - {new Date().getFullYear()} &copy;</p>
    </section>
     )
}

export default About;
