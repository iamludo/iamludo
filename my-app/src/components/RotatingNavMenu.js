import React from 'react';
import Icons from './icons.js';
import '../styles/RotatingNavMenu.css';

 class RotatingNavMenu extends React.Component {
   state = {
     position: 0,
     page: ["home", "about", "portfolio", "skills", "beehive", "contact"],
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
       <div className={(direction  === -1) ? ("clock-wise") : ("anticlock-wise")}
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
    const button = (this.state.position === 0) ?
    (<p>Tap icon to start</p>) :
    (<p>Go to the {this.state.page[(this.state.position)]} page</p>);

    return (
      <div className="rotating-menu-container">
        <div className="rotating-menu" style = {this.rotateStyle(60 * this.state.position)}>
            <div>{this.createRotatingIcon(4)}<div></div >{this.createRotatingIcon(1)}</div >
            <div>{this.createRotatingIcon(3)}<div></div >{this.createRotatingIcon(0)}</div >
            <div>{this.createRotatingIcon(2)} {this.createRotationButton()} {this.createRotatingIcon(5)}</div >
        </div>
        <div className="go-to-btn">{button}</div>
        {"dir:" + this.state.direction + " pos:" + this.state.position }
      </div>
    )
  }
}

export default RotatingNavMenu
