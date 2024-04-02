import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Calendar from 'react-calendar';
import './tracker.css';

function Tracker() {
  const [lastPeriodStart, setLastPeriodStart] = useState('');
  const [periodDuration, setPeriodDuration] = useState(0);
  const [cycleLength, setCycleLength] = useState(0);
  const [menstrualPhaseDate, setMenstrualPhaseDate] = useState('');
  const [follicularPhaseDate, setFollicularPhaseDate] = useState('');
  const [lutealPhaseDate, setLutealPhaseDate] = useState('');
  const [ovulationPhaseDate, setOvulationPhaseDate] = useState('');
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
      const lastPeriodStartDate = new Date(lastPeriodStart);
      const nextPeriodStartDate = new Date(lastPeriodStartDate);
      nextPeriodStartDate.setDate(lastPeriodStartDate.getDate() + cycleLength);

      const menstrualPhaseDate = nextPeriodStartDate.toLocaleDateString('en-GB');
      const follicularPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 5)).toLocaleDateString('en-GB');
      const ovulationPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 9)).toLocaleDateString('en-GB');
      const lutealPhaseDate = new Date(nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() + 9)).toLocaleDateString('en-GB');

      setMenstrualPhaseDate(menstrualPhaseDate);
      setFollicularPhaseDate(follicularPhaseDate);
      setOvulationPhaseDate(ovulationPhaseDate);
      setLutealPhaseDate(lutealPhaseDate);
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
    if (dateStr === menstrualPhaseDate) {
      return 'menstrual-phase';
    } else if (dateStr === follicularPhaseDate) {
      return 'follicular-phase';
    } else if (dateStr === ovulationPhaseDate) {
      return 'ovulation-phase';
    } else if (dateStr === lutealPhaseDate) {
      return 'luteal-phase';
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
      <div className="prevnex">
        <button id='prev'>Previous 3 months</button>
        <button id='next'>Next 3 months</button>
      </div>
      {/* Display Phase Dates */}
      {showDates && (
        <div className="cycles">
          <h3>🔴Menstrual Phase: {menstrualPhaseDate}</h3>
          <h3>🟠Follicular Phase: {follicularPhaseDate}</h3>
          <h3>🟡Luteal Phase: {lutealPhaseDate}</h3>
          <h3>🟢Ovulation Phase: {ovulationPhaseDate}</h3>
        </div>
      )}
      {/* Calendar Component */}
      {showDates && (
        <div className="calendar-container">
          <Calendar onChange={handleCalendarChange} value={calendarDate} tileClassName={tileClassName} />
        </div>
      )}
      <div className="footer">
        <h3>Made By Janhavi ❤️</h3>
      </div>
    </div>
  );
}

export default Tracker;
