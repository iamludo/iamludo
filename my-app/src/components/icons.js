import React from 'react';


const icons = [{
    src: require('../img/icon-home.svg'),
    title: 'home',
    description: 'home page icon'
  },
  {
    src: require('../img/icon-about.svg'),
    title: 'about',
    description: 'About page icon'
  },
  {
    src: require('../img/icon-portfolio.svg'),
    title: 'portfolio',
    description: 'Portfolio page icon'
  },
  {
  src: require('../img/icon-home.svg'),
  title: 'skills',
  description: 'Skills page icon'
},
{
  src: require('../img/icon-beehive.svg'),
  title: 'beehive',
  description: 'Beehive page icon',
},
{
  src: require('../img/icon-home.svg'),
  title: 'contact',
  description: 'Contact page icon'
},
{
  src: require('../img/icon-logo.svg'),
  title: 'logo',
  description: 'I am Ludo logo'
},
{
  src: require('../img/icon-burger.svg'),
  title: 'burger',
  description: 'Burger menu icon'
},
{
  src: require('../img/icon-close.svg'),
  title: 'close',
  description: 'Close menu icon'
},
];


const Icons = ({iconName, iconStyle}) => {

  for (let j = 0; j <= icons.length; j++) {
    if (icons[j].title === iconName) {
      return <img style={iconStyle} src = {icons[j].src} alt = {icons[j].description} />;
    }
  }


};

export default Icons
