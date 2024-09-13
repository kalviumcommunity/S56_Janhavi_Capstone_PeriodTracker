import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import calendar from '../assets/logcalendar.webp';
import "./signin.css";
import { Link } from 'react-router-dom';
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import axios from 'axios'; 

function Signin() {
 
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [isLogin, setisLogin] = useState(false)
  const clientId = `485718509994-3ag531k8mpbnroo8f3qvsileehkr1gv5.apps.googleusercontent.com`
  
  const formData = {
    name: username,
    email: email,
    password: password,
  }
  
  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://s56-janhavi-capstone-periodtracker.onrender.com/signup', formData);
      console.log('Response:', response.data);
      alert("Congrulations, You have signed up successfully!🎉");
    } catch (error) {
      console.error('Error:', error);
      alert('Error while signing up. Please try again.');
    }
  };

  const onSuccess = (res) => {
    console.log(`SignUp successful!🎉`)
    alert(`Google SignUp successful!🎉`)
    setisLogin(true);
  }

  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="logo" id='loggoo'/>
        <div className="btns">
          <Link to='/'><button className='homee'>Home</button></Link> 
          <Link to='/login'><button className='log'>Login</button></Link> 
        </div>
      </div>
      <div className="Sign">
        <img src={calendar} alt="calendar" id='calendar' />
        <div className="Signin">
          <p>Continue your journey to explore the world boldly with</p>
          <h1>Ms Femmigo</h1>
          <div className="username">
            <label>Name:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
          </div>
          <div className="email">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="pass">
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button className='logbutton' onClick={handleSignUp}>Sign-Up</button>
          <p className='orr'>If you are already signed in, please login!</p>
          </div>
          <div className="google">
            <GoogleOAuthProvider clientId={clientId}> 
              <GoogleLogin onSuccess={onSuccess}/>
            </GoogleOAuthProvider>
          </div>
        
      </div>
    </div>
  );
}

export default Signin;
