// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import Homepage from './Homepage';
import MenuPage from './MenuPage';
import BlogPage from './BlogPage';
import Bag from './Bag';
import Introduction from './Footerpages/Introduction';
import Contact from './Footerpages/Contact';
import Private from './Footerpages/Private';
import Security from './Footerpages/Security';
import Terms from './Footerpages/Terms';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path='/MenuPage' element={<MenuPage/>} />
        <Route path='/BlogPage' element={<BlogPage/>} />
        <Route path='/Bag' element={<Bag/>}/>
        <Route path='/Introduction' element={<Introduction/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Private' element={<Private/>}/>
        <Route path='/Security' element={<Security/>}/>
        <Route path='/Terms' element={<Terms/>}/>
      </Routes>
    </Router>
  );
};

export default App;
