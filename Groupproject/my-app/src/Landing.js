import React from 'react';
import './LandingPage.css';
function Landing() {
  return <>
    <div className='hadder'>
      <div className='Landingpage-Navbar'>
        <div className='burgerbardiv'>
        </div>
        <div className='Mybtn'>
          <button>Add Recipie</button>
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
      <div className='Mytext'>
        <h1>Food Land</h1>
        <h2>Find the best restaurants, cafés and
          bars in India</h2>
      </div>
    </div>
    <div className='futter'>
      <h1>Popular locations in India flag India</h1>
      <h2>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, <br /> Zomato covers it all.
        Explore menus,
        and millions of restaurant photos and reviews from users <br /> just like you, to find your next great meal.</h2>
      <div className='dja'>
        <button><div>Agra Restaurants</div><p>&gt;</p></button>
        <button><div>Delhi Restaurants   </div> <p>&gt;</p></button>
        <button><div>Gurugram Restaurants </div> <p>&gt;</p></button>
        <button><div>Kanpur Restaurants  </div> <p>&gt;</p></button>
        <button><div>Rohtak Restaurants </div> <p>&gt;</p></button>
        <button><div>Bhopal Restaurants  </div> <p>&gt;</p></button>
        <button><div>Jaipur Restaurants  </div> <p>&gt;</p></button>
        <button><div>Indore Restaurants  </div> <p>&gt;</p></button>
        <button><div>Gaziyabad Restaurants </div> <p>&gt;</p></button>
        <button><div>Delhi NCR Restaurants </div> <p>&gt;</p></button>
        <button><div>Ludhiyana Restaurants </div> <p>&gt;</p></button>
        <button><div>Shri Nagar Restaurants </div> <p>&gt;</p></button>
      </div>
    </div>
  </>
}
export default Landing;
{/* <div className="Myimage">
        <div className='MyButtons'>
        <button>Add Recipie</button>
        <button>LogIn</button>
        <button>SignUp</button>
      </div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
            alt="error"
          />
        </div> */}