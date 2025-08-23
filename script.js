gsap.registerPlugin(ScrollTrigger);



gsap.to('.headtext div',
  
    {
     scale:0,
         duration:3.0,
         scrollTrigger: {
      trigger: ".headtext",
      markers: true,
      toggleActions: "play none none reset",
    }
    }
)
const setHelpSectionAnim = () => {
  const helptimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".help-instance",
      markers: true,
      toggleActions: "play none none reset",
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
