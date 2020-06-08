import React from 'react';
import ProjectsGrid from './ProjectsGrid.js';
import '../styles/portfolio.css';

const Portfolio = () => {
  return (
    <section className="uk-container uk-animation-fade">
      <ul className="uk-breadcrumb uk-flex-center"><li><span>home</span></li><li><span>Portfolio</span></li></ul>
      <h1>Portfolio</h1>
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      </p>

      <ProjectsGrid />

      <p className="footer txt-centered" >www.iamludo.com - {new Date().getFullYear()} &copy;</p>
    </section>

     )
}

export default Portfolio;
