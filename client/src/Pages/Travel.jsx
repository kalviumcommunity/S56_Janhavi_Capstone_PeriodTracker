import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from 'axios';
import "./travel.css";
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

function Travel() {
  const phases = ["luteal", "menstrual", "ovulation", "follicular"];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(' http://localhost:3000/activity')
      .then((result) => {
        setData(result.data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Navbar />
      <div className="introduce">
        <h1>Celebrate Every Phase, Explore Every Day!</h1>
        <p>Have you ever felt like you wanted to have fun and go out, but your periods were getting in the way? Well, at Ms. Femmigo, we totally get it. That's why we do more than just track your period. With Ms. Femmigo, you can easily plan activities based on your cycle. We think every woman should enjoy life to the max, without periods holding them back. So don't let your periods stop you; embrace them with Ms. Femmigo and live life without limits!</p>
      </div>
      <div className="yourphase">
        <label htmlFor="phaseSelect">Select Phase:</label>
        <select id="phaseSelect">
          {phases.map((phase, index) => (
            <option id="option" key={index} value={phase}>
              {phase}
            </option>
          ))}
        </select>
      </div>
      <div className="add">
        <h4>To add the activities you like and feel fit the phase click on the add button below!</h4>
        <Link to='/form'><button id="form">Add</button></Link>
      </div>
      <div className="activities">
        <h3>Activities you can do according to your phase.</h3>
        <div className="allacts">
          {data.map((activity, index) => (
            <Card key={index} props={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Travel;
