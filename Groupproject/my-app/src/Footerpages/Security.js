import Navbar from "../Navbar"
import Footer from "../Footer"

function Security(){
    return(
        <>
    <Navbar />
    <div style={{width:"100%",height:"300px",textAlign:"center"}}>
            <h1 style={{color:"black"}}>Help keep Zomato safe for the community by disclosing security issues to us</h1>
            <p>We take security seriously at Zomato. If you are a security researcher or expert, and believe you’ve identified security-related issues with Zomato’s website or apps, we would appreciate you disclosing it to us responsibly.

Our team is committed to addressing all security issues in a responsible and timely manner, and ask the security community to give us the opportunity to do so before disclosing them publicly. Please submit a bug to us on our HackerOne page, along with a detailed description of the issue and steps to reproduce it, if any. We trust the security community to make every effort to protect our users data and privacy.

For a list of researchers who have helped us address security issues, please visit our HackerOne page.

Submit the bugs to us on our HackerOne page, along with a detailed description of the issue and steps to reproduce it.

</p>
        </div>
    <Footer/>
    </>
    )
}

export default Security