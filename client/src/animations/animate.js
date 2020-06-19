gsap.registerPlugin(ScrollTrigger);

  let contentAnimationDefault = {
    duration: 0.1,
    opacity: 0,
    yPercent: -150,
    xPercent: randomNumberBetween(-100, 100),
    ease: "back",
    // stagger: {
    //   each: 0.1,
    //   from: "random",
    //   ease: "back",
    // },
    // scrollTrigger: {
    //   trigger: ".header",
    //   start: `top top`,
    //   end: `+=4000px`,
    //   scrub: true,
    //   pin: true,
    //   markers: true,
    // },
  };

  let tl = gsap.timeline();
  let subtitleTl = gsap.timeline();
  let titleTl = gsap.timeline();

  //--- ---