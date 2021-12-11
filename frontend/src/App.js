import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Dashboard from './components/Dashboard';
import Callback from './components/Callback';
import Main from './components/Main';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (<Router>
    <div className="App">
        <Header />
        <Router>
        <Switch>
          <Route exact path="/">
              <Main message="Welcome to Bon HAketit 2.0" showbutton="true"/>
          </Route>
          {/* <Route exact path="/about">
              <Main message="Thank you for visiting us" showbutton="false"/>
          </Route> */}
          <Route exact path="/callback">
              <Callback />
          </Route>
          <Route exact path="/notfound">
              <Main message="404 Page Not Found" showbutton="false"/>
          </Route>
          {/* <Route exact path="/recipes">
              <Recipe message="Welcome to recipes" showbutton="false"/>
          </Route> */}
          <Route exact path="/loginFailed">
              <Main message="Login Failed. Try Again" showbutton="true"/>
          </Route>
        </Switch>
        </Router>
    </div></Router>
  );
}

export default App;