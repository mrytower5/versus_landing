import React  from "react";
import logo from "../images/logo.svg"; 
import MailchimpForm from "./MailchimpForm"; 

function App() {
return (
    <div> 
        <img className= "vLogo" src={logo} alt="Versus Logo" />
        <MailchimpForm />
    </div>
        );  
}; 

export default App;
