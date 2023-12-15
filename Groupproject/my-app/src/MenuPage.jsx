import React, { useEffect, useState } from 'react';
import './CSSPages/MenuPage.css';
function MenuPage(){
  const [dataone, setdataone] = useState([]);
  const [datatwo, setdatatwo] = useState([]);
  const [datathree, setdatathree] = useState([]);
  const [datafour, setdatafour] = useState([]);
  const[datafive, setdatafive] = useState([]);
  const[sortdata, setsortdata] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [buttonColor, setButtonColor] = useState('#FFFFFF');
  const api = 'https://63c9b142320a0c4c954daee6.mockapi.io/products';
  const fetchdata = async () => {         
    try {
      const response = await fetch(api);
      const realdata = await response.json();
      const sortedData = realdata.sort((a, b) => a.price - b.price);
      setsortdata(sortedData);
      setdatafive(realdata);
      const filteredone = realdata.filter((item) => item.category === 'Chicken Bucket');
      setdataone(filteredone);
      const filteredtwo = realdata.filter((item) => item.category === 'hot Deals');
      setdatatwo(filteredtwo);
      const filteredthree = realdata.filter((item) => item.category === 'Hot Lunchs');
      setdatathree(filteredthree);
      const filteredfour = realdata.filter((item) => item.category === 'Box Meals');
      setdatafour(filteredfour);
    } catch (error) {
      console.log(error);
    }
  };
  const Clicksix = () => {
    setDisplayedData(sortdata);
  };
  const ClickOne = () => {
    setDisplayedData(dataone);
  };
  const ClickTwo = () => {
    setDisplayedData(datatwo);
  };
  const ClickThree = () => {
    setDisplayedData(datathree);
  };
  const ClickFour = () => {
    setDisplayedData(datafour);
  };
  const ClickFive = () => {
    setDisplayedData(datafive);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleAddToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isItemInCart = existingCartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      alert('This item is already in your cart!');
    } else {
      existingCartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      alert('Your item has been added to the cart!');
    }
  };
  const handleFavourite = (item) => {
    const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
    const isItemFavourite = favouriteItems.some((favItem) => favItem.id === item.id);
    if (isItemFavourite) {
      alert('This item is already in your favorites!');
    } else {
      favouriteItems.push(item);
      localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
      alert('Your item has been added to favorites!');
      setButtonColor('#FF0000');
    }
  };
 return (
    <div className='dishpage'>
      <div className='button'>
      <button className ='firstButton' onClick={Clicksix}>Sort by</button>
      <button id ='firstButton' onClick={ClickFive}>All Element</button>
      <button id ='SecondButton' onClick={ClickOne}>Chicken Bucket</button>
      <button id ='ThirdButton' onClick={ClickTwo}>Hot Deals</button>
      <button id ='FourthButton' onClick={ClickThree}>Hot Lunch</button>
      <button id = 'FifthButton' onClick={ClickFour}>Box Meals</button>
      </div>
      <div className='allitemTwo'>
      <ul className='listitem'>
        {displayedData.map((item) => (
          <div className='allitem' key={item.id}>
           <div className='image'><img src={item.image} alt="" /></div>
           <div className='threeitem'>
           <div className='price'><p>{item.price}&nbsp;₹</p></div>
        <div className='itemname'><p>{item.name}</p></div>
        </div>
         <div className='description'><p>{item.discription}</p></div>
         <div className='buttonicon'>
          <div className='Add'>
         <button id='Addbutton' onClick={() => handleAddToCart(item)}>Add to Cart</button>
         </div>
             <div className='heart'> <button onClick={()=> handleFavourite(item)}  style={{ backgroundColor: buttonColor }} ><svg className='abcd' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg> </button> </div>
             </div>
            </div>
        ))}
      </ul>
      </div>
    </div>
  );
}
export default MenuPage;
