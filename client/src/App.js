import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import "./style.css";

export default function App() {
  const randomNumberBetween = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min));

  gsap.registerPlugin(ScrollTrigger);

  // const frame_count = 9,
  //   offset_value = 100;

  // let guySipping = {
  //   backgroundPosition: `${-offset_value * frame_count * 2}px 50%`,
  //   ease: `steps(${frame_count})`,
  //   scrollTrigger: {
  //     trigger: ".scene",
  //     start: "bottom bottom",
  //     end: `+=${frame_count * offset_value}`,
  //     pin: true,
  //     scrub: true,
  //     markers: true,
  //   },
  // };

  let defaultAnimation = {
    duration: 0.5,
    opacity: 0,
    yPercent: -150,
    xPercent: randomNumberBetween(-100, 100),
    ease: "back",
    scrollTrigger: {
      trigger: ".header",
      start: `top top`,
      end: `+=4000px`,
      scrub: true,
      pin: true,
      markers: true,
    },
  };

  let configTl = {};

  //--- ---

  let introAnimation = gsap.timeline(configTl);
  

  useEffect(() => {
    introAnimation
      .from(`.header`, {
        ...defaultAnimation,
      })
      .from(`.subtitle`, {
        ...defaultAnimation,
        delay: 1,
      });
  }, [introAnimation]);

  // useEffect(() => {
  //   gsap.to(".viewer", {
  //     ...guySipping,
  //   });
  // }, []);

  //--- ---

  return (
    <>
      <div className="center">
        <h1>Scroll Down</h1>
      </div>
      <Header />
      {/*   <section className="scene center">
        <div className="viewer">
          <h3>viewer</h3>
        </div>
      </section> */}

      {/* <div className="center">
        <main className="center">
          <h2>Feed</h2>
        </main>
      </div>

      <div className="center">
        <footer className="center">
          <h2>Footer</h2>
        </footer>
      </div> */}
    </>
  );
}
