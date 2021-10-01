import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import VideoDisplay from "./video/VideoDisplay";

export default () => (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/video" component={VideoDisplay} />
      <Route component={Default} />
  </Switch>
);
