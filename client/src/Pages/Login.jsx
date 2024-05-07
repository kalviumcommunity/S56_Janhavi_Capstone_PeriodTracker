import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import calendar from '../assets/logcalendar.webp';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        name,
        password,
      });
      console.log('Response:', response.data); 
      const { token } = response.data; 
      Cookies.set('token', token, { expires: new Date(Date.now()+2103000) }); 
      alert("Logged in Successfully!"); 
    } catch (error) {
      console.error('Error:', error); 
      alert('Error while logging in. Please try again.'); 
    }
  };

  return (
    <div>
      <div className="nav">
        <img src={Logo} alt="logo" id="logo" />
        <Link to="/">
          <button className="home">Home</button>
        </Link>
      </div>
      <div className="form">
        <img src={calendar} alt="calendar" id="calendar" />
        <div className="login">
          <p>Continue your journey to explore the world boldly with</p>
          <h1>Ms Femmigo</h1>
          <div className="name">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="password">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="logbtn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
