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
      <div className="nav-bar">
        <div className="logo">< Icons iconName = "logo" /></div>
        <div onClick = {this.handleClick}  className={!this.state.toggle ? "burger-menu closed" :  "burger-menu opened"}>< Icons iconName = "burger" />< Icons iconName = "close" /></div>
        <div className="dropdown">
          <ul>
            <li>Home page</li>
            <li>About Ludo</li>
            <li>Portfolio</li>
            <li>Skillset</li>
            <li>Beehive game</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    )
  }
}

export default Navbar;
