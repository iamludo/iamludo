import React from 'react';
import TimeLine from './TimeLine.js';
import BreadCrumbs from './BreadCrumbs.js';


const About = () => {
  return (
    <section className="uk-container uk-animation-fade">
      <BreadCrumbs PageName="About" />
      <h1>I can tell you a bit about me</h1>
      <p> With a decade of experience helping marketing teams from brands like
      Groupon, UPS, and Funding Circle achieve their goals, Ludovico D’Aietti
      <strong className="txt-colour-green"> brings art to the science of programming</strong>.
      An experienced partner to developers and creative teams, Ludo has proven
      experience helping creative agencies adapt to fast changing consumer demand
      and the world of web development.
      </p>

      <TimeLine />
      </section>
     )
}

export default About;
