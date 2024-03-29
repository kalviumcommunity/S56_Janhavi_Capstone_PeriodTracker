import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import Learnmore from './Pages/Learnmore';
import Tracker from './Pages/Tracker';
import Travel from './Pages/Travel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/tracker" element={<Tracker/>}/>
        <Route path="travel" element={<Travel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
