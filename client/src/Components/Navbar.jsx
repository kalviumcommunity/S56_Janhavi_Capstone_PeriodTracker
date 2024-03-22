import React from 'react'
import logo from '../assets/logo.png'
import "./navbar.css";

function Navbar() {
  return (
    <div>
        <div className="nav">
            <div id="logo"><img src={logo} width={300}alt="logo"/></div>
            <div className="icons">
                <h1>Period Tracker</h1>
                <h1>Travel Planner</h1>
                <h1>Home</h1>
                <button>sign-up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar