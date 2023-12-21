import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { ImCross } from 'react-icons/im';
import './Login.css';

function LogInPage() {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    // Replace '/Homepage' with the actual path to your home page
    navigate('/home');
  };

  return (
    <div id='main'
    
    >
      <div id='container'>
      <h1>Login</h1>
        <div id='top'>
          
         
        </div>
        <div id='mid'>
          <input id='Contact' type='' placeholder='🫙Phone' />
          
          <input id='Gmailc' type='gmail' placeholder='📧Enter Gmail' />
        </div>
        <div id='bottom'>
          <p id='Account'>New in FoodLand?</p>
          <button id='Submitbtn' onClick={navigateToHomePage}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
