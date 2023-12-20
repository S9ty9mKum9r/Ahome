import React from 'react';
import './LandingPage.css';
import LogInPage from './LogInPage';
import Rajistration from './Rajistration';
import {  BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

function Landing() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
        <div className='hadder'>
          <div className='Landingpage-Navbar'>
            <div className='burgerbardiv'></div>
            <div className='Mybtn'>
              <button>Add Recipe</button>
              <button><Link to='/login'>Login</Link></button>
              <button><Link to='/signup'>SignUp</Link></button>
            </div>
          </div>
          <div className='Mytext'>
            <h1>Food Land</h1>
            <h2>Find the best restaurants, cafés and bars in India</h2>
          </div>
        </div>
        <div className='futter'>
          <h1>Popular locations in India flag India</h1>
          <h2>
            From swanky upscale restaurants to the cosiest hidden gems serving
            the most incredible food, <br /> Zomato covers it all. Explore
            menus, and millions of restaurant photos and reviews from users <br />
            just like you, to find your next great meal.
          </h2>
          <div className='dja'>
            <button>
              <div>Agra Restaurants</div>
              <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            <button>
              <div>Delhi Restaurants</div> <p>&gt;</p>
            </button>
            {/* Add the rest of your buttons here */}
          </div>
        </div>
       
        </>
          }
        />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<Rajistration />} />
      </Routes>
    </Router>
  );
}
export default Landing;
