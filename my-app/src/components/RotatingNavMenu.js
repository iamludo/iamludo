import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Icons } from './icons.js';
import '../styles/RotatingNavMenu.css';

 class RotatingNavMenu extends React.Component {
   state = {
     position: 0,
     page: ["home", "about", "portfolio", "skills", "beehive", "contact"],
     label: ["home", "About Ludo", "My portfolio", "My skillset", "Play beehive", "Get in contact"],
     direction: 1
   }

   createRotatingIcon = (iconNumber) => {
     let icon = {
       rotationCostant: 0,
       linkToPage: "",
       iconName: this.state.page[iconNumber],
     }

     if (iconNumber === 0 || iconNumber === 3) { icon.rotationCostant = 0}
     else if (iconNumber === 1 || iconNumber === 4) { icon.rotationCostant = 60}
     else { icon.rotationCostant = 300}

     if (iconNumber === this.state.position && iconNumber !== 0) {
       icon.iconName += "-active";
       icon.linkToPage = "/"+this.state.page[(this.state.position)];
     } else { icon.linkToPage = "" }

     let rotatingIcon = (
       <div onClick={() => this.handleClick(iconNumber)}>
         <Link to={icon.linkToPage}>
           < Icon iconName = {icon.iconName}
           iconStyle = {this.rotateStyle(icon.rotationCostant - (60 * this.state.position))} />
         </Link>
       </div >
     );
     return rotatingIcon;
   }

   createRotationButton = () => {
     let direction = this.state.direction;
     let rotationButton = (
       <div className={(direction  === 1) ? ("clockwise") : ("anticlockwise")}
       style = {this.rotateStyle(300 - (60 * this.state.position) )}
       onClick={() => this.handleClick( this.state.position + direction )}></div >
     );
     return rotationButton;

   }

   rotateStyle = (value) => {
    let rotate_style = {
      transform: 'rotate(' + value + 'deg)',
      msTransform: 'rotate(' + value + 'deg)',
      WebkitTransform: 'rotate(' + value + 'deg)',
     };
     return rotate_style;
   }

   handleClick = (goToPosition) => {
    this.setState ({position: goToPosition});

    if ( goToPosition === 0 ) {
      this.setState ({direction: 1 });
    }
    if ( goToPosition === 5 ) {
      this.setState ({direction: -1 });
    }
   }


  render() {
    return (
      <div className="rotating-menu-container">
        <div className="rotating-menu uk-animation-fade-10" style = {this.rotateStyle(60 * this.state.position)}>
            <div>{this.createRotatingIcon(4)}<div></div >{this.createRotatingIcon(1)}</div >
            <div>{this.createRotatingIcon(3)}<div></div >{this.createRotatingIcon(0)}</div >
            <div>{this.createRotatingIcon(2)} {this.createRotationButton()} {this.createRotatingIcon(5)}</div >
        </div>
        <div className="go-to-btn">{(this.state.position === 0) ?
        (<p><span uk-icon="triangle-right"></span>Tap icon to start<span uk-icon="triangle-left"></span></p>) :
        (  <Link to={"/"+this.state.page[(this.state.position)]} className="uk-button button-navy-primary uk-button-small uk-animation-scale-up uk-transform-origin-top-center">
        <span uk-icon="triangle-right"></span>{this.state.label[(this.state.position)]}<span uk-icon="triangle-left"></span>
        </Link>)}
        </div>
      </div>)
  }
}

export default RotatingNavMenu
