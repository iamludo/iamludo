import React from 'react';
import Icons from './icons.js';
import '../styles/RotatingNavMenu.css';

 class RotatingNavMenu extends React.Component {
   state = {
     position: 0
   }

   rotateStyle = (value) => {
    let rotate_style = {
      transform: 'rotate(' + value + 'deg)',
      msTransform: 'rotate(' + value + 'deg)',
      WebkitTransform: 'rotate(' + value + 'deg)',
     };
     return rotate_style;
   }

   handleClick = (e) => {
     this.setState ({position: (this.state.position + 1)});
   }


  render() {
    const rotation_factor = 60 * this.state.position;


    return (
      < div onClick = {this.handleClick} style = {this.rotateStyle(rotation_factor)} className="rotating-menu">
          <div >
            < Icons iconName = "beehive" iconStyle = {this.rotateStyle(60 -rotation_factor)} />
            <div></div >
            < Icons iconName = "about" iconStyle = {this.rotateStyle(60 -rotation_factor)} />
          </div >
          < div >
              < Icons iconName = "skills" iconStyle = {this.rotateStyle(-rotation_factor)} />
              <div></div >
              < Icons iconName = "home" iconStyle = {this.rotateStyle(-rotation_factor)} />
          </div >
          < div >
              < Icons iconName = "portfolio" iconStyle = {this.rotateStyle(300 - rotation_factor)} />
              <div></div >
              < Icons iconName = "contact" iconStyle = {this.rotateStyle(300 -rotation_factor)} />
          </div >
      </div>
    )
  }
}

export default RotatingNavMenu
