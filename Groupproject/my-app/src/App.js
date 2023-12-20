// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import Homepage from './Homepage';
import MenuPage from './MenuPage';
import BlogPage from './BlogPage';
import Bag from './Bag';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path='/MenuPage' element={<MenuPage/>} />
        <Route path='/BlogPage' element={<BlogPage/>} />
        <Route path='/Bag' element={<Bag/>}/>
      </Routes>
    </Router>
  );
};

export default App;
