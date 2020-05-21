import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import Icons from './icons.js';
import '../styles/RotatingNavMenu.css';

 class RotatingNavMenu extends React.Component {
   state = {
     position: 0,
     page: ["home", "about", "portfolio", "skills", "beehive", "contact"],
     label: ["home", "Learn more about me", "See my portfolio", "Check my skillset", "Play beehive", "Get in contact"],
     direction: 1
   }

   createRotatingIcon = (iconNumber) => {
     let rotationCostant;
     if (iconNumber === 0 || iconNumber === 3) { rotationCostant = 0}
     else if (iconNumber === 1 || iconNumber === 4) { rotationCostant = 60}
     else { rotationCostant = 300}
     let rotatingIcon = (
       <div onClick={() => this.handleClick(iconNumber)}>
       < Icons iconName = {this.state.page[iconNumber]}
       iconStyle = {this.rotateStyle(rotationCostant - (60 * this.state.position))} />
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
        <div className="rotating-menu" style = {this.rotateStyle(60 * this.state.position)}>
            <div>{this.createRotatingIcon(4)}<div></div >{this.createRotatingIcon(1)}</div >
            <div>{this.createRotatingIcon(3)}<div></div >{this.createRotatingIcon(0)}</div >
            <div>{this.createRotatingIcon(2)} {this.createRotationButton()} {this.createRotatingIcon(5)}</div >
        </div>
        <div className="go-to-btn">{(this.state.position === 0) ?
        (<p>Tap icon to start</p>) :
        (  <Link to={"/"+this.state.page[(this.state.position)]} className="uk-button uk-button-default uk-button-small" href="#">{this.state.label[(this.state.position)]}</Link>)}</div>
      </div>)
  }
}

export default RotatingNavMenu
