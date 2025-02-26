import React from 'react'
import logo from '../assets/logo.png'
import "./navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <div className="nav">
            <div id="logo"><img src={logo} width={300}alt="logo"/></div>
            <div className="icons">
                <Link to='/'><h1>Home</h1></Link> 
                <Link to='/tracker'><h1>Period Tracker</h1></Link>
                <Link to='/travel'><h1>Travel Planner</h1></Link>
                {/* <Link to='/login'><button>Signup</button></Link> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar