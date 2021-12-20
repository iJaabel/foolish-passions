import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./pages/error/Default";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import VideoDisplay from "./pages/video/VideoDisplay";

export default () => (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/video" component={VideoDisplay} />
      <Route component={Default} />
  </Switch>
);
