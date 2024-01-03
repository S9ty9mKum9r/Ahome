import React, { useState, useEffect } from 'react';
import "./CSSPages/Bag.css"
import Navbar from './Navbar';
import Footer from './Footer';
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
   <Navbar/>
     <div className="cart-page">
      <div id='Total'>
      <h1>Total: {calculateTotal()} ₹</h1>
      </div>
      
      {cartItems.map((item) => (
        <div id='Bag-data' key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <h4>{item.price} ₹</h4>
          <p>{item.discription}</p>
          <div>
          <div id='math'>
            <button onClick={() => addToCart(item)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => removeFromCart(item)}>-</button>
            </div>
            <div id='remove'>
            <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
   </>
  );
};
export default Bag;