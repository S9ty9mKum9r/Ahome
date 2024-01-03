import React, { useEffect, useState } from 'react';

const Myprofile = () => {
  const [userData, setUserData] = useState({ email: '', name: '' });

  useEffect(() => {
    
    const storedEmail = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');

    setUserData({ email: storedEmail, name: storedName });

    console.log('Email:', storedEmail);
    console.log('Name:', storedName);
  }, []);
  console.log(userData  )

  return (
    <div>
      <h2>My Profile</h2>
      
      <p>Email: {userData.email}</p>
      <p>Name: {userData.name}</p>
    </div>
  );
};

export default Myprofile;