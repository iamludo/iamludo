import React from 'react';
import Icon from './icons.js';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="social">
      <a href="https://www.twitter.com">< Icon iconName = "linkedin" /></a>
      <a href="https://www.twitter.com">< Icon iconName = "gitHub" /></a>
      <a href="https://www.twitter.com">< Icon iconName = "twitter" /></a>
      <a href="https://www.twitter.com">< Icon iconName = "facebook" /></a>
      <a href="https://www.twitter.com">< Icon iconName = "stackoverflow" /></a>
      <a href="https://www.twitter.com">< Icon iconName = "behance" /></a>
      </div>
      <p className="txt-centered" >www.iamludo.com - {new Date().getFullYear()} &copy;</p>
    </footer>
     )
}

export default Footer;
