import React from "react";
import '../components/Main.css'
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
const Main = props => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return(
        <div className="Main">
            <h1>Healthie Foodie</h1>
            <p>An application to suggest better food options for better nutrients considering different health conditions. </p>  : 
            { !isAuthenticated && <LoginButton />}
        </div>
    )
}

export default Main;