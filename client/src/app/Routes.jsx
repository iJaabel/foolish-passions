import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  Contact,
  Error,
  Home,
  Profile,
  Video,
  Login,
  Register,
} from "../containers";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/video" component={Video} />
      <Route component={Error} />
    </Switch>
  </Router>
);
