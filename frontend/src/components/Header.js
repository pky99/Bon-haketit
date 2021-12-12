import React from 'react';
import App from '../App';
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import LoginButton from './LoginButton';
import './../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Header = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return(
      <Router>
      <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <a className="navbar-brand" href="/">Bon Haketit 2.0</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* {!isAuthenticated && (<button onClick={() => <LoginButton />}>Log in</button>)} */}
        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" { ... isAuthenticated ? {href: "/callback"} : {href: "/"}}>Let's Start</a>
            </li>
          </ul>
        </div>
        {isAuthenticated && <button class="button-34" role="button" onClick={() => logout()}>Log out</button>}
        </div>
      </nav>
      </div></Router>
    )
}

export default Header;