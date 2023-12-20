import React, { useState, useEffect } from 'react';
import './BlogPage.css';

function Comment(){
// State for input value in the comment box
const [inputValue, setInputValue] = useState('');
  
// State to store comments
const [comments, setComments] = useState([]);
// Function to handle input change in the comment box
const handleInputChange = (e) => {
  setInputValue(e.target.value);
};
const handleButtonClick = () => {
  const updatedComments = [...comments, inputValue];
  setComments(updatedComments);

  try {
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));
  } catch (error) {
    console.error('Error while saving to localStorage:', error);
  }

  setInputValue('');
};
useEffect(() => {
  try {
    const storedComments = JSON.parse(localStorage.getItem('blogComments')) || [];
    setComments(storedComments);

  } catch (error) {
    console.error('Error while parsing data from localStorage:', error);
  }
}, []);
return (
<>
<div className='inputArea'>
 <div className='inputField'>
          <p> Comments </p>
          <div className='inputbox'>
            <input
              type='text'
              style={{ width: '300px', height: '35px', fontSize: '20px', fontFamily: '-moz-initial' }}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className='btn'>
            <button id='submitbtn' onClick={handleButtonClick}>
              Submit
            </button>
          </div>
    </div>
        <p id='firstcomment'>Your Comments:</p>
          <div className='CommentItem'>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
          </div>
</>
)
}
const BlogPage = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    // Fetch existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

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
    localStorage.setItem('favouriteItems', JSON.stringify(existingCartItems));
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
    localStorage.setItem('favouriteItems', JSON.stringify(updatedCartItems));
  }

  function removeItem(item) {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('favouriteItems', JSON.stringify(updatedCartItems));
  }
  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    setCartItems(storedCartItems);
  }, []);
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };
  return (
    <div className="cart-page">
      <div>
        <Comment />
      </div>
      <div className='TotalButton'>
      <p>Total: {calculateTotal()} ₹</p>
      </div>
      <div className='title'>
      <h2>Your Favourite</h2>
      </div>
      <div className='wholegetItem'>
      {cartItems.map((item) => (
        <div className='Allitem' key={item.id}>
          <div className='image'>
          <img src={item.image} alt="" />
          </div>
          <h3>{item.name}</h3>
          <h4>{item.price} ₹</h4>
          <div className='description'>
          <p>{item.discription}</p>
          </div>
          <div className='buttons'>
            <div className='increament'>
            <button onClick={() => addToCart(item)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => removeFromCart(item)}>-</button>
            </div>
            <div className='Removebtn'>
            <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default BlogPage;
