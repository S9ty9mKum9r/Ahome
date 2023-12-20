import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import './Login.css';

function LogInPage() {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    // Replace '/Homepage' with the actual path to your home page
    navigate('/home');
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='container'>
        <div className='dja top'>
          <h1>Login</h1>
          <button id='cross'>
            <ImCross />
          </button>
        </div>
        <div className='dcja b2 mid'>
          <input id='Contact' type='' placeholder='🫙Phone' />
          <button id='SendBtn'>Send One Time Password</button>
          <input id='Gmailc' type='gmail' placeholder='📧Enter Gmail' />
        </div>
        <div className='dja b3 bottom'>
          <p id='Account'>New in FoodLand?</p>
          <button id='Submitbtn' onClick={navigateToHomePage}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
