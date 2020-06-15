import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { Route, Switch, NavLink, Link } from 'react-router-dom'

export default () => {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".header",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
      },
    },
  });

  tl.addLabel("start")
    .from("section", { scale: 0.3, rotation: 45, autoAlpha: 0 })
    .addLabel("color")
    .from(".section", { backgroundColor: "#28a92b" })
    .addLabel("spin")
    .to(".section", { rotation: 360 })
    .addLabel("end");

  return (
    <div className="header section">
      <header className="section center">
        <h1>
          <span className="F">F</span>
          <span className="oolish">oolish</span>
          <span className="space"> </span>
          <span className="P">P</span>
          <span className="assions">assions</span>
        </h1>
        <h3>Your place for dance education</h3>
      </header>
    </div>
  );
};
