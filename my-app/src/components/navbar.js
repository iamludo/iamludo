import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import Icons from './icons.js';
import '../styles/navbar.css';

const Navbar = () => {

  return (
      <nav className="uk-navbar-container ">
        <div className="uk-navbar-left">
          <Link to="/" className="logo" href="/">< Icons iconName = "logo" /></Link>
        </div>
        <div className="uk-navbar-right">
          <a className="burger-menu" href="">< Icons iconName = "burger" /></a>
          <div id="drop-mobile-style" uk-dropdown="pos: bottom-right; mode: click">
              <ul className="uk-nav uk-dropdown-nav">
                <li><NavLink exact to="/">Home page</NavLink></li>
                <li><NavLink to="/about">About Ludo</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/skills">Skillset</NavLink></li>
                <li><NavLink to="/beehive">Beehive game</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
