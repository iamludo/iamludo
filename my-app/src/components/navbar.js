import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import Icon from './icons.js';
import '../styles/navbar.css';

const Navbar = () => {

  return (
      <nav className="uk-navbar-container ">
        <div className="uk-navbar-left">
          <Link to="/" className="logo">< Icon iconName = "logo" /></Link>
        </div>
        <div className="uk-navbar-right">
          <a className="burger-menu">< Icon iconName = "burger" /></a>
          <div id="drop-mobile-style" uk-dropdown="pos: bottom-right; mode: hover">
              <ul className="uk-nav uk-dropdown-nav">
                <li><NavLink exact to="/">Home page</NavLink></li>
                <li><NavLink to="/about">About Ludo</NavLink></li>
                <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/skills">Skillset table</NavLink></li>
                <li><NavLink to="/beehive">Beehive graph</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
