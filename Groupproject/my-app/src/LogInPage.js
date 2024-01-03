import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    import './Login.css';
function LogInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigateToHomePage = () => {

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
   <>
   <h1 id='logintext'>LogIn</h1>
    <div id='login'>
  
    <div id='container1'>
      
      <p id='id'>Id:</p>
        <input
        id='loginid'
          type='gmail'
          placeholder='Enter your email id'
          value={email}
          onChange={handleEmailChange}
        />
      
      
      
       
    
      
      <p id='loginpass'>Password:</p>
        <input type='password'
        id='password1'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={()=>navigate("/signup")} id='createAccountButton'>Create a New account</button>

      <button id='button'
      onClick={navigateToHomePage} >
        Login
      </button>
    </div>
    </div>
   </>
  );
}
export default LogInPage;