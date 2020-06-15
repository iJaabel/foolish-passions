import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import "./style.css";

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  let frame_count = 9,
    offset_value = 100;

  useEffect(() => {
    gsap.to(".viewer", {
      backgroundPosition: -offset_value * frame_count * 2 + "px 50%",
      ease: `steps(${frame_count})`, // use a stepped ease for the sprite sheet
      scrollTrigger: {
        trigger: ".scene",
        start: "bottom bottom",
        end: `+=${frame_count * offset_value}`,
        pin: true,
        scrub: true,
      },
    });
    gsap.to(".F", {
      backgroundPosition: -500,
      ease: "back",
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "+=500",
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Header />
      <section className="scene section center">
        <div className="viewer">viewer</div>
      </section>
      <div className="section center">
        <main className="center">
          <h3>Feed</h3>
        </main>
      </div>
      <div className="section center">
        <footer className="center">
          <h3>Footer</h3>
        </footer>
      </div>
    </>
  );
}
