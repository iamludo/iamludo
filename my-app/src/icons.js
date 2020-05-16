import React from 'react';


const icons = [{
    id: 1,
    src: require('./img/icon-home.svg'),
    title: 'home',
    description: 'home page icon'
  },
  {
    id: 2,
    src: require('./img/icon-about.svg'),
    title: 'about',
    description: 'About page icon'
  },
  {
    id: 3,
    src: require('./img/icon-portfolio.svg'),
    title: 'portfolio',
    description: 'Portfolio page icon'
  },
  {
  id: 4,
  src: require('./img/icon-home.svg'),
  title: 'skills',
  description: 'Skills page icon'
},
{
  id: 5,
  src: require('./img/icon-beehive.svg'),
  title: 'beehive',
  description: 'Beehive page icon',
},
{
  id: 6,
  src: require('./img/icon-home.svg'),
  title: 'contact',
  description: 'Contact page icon'
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
