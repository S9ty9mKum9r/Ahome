import React, { useEffect, useState } from 'react';
// import './CSSPages/Menu.css';
function MenuPage(){
  const [dataone, setdataone] = useState([]);
  const [datatwo, setdatatwo] = useState([]);
  const [datathree, setdatathree] = useState([]);
  const [datafour, setdatafour] = useState([]);
  const[datafive, setdatafive]=useState([]);
  const[sortdata, setsortdata]=useState([]);
  const [displayedData, setDisplayedData] = useState([]);
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
 return (
    <div className='dishpage'>
      <div className='button'>
      <button id ='firstButton' onClick={Clicksix}>Sort by</button>
      <button id ='firstButton' onClick={ClickFive}>All Element</button>
      <button id ='SecondButton' onClick={ClickOne}>Chicken Bucket</button>
      <button id ='ThirdButton' onClick={ClickTwo}>Hot Deals</button>
      <button id ='FourthButton' onClick={ClickThree}>Hot Lunch</button>
      <button id = 'FifthButton' onClick={ClickFour}>Box Meals</button>
      </div>
      <div className='allitemTwo'>
      <ul>
        {displayedData.map((item) => (
          <div className='allitem' key={item.id}>
           <div className='image'><img src={item.image} alt="" /></div>
           <div className='threeitem'>
           <div className='price'><p>{item.price}&nbsp;₹</p></div>
        <div className='itemname'><p>{item.name}</p></div>
        </div>
         <div className='description'><p>{item.discription}</p></div>
            </div>
        ))}
      </ul>
      </div>
    </div>
  );
}
export default MenuPage;