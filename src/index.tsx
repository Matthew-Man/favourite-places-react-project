import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Header() {
  return (
    <header style={{backgroundColor: "#3f4452", padding: "10px"}}>
      <h1 style ={{color:"white", textAlign: "center"}}>My Favourite Places</h1>
    </header>
  )
};


function Footer() {
  return (
    <footer style={{backgroundColor: "#3f4452", padding: "10px"}}>
      <h1 style ={{color:"white", textAlign: "center"}}>Footer Stuff Here</h1>
    </footer>
  )
}


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));