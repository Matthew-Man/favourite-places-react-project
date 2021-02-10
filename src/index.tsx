import React from 'react';
import ReactDOM from 'react-dom';
import PlacesCompiled from './places';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Header() {
  return (
    <header style={{backgroundColor: "#3f4452", padding: "10px"}}>
      <h1 style ={{color:"white", textAlign: "center"}}>Matt's Favourite Places</h1>
    </header>
  )
};


function Footer() {
  return (
    <footer className="footer" style={{backgroundColor: "#3f4452", padding: "10px"}}>
      <h4 style ={{color:"white", textAlign: "center"}}>Page created by Matt Man, Academy</h4>
      <div className="icon-container">
        <a href="https://github.com/Matthew-Man"><FontAwesomeIcon icon={faGithub} size="2x" className="footer-icon"/></a>
      </div>
    </footer>
  )
}


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<PlacesCompiled />, document.getElementById('body'))
ReactDOM.render(<Footer />, document.getElementById('footer'));
