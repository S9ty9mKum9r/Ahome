import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "./CSSPages/Navbar.css"
import Footer from "./Footer"
import "./CSSPages/Footer.css"
import "./CSSPages/Bag.css"
const Bag = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    // Fetch existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = existingCartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      existingCartItems[existingItemIndex].quantity += 1;
    } else {
      // If the item is not in the cart, add it with quantity 1
      existingCartItems.push({ ...item, quantity: 1 });
    }

    // Update the state and local storage with the new cart items
    setCartItems(existingCartItems);
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  }

  function removeFromCart(item) {
    const updatedCartItems = cartItems
      .map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0); // Remove items with quantity zero
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  function removeItem(item) {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };

  return (
   <>
    <div>
      <Navbar/>
    </div>
     <div className="cart-page">
   
      <p>Total: {calculateTotal()} ₹</p>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div id='container' key={item.id}>
          <img src={item.image} alt="" />
          
          <h2>{item.name}</h2>
          <h3>{item.price} ₹</h3>
          
          <p>{item.discription}</p>
          <div id='bottom'>
            <div>
            <button id='add' onClick={() => addToCart(item)}>+</button>
            <span id='price'>{item.quantity}</span>
            <button id='sub' onClick={() => removeFromCart(item)}>-</button>
            </div>
           <div> <button id='remove' onClick={() => removeItem(item)}>Remove</button></div>
          </div>
        </div>
      ))}

   
    </div>
    <div>
        <Footer/>
      </div>
   </>
  );
};

export default Bag;
