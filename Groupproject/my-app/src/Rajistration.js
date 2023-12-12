import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import './Rajistration.css';
function Rajistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const clearName = () => {
    setName('');
  };
  const clearEmail = () => {
    setEmail('');
  };
  return (
      <div className="container">
        <div className="head">
          <p id="text">Sign Up</p><button><ImCross /></button>
        </div>
        <div className="inputField">
          <div className="inputone">
            <p>Full Name :</p>
           <div className='single'>
           <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={handleNameChange}
             />
            <button style={{
              display: name.length>0 ? "inline":"none"
            }} onClick={clearName}><ImCross/></button>
           </div>
          </div>
          <p>Email :</p>
          <div className='singleInputtwo'>
          <div className="inputtwo">
            <div className='inputEmail'>
            <input id='inputsecond'
              type="text"
              placeholder="Enter your Email" value={email} onChange={handleEmailChange}/>
              </div>
              <button style={{display: email.length>0 ? "inline":"none"}} onClick={clearEmail}><ImCross/></button>
          </div>
          </div>
        </div>
        <div className="sbtn">
          <button style={{display: email.length>0 ? "inline":"none"}}>Create Account</button>
        </div>
        <p>Already have an account?</p>
      </div>
  );
}
export default Rajistration;
