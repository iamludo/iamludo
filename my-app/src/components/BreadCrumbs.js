import React from 'react';
import { Link } from 'react-router-dom';


const BreadCrumbs = ({PageName, ProjectName}) => {
  return ( (PageName === "Project") ?
     (<ul className="uk-breadcrumb uk-flex-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><span>{ProjectName}</span>
          </li></ul>
      ) : (
          <ul className="uk-breadcrumb uk-flex-center">
          <li><Link to="/">Home</Link></li>
          <li><span>{PageName}</span></li>
          </ul>
      )
    );

}

export default BreadCrumbs;
