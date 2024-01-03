import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const api = "https://63c9b142320a0c4c954daee6.mockapi.io/products";

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const realdata = await response.json();
      setData(realdata);
    } catch (error) {
      console.error(error);
    }
  };

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
    <div>
      <input type="text" onChange={e => handleSearch(e.target.value)} />
      <div className="container">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h3>Name: {item.name}</h3>
              <p>Description: {item.description}</p> {/* Corrected property name */}
            </div>
          ))
        ) : (
          data.map(item => (
            <div className="item" key={item.id}>
            
            </div>
            ))
        )}
      </div>
    </div>
  );
}

export default SearchBar;