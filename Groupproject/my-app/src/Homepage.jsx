import "./CSSPages/Navbar.css"
// import  img from "./Images/b.jpg"
import "./CSSPages/Footer.css"
import Navbar from "./Navbar"
import MyComponent from "./MyComponent"
import Footer from "./Footer"
function Homepage(){
    return (
   <>
         <div><Navbar/></div>
         <MyComponent/>
         <div><Footer/></div>
         
   </>
    )
}

export default Homepage;

