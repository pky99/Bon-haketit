// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import {Auth0Provider} from "@auth0/auth0-react";
// import "./index.css";
// import Router from "./routes";
// import App from "./App";
// const domain = process.env.AUTH0_DOMAIN;
// const clientid = process.env.AUTH0_CLIENT_ID;

// // ReactDOM.render(<Router />, document.getElementById('root'));
// ReactDOM.render(
//     <BrowserRouter>
//     <Auth0Provider
//     domain={domain}
//     clientId={clientid}
//     redirectUrl={window.location.origin}
//     ><App />
//     </Auth0Provider></BrowserRouter>,        
//     document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-pxq50cak.us.auth0.com"
    clientId="TsO1adXayNDJpaRs4plZgEhJwAoLTrTt"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);