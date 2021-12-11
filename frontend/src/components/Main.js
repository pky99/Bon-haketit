import React from "react";
import '../components/Main.css'
import LoginButton from "./LoginButton";
const Main = props => {
    return(
        <div className="Main">
            <h1>WELCOME to FOOD_APP</h1>
            <p>Contact us at : +91 9027353058 </p>  : 
            <LoginButton />
        </div>
    )
}

export default Main;