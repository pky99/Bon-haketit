import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Steps, Step } from "react-step-builder";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import Login from "./login.component";
import SignUp from "./signup.component";
function Dashboard () {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/sign-in">Bon-Haketit 2.0</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Steps>
            <Step component={Step1} />
            <Step component={Step2} />
            <Step component={FinalStep} />
          </Steps>
        </div>
      </div>
     </div>
    </Router>
  );
}

export default Dashboard;