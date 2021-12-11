import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./components/login.component"
import  Dashboard from "./components/Dashboard.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      {/* <Route path="/Choices" component={Choices} exact /> */}
      <Route path="/sign-in" component={Login} exact />
      <Route path="/Dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;