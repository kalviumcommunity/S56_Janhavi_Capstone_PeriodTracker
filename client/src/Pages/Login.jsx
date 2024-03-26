import React from 'react'
import Logo from '../assets/logo.png'
import calendar from '../assets/logcalendar.webp'
import "./login.css"
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div>
        <div className="nav">
          <img src={Logo} alt="logo" id='logo'/>
          <Link to='/'><button className='home'>Home</button></Link>
        </div>
        <div className="form">
          <img src={calendar} alt="calendar" id='calendar' />
          <div className="login">
            <p>Continue your journey to explore the world boldly with</p>
            <h1>Ms Femmigo</h1>
            <div className="name">
             <p>Name:</p><input type="text"  />
            </div>
            <div className="password">
             <p>Password:</p><input/>
            </div>
            <button className='logbtn'>Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login