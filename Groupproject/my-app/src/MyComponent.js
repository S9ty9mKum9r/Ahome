import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const api = "https://63c9b142320a0c4c954daee6.mockapi.io/products";
  
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const realdata = await response.json();
        console.log(realdata);
        setData(realdata);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
      
    }, []);
  
  
  
    return (
      
     <>
     
     <div>
  
  
     </div>
       <div className="container">
        {/* Render your component using the 'data' state */}
        {data.map(item => (
          <div className="item">
         <img key={item.id} src={item.image} alt="" />
              <h3>Name:- {item.name}</h3>
              <p>Discription:- {item.discription}</p></div>
  
  
        
  
         
  
        ))}
      </div>
     </>
    );
  };
  export default MyComponent