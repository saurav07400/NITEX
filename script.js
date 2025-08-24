gsap.registerPlugin(ScrollTrigger);

let I_img = document.querySelector(".I_div img");
let line_1 = document.querySelector(".line_1");
let line_2 = document.querySelector(".line_2");
let line_3 = document.querySelector(".line_3");
let line_4 = document.querySelector(".line_4");
let word_1 = document.querySelector(".word_1");
let word_2 = document.querySelector(".word_2");



gsap.to('.headtext div',
  
    {
     scale:0,
         duration:1.5,
         scrollTrigger: {
      trigger: ".headtext",
      
      toggleActions: "play none none reset",
    }
    }
)
const setHelpSectionAnim = () => {
  const helptimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".help-instance",
      start:"top 100px",
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
  helptimeline.to('.help-top',{
    transform: "scaleX(100%)",
    stagger:0.2
  },0.2)
};

setHelpSectionAnim();

gsap.to(I_img, {
    scale: 22,
    x: 250,
    height: 30,
    width: 70,
    transform: "skewX(0deg)",
    y: -100,
    scrollTrigger: {
        trigger: ".I_div",
        scroller: "body",
        start: "top 10%",
        end: "top -20%",
        scrub: true,
        pin: true,
    }
});

gsap.to([line_2, line_3, line_4], {
    color: "white",
    easing : "none",
    scrollTrigger: {
        trigger: line_2,
        scroller: "body",
        start: "top 30%",
        markers:true,
        end: "top -10%",
        toggleActions: "play none none reset",
    }
});

gsap.to(word_1, {
    x : 60,
    easing : "none",
    scrollTrigger: {
        trigger: line_2,
        scroller: "body",
        start: "top 18%",
        end: "top 10%",
        toggleActions: "play none none reset", // when not give scrub then use this 
    }
});
gsap.to(word_2, {
    x : -60,
    easing : "none",
    scrollTrigger: {
        trigger: line_2,
        scroller: "body",
        start: "top 18%",
        end: "top 10%",
        toggleActions: "play none none reset", // when not give scrub then use this 
    }
});
