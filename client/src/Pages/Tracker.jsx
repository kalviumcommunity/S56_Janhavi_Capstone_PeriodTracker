import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Calendar from 'react-calendar';
import './tracker.css';
import Footer from '../Components/Footer';

function Tracker() {
  const [lastPeriodStart, setLastPeriodStart] = useState('');
  const [periodDuration, setPeriodDuration] = useState(0);
  const [cycleLength, setCycleLength] = useState(0);
  const [phaseDates, setPhaseDates] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [showDates, setShowDates] = useState(false);

  useEffect(() => {
    if (showDates) {
      calculatePhaseDates();
    }
  }, [lastPeriodStart, periodDuration, cycleLength, showDates]);

  const handleLastPeriodStartChange = (e) => {
    setLastPeriodStart(e.target.value);
  };

  const handlePeriodDurationChange = (e) => {
    setPeriodDuration(parseInt(e.target.value));
  };

  const handleCycleLengthChange = (e) => {
    setCycleLength(parseInt(e.target.value));
  };

  const calculatePhaseDates = () => {
    if (lastPeriodStart && periodDuration && cycleLength) {
      const nextPhaseDates = [];
      let currentDate = new Date(lastPeriodStart);
      
      for (let i = 0; i < 13; i++) { // Calculate phase dates for next 3 months
        const nextPeriodStartDate = new Date(currentDate);
        nextPeriodStartDate.setDate(currentDate.getDate() + cycleLength);

        const menstrualPhaseDate = nextPeriodStartDate.toLocaleDateString('en-GB');
        const follicularPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 5)).toLocaleDateString('en-GB');
        const ovulationPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 9)).toLocaleDateString('en-GB');
        const lutealPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 9)).toLocaleDateString('en-GB');

        nextPhaseDates.push({ menstrualPhaseDate, follicularPhaseDate, ovulationPhaseDate, lutealPhaseDate });
        currentDate = nextPeriodStartDate;
      }

      setPhaseDates(nextPhaseDates);
    }
  };

  const handleTrackPeriod = () => {
    setShowDates(true);
  };

  const handleCalendarChange = (date) => {
    setCalendarDate(date);
  };

  const tileClassName = ({ date }) => {
    const dateStr = date.toLocaleDateString('en-GB');
    const phaseDate = phaseDates.find(
      (phase) =>
        phase.menstrualPhaseDate === dateStr ||
        phase.follicularPhaseDate === dateStr ||
        phase.ovulationPhaseDate === dateStr ||
        phase.lutealPhaseDate === dateStr
    );

    if (phaseDate) {
      if (phaseDate.menstrualPhaseDate === dateStr) {
        return 'menstrual-phase';
      } else if (phaseDate.follicularPhaseDate === dateStr) {
        return 'follicular-phase';
      } else if (phaseDate.ovulationPhaseDate === dateStr) {
        return 'ovulation-phase';
      } else if (phaseDate.lutealPhaseDate === dateStr) {
        return 'luteal-phase';
      }
    }
    return '';
  };

  return (
    <div>
      <Navbar />
      <div className="introduction">
        <h1>Period Tracker!</h1>
        <p>Periods typically occur approximately once a month (every 28-30 days). However, it's not always predictable for many women. Anticipating the exact date and duration of your upcoming period can be challenging at times. This is where our period due date calculator proves helpful.</p>
      </div>
      <div className="questioncards">
        <div className="card1">
          <h3>When did your last period start?</h3>
          <input type="date" value={lastPeriodStart} onChange={handleLastPeriodStartChange} />
        </div>
        <div className="card2">
          <h3>How long does your period usually last? (days)</h3>
          <input type="number" value={periodDuration} onChange={handlePeriodDurationChange} />
        </div>
        <div className="card3">
          <h3>How long is your cycle? (days)</h3>
          <input type="number" value={cycleLength} onChange={handleCycleLengthChange} />
        </div>
      </div>
      <button id='track' onClick={handleTrackPeriod}>Track My Period</button>
      <h1 id='cycle'>Your Cycle</h1>
      <div className="note">
      <h3>The starting dates of your each phase will be marked with the respective color of the phase.</h3>
      <h3>Your current phase ends a day before next phase starts.</h3>
      </div>
      <div className="cycles">
        <h3>🔴Menstrual Phase</h3>
        <h3>🟠Follicular Phase</h3>
        <h3>🟡Luteal Phase</h3>
        <h3>🟢Ovulation Phase</h3>
      </div>
      {/* Display Phase Dates */}
      {showDates && (
        <div className="calendarcycle">
          {phaseDates.map((index) => (
            <div key={index}>
            </div>
          ))}
        </div>
      )}
      {/* Calendar Component */}
      {showDates && (
        <div className="calendar-container">
          <Calendar onChange={handleCalendarChange} value={calendarDate} tileClassName={tileClassName} />
        </div>
      )}
     <Footer/>
    </div>
  );
}

export default Tracker;
