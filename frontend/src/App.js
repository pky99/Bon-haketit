import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import LoginButton from './components/LoginButton';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from './components/Dashboard';
import LogoutButton from './components/LogoutButton';
function App() {
  return (
    <div><LoginButton /> <LogoutButton /></div>

  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";
// import Dashboard from './components/Dashboard';
// function App() {
//   return (<Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/sign-in"}>Bon-Haketit 2.0</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//             <Route path="/Dashboard" component={Dashboard} />
//           </Switch>
//         </div>
//       </div>
//     </div></Router>
//   );
// }

// export default App;