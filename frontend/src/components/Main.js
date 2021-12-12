import React from "react";
import '../components/Main.css'
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
const Main = props => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return(
        <div className="Main">
            <h1>WELCOME to FOOD_APP</h1>
            <p>Contact us at : +91 9027353058 </p>  : 
            { !isAuthenticated && <LoginButton />}
        </div>
    )
}

export default Main;