import React from 'react';
import ProjectsGrid from './ProjectsGrid.js';
import BreadCrumbs from './BreadCrumbs.js';


const Portfolio = () => {
  return (
    <section className="uk-container uk-animation-fade">
    <BreadCrumbs PageName="Portfolio" />
    <h1>I am Ludo and this is my Portfolio</h1>
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      </p>

      <ProjectsGrid />


    </section>

     )
}

export default Portfolio;
