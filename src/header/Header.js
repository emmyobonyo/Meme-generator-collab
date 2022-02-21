import React from 'react';
import './Header.css';
import trollFace from './troll-face.png';

const Header = () => (
  <header className="header">
    <img src={trollFace} className="header--image" alt="logo" />
    <h2 className="header--title">Meme Generator</h2>
    <h4 className="header--project">React Course - Project 3</h4>
  </header>
);

export default Header;
