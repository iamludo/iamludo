import React from 'react';
import ProjectCard from './ProjectCard.js';
import data from '../data/PortfolioData.json';
import '../styles/ProjectsGrid.css';


const Projects = () => {
  let projects = data.map( (project) =>
  <li data-category={project.category.toString().replace(/,/g, " ")} key={"project-" + project.id.toString()} >
    <ProjectCard
      id={project.id}
      year={project.year}
      title={project.title}
      client={project.client}
      blurb={project.blurb}
      category={project.category}/>
  </li>
  )
  return projects
}


const ProjectsGrid = () => {
  return (
    <div uk-filter="target: .js-filter">
    <div className="projects-menu k-card uk-card-default">
      <ul className="uk-subnav uk-subnav-pill uk-child-width-1-2 uk-child-width-1-4@m">
          <li className="uk-active" uk-filter-control=""><div className="all">All</div></li>
          <li uk-filter-control="[data-category*='frontend']"><div className="frontend">Front-end</div></li>
          <li uk-filter-control="[data-category*='uxui']"><div className="uxui">UI/UX Prototyping</div></li>
          <li uk-filter-control="[data-category*='design']"><div className="design">Graphic Design</div></li>
          <li uk-filter-control="[data-category*='illustrations']"><div className="illustrations">Illustrations</div></li>
          <li uk-filter-control="[data-category*='infographics']"><div className="infographics">Infographics</div></li>
          <li uk-filter-control="[data-category*='iconography']"><div className="iconography">Iconography</div></li>
          <li uk-filter-control="[data-category*='photoediting']"><div className="photoediting">Photo Editing</div></li>
      </ul>
      </div>

    <ul className="uk-grid uk-grid-match uk-grid-small js-filter uk-child-width-1-1 uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid="">
      <Projects />
    </ul>

  </div>

  )
}

export default ProjectsGrid;
