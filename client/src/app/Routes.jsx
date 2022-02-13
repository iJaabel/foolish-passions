import React, { useState, useEffect } from "react";
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
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    console.log("useEffect in routes fired off\n", "\nthis is routes state:\n", isActive)
    if (localStorage.getItem('state') !== false || undefined || null || NaN) {
      setActive(true)
    }
  }, [isActive, setActive])

  return (
    <Router>
      <Switch>
        {isActive ? <Route exact path="/" component={Home} /> : <Route path="/login" component={Login} />}
        {isActive ? <Redirect to="/" /> : <Route path="/login" component={Login} />}
        {isActive ? <Redirect to="/" /> : <Route path="/register" component={Register} />}
        {isActive ? <Redirect to="/" /> : <Redirect to="/login" />}

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/video" component={Video} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
};
