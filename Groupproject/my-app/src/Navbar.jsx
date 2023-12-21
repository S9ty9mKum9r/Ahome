import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import img from "./Images/b.jpg";
function Navbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="Nav">
      <div id="left">
        <button id="img">
          <img src={img} alt="error" />
        </button>
        <div className="Menuside">
          <button><Link id='Blog' to='/BlogPage'>Blog</Link></button>
          <button>
            <Link id='Menu' to='/MenuPage'>Menu</Link>
          </button>
        </div>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search your Dish"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className="logindiv">
        <button><Link id='Login' to='/loginPage'>LogIn</Link></button>
        <button>
        <Link id='Bag' to='/Bag'>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path>
          </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
