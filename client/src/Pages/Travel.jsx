import React from 'react'
import Navbar from '../Components/Navbar'
import currphase from "../assets/currphase.jpg"
import "./travel.css"
function Travel() {
  return (
    <div>
     <Navbar/>
     <div className="currphase">
        <img src={currphase} alt="currentPhase" />
       <div className="currphasetext"><h1>Menstrual Phase</h1></div>
     </div>
     <div className="notifications">
        <h1>Notifications And Remainders!</h1>
        <p>Your Follicular Phase is in 5 days! </p>
        <p>Your Ovulation Phase is in 10 days! </p>
        <p>Your Luteal Phase is in 15 days! </p>
        <h3>To learn more about your phases click on learn more</h3>
        <button>Learn More</button>
     </div>
     <div className="dropdown">
        <h3>Places you can visit with activities according to your phase.</h3>
     </div>
    </div>
  )
}

export default Travel