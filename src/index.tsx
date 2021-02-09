import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header() {
  return (
    <div style={{backgroundColor: "#3f4452", padding: "10px"}}>
      <h1 style ={{color:"white", textAlign: "center"}}>My Favourite Places</h1>
    </div>
  )
}

ReactDOM.render(Header(), document.getElementById('header'));