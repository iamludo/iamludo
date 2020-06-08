import React from 'react';
import { Icon, Icons } from './icons.js';
import '../styles/ProjectCard.css';

const ProjectCard = ({id, year, title, client, blurb, category}) => {
  return (
    <div className="project uk-card uk-card-default  uk-card-small@m">
      <div className="uk-card-header uk-flex uk-flex-between uk-flex-nowrap">
        <div className="year"><p className="txt-colour-cyan uk-text-middle">{year}</p></div>
        <div className="category">
          <Icons
            listPrefix={"project-"}
            icons={category}
            listKey={"projects-" + id.toString()}
            />
        </div>
      </div>
      <div className="uk-card-body" >
      <div className="project-thumb"><img data-src={require('../img/thumb_placeholder.png')} uk-img="" alt="Blah"/></div>
      <h4>{title}</h4>

      </div>
      <div className="uk-card-footer">
        <p className="txt-colour-green">{client}</p>
        <p className="description">{blurb}</p>
        <a href="" className="uk-button button-navy-primary uk-button-small">show me more</a>
      </div>
    </div>
  )
}
export default ProjectCard;
