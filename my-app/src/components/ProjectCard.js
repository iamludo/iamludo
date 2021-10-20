import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Icons } from './icons.js';
import '../styles/ProjectCard.css';

const ProjectCard = ({id, name, year, title, client, blurb, category, url}) => {
  return (
    <div className="project uk-card uk-card-default  uk-card-small@m">
      <div className="uk-card-header uk-flex uk-flex-between uk-flex-nowrap">
        <div className="year"><p className="txt-colour-cyan uk-text-middle">{year}</p></div>
        <div className="category">
          <Icons
            listPrefix={"project-"}
            icons={category}
            listKey={id.toString()}
            />
        </div>
      </div>
      <div className="uk-card-body" >
      <Link to={"/portfolio/"+name} className="project-thumb"><img data-src={require('../img/pics/'+name+'_thumb.png')} uk-img="" alt={title}/></Link>
      <h4>{title}</h4>

      </div>
      <div className="uk-card-footer">
        <p className="txt-colour-green uk-hidden@m">{client}</p>
        <p className="description uk-hidden@m">{blurb}</p>
        <Link to={"/portfolio/"+name} className="uk-button button-navy-primary uk-button-small">Learn more</Link>
        <a className="uk-button button-navy-primary uk-button-small" href={url} target="_blank">Live Version</a>
      </div>
    </div>
  )
}
export default ProjectCard;
