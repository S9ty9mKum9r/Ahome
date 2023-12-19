import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.price} ₹</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
