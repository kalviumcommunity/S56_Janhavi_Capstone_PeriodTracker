import React, { useState, useEffect } from 'react'; 
import Navbar from '../Components/Navbar';
import Calendar from 'react-calendar';
import './tracker.css';

function Tracker() {
  const [lastPeriodStart, setLastPeriodStart] = useState('');
  const [periodDuration, setPeriodDuration] = useState(5); // Default to 5 days
  const [cycleLength, setCycleLength] = useState(28); // Default to 28 days
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

      // Calculate phase dates for the next 24 months (24 cycles)
      for (let i = 0; i < 24; i++) {
        const periodStart = new Date(currentDate);
        const periodEnd = new Date(periodStart);
        periodEnd.setDate(periodStart.getDate() + periodDuration - 1);

        const follicularStart = new Date(periodEnd);
        follicularStart.setDate(periodEnd.getDate() + 1);

        const ovulationStart = new Date(follicularStart);
        ovulationStart.setDate(follicularStart.getDate() + (14 - periodDuration));

        const lutealStart = new Date(ovulationStart);
        lutealStart.setDate(ovulationStart.getDate() + 2);

        nextPhaseDates.push({
          menstrualPhaseStart: periodStart.toLocaleDateString('en-GB'),
          follicularPhaseStart: follicularStart.toLocaleDateString('en-GB'),
          ovulationPhaseStart: ovulationStart.toLocaleDateString('en-GB'),
          lutealPhaseStart: lutealStart.toLocaleDateString('en-GB'),
        });

        // Move to the next period start date
        currentDate.setDate(periodStart.getDate() + cycleLength);
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
        phase.menstrualPhaseStart === dateStr ||
        phase.follicularPhaseStart === dateStr ||
        phase.ovulationPhaseStart === dateStr ||
        phase.lutealPhaseStart === dateStr
    );

    if (phaseDate) {
      if (phaseDate.menstrualPhaseStart === dateStr) {
        return 'menstrual-phase';
      } else if (phaseDate.follicularPhaseStart === dateStr) {
        return 'follicular-phase';
      } else if (phaseDate.ovulationPhaseStart === dateStr) {
        return 'ovulation-phase';
      } else if (phaseDate.lutealPhaseStart === dateStr) {
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
        <h3>The starting dates of each phase will be marked with the respective color of the phase.</h3>
        <h3>Your current phase ends a day before the next phase starts.</h3>
      </div>
      <div className="cycles">
        <h3>🔴 Menstrual Phase</h3>
        <h3>🟠 Follicular Phase</h3>
        <h3>🟡 Luteal Phase</h3>
        <h3>🟢 Ovulation Phase</h3>
      </div>
      {/* Calendar Component */}
      {showDates && (
        <div className="calendar-container">
          <Calendar
            onChange={handleCalendarChange}
            value={calendarDate}
            tileClassName={tileClassName}
            minDetail="month" // Shows month view by default
            showNeighboringMonth={false} // Don't show dates from previous or next month
          />
        </div>
      )}
    </div>
  );
}

export default Tracker;
