import React, { useState, useEffect } from 'react';
import './BlogPage.css';

function BlogPage() {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [favourite, setFavourite] = useState([]);

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

      const storedFavourite = JSON.parse(localStorage.getItem('favouriteItems')) || [];
      setFavourite(storedFavourite);
    } catch (error) {
      console.error('Error while parsing data from localStorage:', error);
    }
  }, []);
  return (
    <div className='BodyClass'>
      <div className='Bodyitems'>
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
        <div>
          <p id='firstcomment'>Your Comments:</p>
          <div className='CommentItem'>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
          <p id='favouriteItem'>Your Favourite:</p>
          <div className='myfavouriteItem'>
              {favourite.map((favourite, index) => (
                <p key={index}>
                  <div className='image'>
                <img src={favourite.image} alt="" />
                </div>
                <div>
          <h3>{favourite.name}</h3>
          </div>
          <div>
          <h4>{favourite.price} ₹</h4>
          </div>
          <div>
          <p>{favourite.discription}</p>
          </div>
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogPage;
