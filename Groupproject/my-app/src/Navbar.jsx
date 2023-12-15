import  img from "./Images/b.jpg"

function Navbar(){
    return(<>
        <div className="Nav">
     <div id="left">   <button id="img"><img src={img} alt="error" /></button>
<div className="Menuside">


<button>Blog</button>
<button>favorite</button>
</div></div>
<div className="input">
    <input type="Value" placeholder="      Search your dish"/>
    <button>Search</button>
</div>
<div className="logindiv">
    <button>Login</button>
    <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg></button>
</div>        

        </div>
    </>)
}

export default Navbar