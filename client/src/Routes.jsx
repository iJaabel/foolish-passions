import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./views/error/Default";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import VideoDisplay from "./views/video/VideoDisplay";

export default () => (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/video" component={VideoDisplay} />
      <Route component={Default} />
  </Switch>
);
