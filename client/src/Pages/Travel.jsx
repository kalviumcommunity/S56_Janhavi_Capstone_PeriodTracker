import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import "./travel.css";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Travel() {
  const phases = [
    "Menstrual Phase",
    "Follicular Phase",
    "Luteal Phase",
    "Ovulation Phase",
  ];
  const [data, setData] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/activity");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter activities based on selected phase
  const filteredData = selectedPhase
    ? data.filter((activity) => activity.phase === selectedPhase)
    : data;

  return (
    <div>
      <Navbar />
      <div className="introduce">
        <h1>Celebrate Every Phase, Explore Every Day!</h1>
        <p>
          Have you ever felt like you wanted to have fun and go out, but your
          periods were getting in the way? Well, at Ms. Femmigo, we totally get
          it. That's why we do more than just track your period. With Ms.
          Femmigo, you can easily plan activities based on your cycle. We think
          every woman should enjoy life to the max, without periods holding them
          back. So don't let your periods stop you; embrace them with Ms.
          Femmigo and live life without limits!
        </p>
      </div>
      <div className="yourphase">
        <label htmlFor="phaseSelect">Select Phase:</label>
        <select
          id="phaseSelect"
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(e.target.value)}
        >
          <option value="">All Phases</option>
          {phases.map((phase, index) => (
            <option key={index} value={phase}>
              {phase}
            </option>
          ))}
        </select>
      </div>
      <div className="add">
        <h4>
          To add the activities you like and feel fit the phase, click on the
          add button below!
        </h4>
        <Link to="/form">
          <button id="form">Add</button>
        </Link>
      </div>
      <div className="activities">
        <h3>Activities you can do according to your phase.</h3>
        <div className="allacts">
          {filteredData.length > 0 ? (
            filteredData.map((activity, index) => (
              <Card key={index} props={activity} />
            ))
          ) : (
            <p>No activities available for the selected phase.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Travel;
