import React from 'react'
import Logo from '../assets/logo.png'
import calendar from '../assets/logcalendar.webp'
import "./signin.css"
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
        <div className="nav">
          <img src={Logo} alt="logo" id='logo'/>
          <div className="btns">
         <Link to='/'><button className='home'>Home</button></Link> 
         <Link to='/login'><button className='log'>login</button></Link> 
          </div>
        </div>
        <div className="Sign">
          <img src={calendar} alt="calendar" id='calendar' />
          <div className="Signin">
            <p>Continue your journey to explore the world boldly with</p>
            <h1>Ms Femmigo</h1>
            <div className="username">
             <label>Name:</label><input type="text"  />
            </div>
            <div className="pass">
            <label>Password:</label><input/>
            </div>
            <div className="age">
             <label>Age:</label><input type="number"/>
            </div>
            <button className='logbtn'>Sign-Up</button>
            <p>If you are already signed in, please login!</p>
          </div>
        </div>
    </div>
  )
}

export default Signin