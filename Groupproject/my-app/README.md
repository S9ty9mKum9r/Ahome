import React, { useState, useEffect } from 'react';

function FilterFetchApi() {
  const [myFruits, setMyFruits] = useState('');
  const [data, setData] = useState([]);
  const api = 'https://63c9b142320a0c4c954daee6.mockapi.io/products';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const realData = await response.json();
        setData(realData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item => {
    return item.name.toLowerCase().includes(myFruits.toLowerCase());
  });

  return (
    <div className='FruitAssessment'>
      <h1>Filtered Fruits</h1>
      <input
        type='text'
        placeholder='Enter your Fruit'
        value={myFruits}
        onChange={(e) => setMyFruits(e.target.value)}
      />
      <div className='FruitAssessment'>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item.name}
            <img src={item.image} alt="" />  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default FilterFetchApi;