import React from 'react'
import { Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import Feed from "./components/Feed";
import About from './components/About';
import Contact from './components/Contact';
import VideoDisplay from './video/VideoDisplay';

export default () => (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/video" component={VideoDisplay} />
      <Route component={Default} />
    </Switch>
);
