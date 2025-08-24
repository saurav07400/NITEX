gsap.registerPlugin(ScrollTrigger);

let I_img = document.querySelector(".I_div img");
let line_1 = document.querySelector(".line_1");
let line_2 = document.querySelector(".line_2");
let line_3 = document.querySelector(".line_3");
let line_4 = document.querySelector(".line_4");
let word_1 = document.querySelector(".word_1");
let word_2 = document.querySelector(".word_2");
let Text = document.getElementsByClassName('headtext');
const setSmoothscroll = () => {
  // init loco
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"), // your scroll container
    smooth: true,
    multiplier: 1.2, // adjust speed
  });

  // tell ScrollTrigger to use proxy
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // update ScrollTrigger on loco update
  locoScroll.on("scroll", ScrollTrigger.update);

  // refresh both when window resizes
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
const setHelpSectionAnim = () => {
  const helptimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".help-instance",
      scroller: "main",
      start: "top 240px",
      toggleActions: "play none none reverse",
    },
  });
  helptimeline.to(
    ".help-card",
    {
      transform: "scaleY(1)",
      stagger: 0.2,
      duration: 0.2,
    },
    0
  );
  helptimeline.to(
    ".help-top",
    {
      transform: "scaleX(100%)",
      stagger: 0.2,
    },
    0.2
  );
};

setSmoothscroll();
setHelpSectionAnim();

Array.from(Text).forEach(element => {
  const el = element.children[0];
  
gsap.to(
  el,

  {
    scale: 0,
    duration: 1.4,
    scrollTrigger: {
      trigger: element,
      scroller: "main",

      toggleActions: "play none none reset",
    },
  }
);
  
})


gsap.to(I_img, {
  scale: 22,
  x: 250,
  height: 30,
  width: 70,
  transform: "skewX(0deg)",
  y: -100,
  scrollTrigger: {
    trigger: ".I_div",
    scroller: "main",
    start: "top 10%",
    end: "top -20%",
    scrub: true,
    pin: true,
  },
});

gsap.to([line_2, line_3, line_4], {
  color: "white",
  scrollTrigger: {
    trigger: line_2,
    scroller: "main",
    start: "top 30%",
    end: "top -10%",
    toggleActions: "play none none reset",
  },
});

gsap.to(word_1, {
  x: 60,
  scrollTrigger: {
    trigger: line_2,
    scroller: "main",
    start: "top 18%",
    end: "top 10%",
    toggleActions: "play none none reset", // when not give scrub then use this
  },
});
gsap.to(word_2, {
  x: -60,
  scrollTrigger: {
    trigger: line_2,
    scroller: "main",
    start: "top 18%",
    end: "top 10%",
    toggleActions: "play none none reset", // when not give scrub then use this
  },
});
