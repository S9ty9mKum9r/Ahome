import Navbar from "../Navbar"
import Footer from "../Footer"

function Private(){
    return(
        <>
    <Navbar />
    <div style={{width:"100%",height:"300px",textAlign:"center"}} >
            <h1 style={{color:"black"}}>Privacy Policy</h1>
            <p style={{color:"black"}}>Zomato Limited (Formerly known as Zomato Private Limited and Zomato Media Private Limited) and/or its affiliates ("Zomato," the "Company," "we," "us," and "our,") respect your privacy and is committed to protecting it through its compliance with its privacy policies. This policy describes:

the types of information that Zomato may collect from you when you access or use its websites, applications and other online services (collectively, referred as "Services"); and
its practices for collecting, using, maintaining, protecting and disclosing that information.
This policy applies only to the information Zomato collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</p>
        </div>
    <Footer/>
    </>
    )
}
export default Private