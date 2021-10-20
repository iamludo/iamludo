import React from 'react';


const icons = [{
  id: 1,
    src: require('../img/icon-home.svg'),
    title: 'home',
    description: 'home'
  },
  {
    id: 2,
    src: require('../img/icon-about.svg'),
    title: 'about',
    description: 'About me'
  },
  {
    id: 3,
    src: require('../img/icon-about-active.svg'),
    title: 'about-active',
    description: '',
  },
  {
    id: 4,
    src: require('../img/icon-portfolio.svg'),
    title: 'portfolio',
    description: 'Portfolio'
  },
  {
    id: 5,
    src: require('../img/icon-portfolio-active.svg'),
    title: 'portfolio-active',
    description: '',
  },
  {
  id: 6,
  src: require('../img/icon-skills.svg'),
  title: 'skills',
  description: 'Skills table'
},
{
id: 7,
src: require('../img/icon-skills-active.svg'),
title: 'skills-active',
  description: '',
},
{
  id: 8,
  src: require('../img/icon-beehive.svg'),
  title: 'beehive',
  description: 'Beehive',
},
{
  id: 9,
  src: require('../img/icon-beehive-active.svg'),
  title: 'beehive-active',
  description: '',
},
{
  id: 10,
  src: require('../img/icon-contact.svg'),
  title: 'contact',
  description: 'Contact me'
},
{
  id: 11,
  src: require('../img/icon-contact-active.svg'),
  title: 'contact-active',
  description: '',
},
{
  id: 12,
  src: require('../img/icon-logo.svg'),
  title: 'logo',
  description: 'IamLudo.com'
},
{
  id: 13,
  src: require('../img/icon-burger.svg'),
  title: 'burger',
  description: ''
},
{
  id: 14,
  src: require('../img/icon-close.svg'),
  title: 'close',
  description: ''
},
{
  id: 15,
  src: require('../img/project_category_all.svg'),
  title: 'project-all',
  description: 'All Progects'
},
{
  id: 16,
  src: require('../img/project_category_design.svg'),
  title: 'project-design',
  description: 'Graphic & Web Design'
},
{
  id: 17,
  src: require('../img/project_category_frontend.svg'),
  title: 'project-frontend',
  description: 'Fron-tend Development'
},
{
  id: 18,
  src: require('../img/project_category_iconography.svg'),
  title: 'project-iconography',
  description: 'Icon & Icons Set Design'
},
{
  id: 19,
  src: require('../img/project_category_illustrations.svg'),
  title: 'project-illustrations',
  description: 'Digital Illustrations'
},
{
  id: 19,
  src: require('../img/project_category_infographic.svg'),
  title: 'project-infographic',
  description: 'Satic or Interactive Infographic'
},
{
  id: 20,
  src: require('../img/project_category_photoediting.svg'),
  title: 'project-photoediting',
  description: 'Photo Editing & Manipulation'
},
{
  id: 21,
  src: require('../img/project_category_uxui.svg'),
  title: 'project-uxui',
  description: 'UI/UX Design & Prototyping'
},
{
  id: 115,
  src: require('../img/icokt_html.svg'),
  title: 'html',
  description: 'HTML'
},
{
id: 116,
src: require('../img/icokt_html5.svg'),
title: 'html5',
description: 'HTML5'
},
{
id: 117,
src: require('../img/icokt_css.svg'),
title: 'css',
description: 'css'
},
{
id: 118,
src: require('../img/icokt_css3.svg'),
title: 'css3',
description: 'css3'
},
{
id: 119,
src: require('../img/icokt_javascript.svg'),
title: 'javascript',
description: 'Javascript .JS'
},
{
id: 120,
src: require('../img/icokt_js6.svg'),
title: 'js6',
description: 'Javascript ECMAScript 6'
},
{
id: 121,
src: require('../img/icokt_react.svg'),
title: 'react',
description: 'React.js'
},
{
id: 122,
src: require('../img/icokt_jquery.svg'),
title: 'jquery',
description: 'JQuery & JQuery UI'
},
{
id: 123,
src: require('../img/icokt_canvas.svg'),
title: 'canvas',
description: 'HTML Canvas'
},
{
id: 124,
src: require('../img/icokt_svg.svg'),
title: 'svg',
description: 'SVG illustrations'
},
{
id: 125,
src: require('../img/icokt_java.svg'),
title: 'java',
description: 'Java'
},
{
id: 126,
src: require('../img/icokt_json.svg'),
title: 'json',
description: 'Json data interaction'
},
{
id: 127,
src: require('../img/icokt_c.svg'),
title: 'c++',
description: 'C++'
},
{
id: 128,
src: require('../img/icokt_php.svg'),
title: 'php',
description: 'PHP'
},
{
id: 129,
src: require('../img/icokt_sql.svg'),
title: 'sql',
description: 'SQL & Databases'
},
{
id: 130,
src: require('../img/icokt_bootstrap.svg'),
title: 'bootstrap',
description: 'Bootstrap'
},
{
id: 131,
src: require('../img/icokt_uikit.svg'),
title: 'uikit',
description: 'UIKit'
},
{
id: 132,
src: require('../img/icokt_wordpress.svg'),
title: 'wordpress',
description: 'wordpress'
},
{
id: 133,
src: require('../img/icokt_magento.svg'),
title: 'magento',
description: 'Magento WP'
},
{
id: 134,
src: require('../img/icokt_mailchimp.svg'),
title: 'mailchimp',
description: 'Mailchimp'
},
{
id: 135,
src: require('../img/icokt_node.svg'),
title: 'node',
description: 'Node.js'
},
{
id: 136,
src: require('../img/icokt_git.svg'),
title: 'git',
description: 'Git'
},
{
id: 137,
src: require('../img/icokt_github.svg'),
title: 'github',
description: 'GitHub'
},
{
id: 138,
src: require('../img/icokt_analytics.svg'),
title: 'analytics',
description: 'Google Analytics'
},
{
id: 139,
src: require('../img/icokt_access.svg'),
title: 'access',
description: 'Microsoft Access'
},
{
id: 140,
src: require('../img/icokt_visualbasic.svg'),
title: 'visualbasic',
description: 'Microsoft Visual Basic'
},
{
id: 141,
src: require('../img/icokt_visualbasic.svg'),
title: 'visualbasic',
description: 'Microsoft Visual Basic'
},
{
id: 142,
src: require('../img/icokt_frontend.svg'),
title: 'frontend',
description: 'Web Front-end Design'
},
{
id: 143,
src: require('../img/icokt_responsive.svg'),
title: 'responsive',
description: 'Responsive Design'
},
{
id: 144,
src: require('../img/icokt_coding.svg'),
title: 'coding',
description: 'Algorithm Architecture'
},
{
id: 145,
src: require('../img/icokt_prototyping.svg'),
title: 'prototyping',
description: 'UI & UX Prototyping'
},
{
id: 146,
src: require('../img/icokt_design.svg'),
title: 'design',
description: 'Graphic & Illustration Design'
},
{
id: 147,
src: require('../img/icokt_banners.svg'),
title: 'banners',
description: 'Web & Social Banners Design'
},
{
id: 148,
src: require('../img/icokt_infographic.svg'),
title: 'infographic',
description: 'Infographics Design'
},
{
id: 149,
src: require('../img/icokt_print.svg'),
title: 'print',
description: 'Print Design'
},
{
id: 150,
src: require('../img/icokt_art.svg'),
title: 'art',
description: 'Drawing & Painting'
},
{
id: 151,
src: require('../img/icokt_palette.svg'),
title: 'palette',
description: 'Colour Palette Creation'
},
{
id: 152,
src: require('../img/icokt_animation.svg'),
title: 'animation',
description: 'Web animations'
},
{
id: 153,
src: require('../img/icokt_photoshop.svg'),
title: 'photoshop',
description: 'Adobe Photoshop'
},
{
id: 154,
src: require('../img/icokt_illustrator.svg'),
title: 'illustrator',
description: 'Adobe Illustrator'
},
{
id: 155,
src: require('../img/icokt_flash.svg'),
title: 'flash',
description: 'Flash & Actionscript'
},
{
id: 156,
src: require('../img/icokt_animate.svg'),
title: 'animate',
description: 'Adobe Animate'
},
{
id: 157,
src: require('../img/icokt_experience.svg'),
title: 'xd',
description: 'Adobe XD'
},
{
id: 158,
src: require('../img/icokt_dreamweaver.svg'),
title: 'dreamweaver',
description: 'Adobe Dreamweaver'
},
{
id: 159,
src: require('../img/icokt_indesign.svg'),
title: 'indesign',
description: 'Adobe InDesign'
},
{
id: 160,
src: require('../img/icokt_aftereffects.svg'),
title: 'aftereffects',
description: 'Adobe After Effects'
},
{
id: 161,
src: require('../img/icokt_photo.svg'),
title: 'photo',
description: 'Photography and Photo editing'
},
{
id: 162,
src: require('../img/icokt_uxui.svg'),
title: 'uxui',
description: 'UX & UI Prototyping'
},
{
id: 163,
src: require('../img/icokt_iconography.svg'),
title: 'iconography',
description: 'Icons set design'
},
{
id: 164,
src: require('../img/icokt_illustrations.svg'),
title: 'illustrations',
description: 'Illustrations design'
},
{
id: 165,
src: require('../img/icokt_photoediting.svg'),
title: 'photoediting',
description: 'Photo manipulation or Banner design'
},
{
id: 166,
src: require('../img/icokt_na.svg'),
title: 'na',
description: 'Not Applicable'
},
{
id: 167,
src: require('../img/social_twitter.svg'),
title: 'twitter',
description: 'Check my Twitter'
},
{
id: 167,
src: require('../img/social_linkedin.svg'),
title: 'linkedin',
description: 'Check my Linkedin'
},
{
id: 168,
src: require('../img/social_facebook.svg'),
title: 'facebook',
description: 'Check my Facebook'
},
{
id: 169,
src: require('../img/social_github.svg'),
title: 'gitHub',
description: 'Check my Github'
},
{
id: 170,
src: require('../img/social_behance.svg'),
title: 'behance',
description: 'Check my Behance'
},
{
id: 171,
src: require('../img/social_stackoverflow.svg'),
title: 'stackoverflow',
description: 'Check my Stackoverflow'
}
];


export const Icon = ({
  iconName, iconStyle, iconClass, iconKey }) => {

  for (let j = 0; j <= icons.length; j++) {
    if (icons[j].title === iconName) {
      return <img className = {iconClass}
                  style = {iconStyle}
                  src = {icons[j].src}
                  alt = {icons[j].description}
                  key = {(icons[j].id + iconKey).toString()}
                  uk-tooltip= {icons[j].description}
              />;
    }
  }
};


export const Icons = ({icons, listKey, listPrefix}) => {
    return icons.map( (icon,j) => < Icon
    iconName={listPrefix + icons[j]}
    iconKey = {listKey + "-list-" + j.toString()}
    key={listKey + "-list-" + j.toString()}/>);
  }



export default Icon;
