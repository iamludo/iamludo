import React from 'react';
import Icons from './icons.js';
import '../styles/navbar.css';


class Navbar extends React.Component {
    state = {
      toggle: false
    }

    handleClick = (e) => {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }));

      }

    render() {

    return (

      <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <a className="logo" href="">< Icons iconName = "logo" /></a>
        </div>
        <div class="uk-navbar-right">
          <a className="burger-menu" href="">< Icons iconName = "burger" /></a>
          <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">
            <li><a href="/home">Home page</a></li>
            <li><a href="/about">About Ludo</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/skills">Skillset</a></li>
            <li><a href="/beehive">Beehive game</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>

    )
  }
}

export default Navbar;
