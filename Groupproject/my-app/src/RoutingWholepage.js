// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
// import HomePage from './Homepage';
import Homepage from './Homepage';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/Homepage" element={<Homepage/>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
