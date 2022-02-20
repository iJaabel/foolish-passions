import React from "react";
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

export default () => {
  const activeUser = useSelector(state => state.user.activeUser)
  console.log("from routes... what is ActiveUser?:", activeUser)
  return (
    <Router>
      <Switch>
        {activeUser ? <Route exact path="/" component={Home} /> : <Route path="/login" component={Login} />}
        {activeUser ? <Redirect to="/" /> : <Route path="/login" component={Login} />}
        {activeUser ? <Redirect to="/" /> : <Route path="/register" component={Register} />}
        {activeUser ? <Redirect to="/" /> : <Redirect to="/login" />}

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/video" component={Video} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
};
