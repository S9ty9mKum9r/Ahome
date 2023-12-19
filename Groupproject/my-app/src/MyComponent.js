import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const api = "https://63c9b142320a0c4c954daee6.mockapi.io/products";

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const realdata = await response.json();
      setData(realdata);
      // console.log(realdata)
    } catch (error) {
      console.error(error);
    }
  };
console.log(fetchData)
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchQuery) => {
    const filteredProducts = data.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  return (
    <>
    <div id='slider'>
    <ImageSlider />
    </div>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h3>Name: {item.name}</h3>
              <p>Description: {item.discription}</p>
            </div>
          ))
        ) : (
          data.map(item => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h3>Name: {item.name}</h3>
              <p>Description: {item.discription}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MyComponent;
