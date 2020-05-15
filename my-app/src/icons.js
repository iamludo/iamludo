import React from 'react';


const icons = [{
    id: 1,
    src: require('./img/icon-home.svg'),
    title: 'home',
    description: 'Open the home page'
  },
  {
    id: 2,
    src: require('./img/icon-about.svg'),
    title: 'about',
    description: 'Open the about me page'
  },
];


const Icons = ({iconName}) => {
  for (let j = 0; j <= icons.length; j++) {
    if (icons[j].title === iconName) {
      return <img src = {icons[j].src} alt = {icons[j].description} />;
    }
  }

};

export default Icons
