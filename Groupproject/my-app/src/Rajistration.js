import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import './Rajistration.css';
function Rajistration() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clearName = () => {
    setName('');
  };

  const clearEmail = () => {
    setEmail('');
  };

  const clearPassword = () => {
    setPassword('');
  };

  const handleCreateAccount = () => {
        localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setName('');
    setEmail('');
    setPassword('');
    
  };
const nevigateTolandingpage=()=>{
  navigate('/');
}
  return (
    <div id="Rajistration1container">
      <div id="Rajistration2head">
        <p id="text">Sign Up</p>
        <button onClick={nevigateTolandingpage}>
        <ImCross/>
        </button>
      </div>
      <div id="inputField">
        <div id="Rajistration3inputone">
          <p>Full Name :</p>
          <div id='Rajistration7inputonebtn'>
            <input style={{color: "black"}}
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={handleNameChange}
            />
       
            </div>
        </div>
        <div id="Rajistration4inputonePassword">
          <p>Password :</p>
          <div id='Rajistration8inputoneP'>
            <input style={{color: "black"}}
              type="text"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
            />
        
            </div>
        </div>
        <div id='Rajistration5singleInputtwo'>
        <p>Email :</p>
        <div id='Rajistration9singleInput'>
              <input style={{color: "black"}}
                id='inputsecond'
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={handleEmailChange}
              />
            
            </div>
        </div>
      </div>
      <div id="Rajistration6sbtn" onClick={()=>navigate("/loginPage")}>
        <button id='dabba'
          
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
export default Rajistration;