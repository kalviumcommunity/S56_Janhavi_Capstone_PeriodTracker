import React from 'react'
import Navbar from '../Components/Navbar'
import './tracker.css'

function Tracker() {
  return (
    <div>
        <Navbar/>
        <div className="introduction">
            <h1>Period Tracker!</h1>
            <p>Periods typically occur approximately once a month (every 28-30 days). However, it's not always predictable for many women. Anticipating the exact date and duration of your upcoming period can be challenging at times. This is where our period due date calculator proves helpful.</p>
        </div>
        <div className="questioncards">
            <div className="card1">
                <h3>When did your last period start?</h3>
                <input type="date" />
            </div>
            <div className="card2">
                <h3>How long does your period usually last?</h3>
                <input type="number" />
            </div>
            <div className="card3">
                <h3>How long is your cycle?</h3>
                <input type="number" />
            </div>
        </div>
        <button id='track'>Track My Period</button>
        <h1 id='cycle'>Your Cycle</h1>
        <div className="prevnex">
            <button id='prev'>Previous 3 months</button>
            <button id='next'>Next 3 months</button>
        </div>
        {/* Calendar */}
        <div className="cycles">
            <h3>🔴Menstrual Phase</h3>
            <h3>🟠Follicular Phase</h3>
            <h3>🟡Luteal Phase</h3>
            <h3>🟢Ovulation Phase</h3>
        </div>
        <div className="footer">
            <h3>Made By Janhavi ❤️</h3>
        </div>
    </div>
  )
}

export default Tracker