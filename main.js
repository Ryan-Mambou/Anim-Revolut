import gsap from "gsap";

let animate = document.querySelector(".animate")
let scrollToTop = document.querySelector(".scroll-to-top")

animate.addEventListener('click', (e) => {
  gsap.to('.up', {
    opacity: 0,
    transform: "translateY(-50%)"
  })
  gsap.to('.box', {
    width: '90vw',
    height: '100vh', 
    scale: 1, 
    borderRadius: '0px', zIndex: 5 })
  gsap.to('.middle-card', {
    transform: "scale(0.7) translateX(-72%)",
    borderRadius: '2.5rem',
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  })
  gsap.to('.reveal', {
    opacity: 1,
    zIndex: 10
  })
  gsap.to('.reveal-text', {
    transform: "translateY(-20px) scale(1.0)",
    opacity: 1,
    zIndex: 10
  })
  gsap.to('.reveal-slider', {
    transform: "translateY(-50px)",
    zIndex: 10
  })
  gsap.to('.secondary-one', {
    borderRadius: '1110px',
    transform: "translateX(96%) scale(0.6)",
    opacity: 1
  })
  gsap.to('.secondary-two', {
    borderRadius: '1110px',
    transform: "translateX(-96%) scale(0.6)",
    opacity: 1
  })
})


scrollToTop.addEventListener('click', (e) => {
  gsap.to('.up', {
    opacity: 1,
    transform: "translateY(0)"
  })
  gsap.to('.box', {
    width: 'calc(48vh)',
    height: 'calc(70vh)', 
    scale: 1, 
    borderTopRightRadius: "2rem",
    borderTopLeftRadius: "2rem",
    zIndex: -20 })
  gsap.to('.reveal', {
    opacity: 0,
    zIndex: -1
  })
  gsap.to('.middle-card', {
    transform: "scale(1) translateX(-50%)",
    borderTop: "3.5px solid #BBC4CD",
    borderLeft: "3.5px solid #BBC4CD",
    borderRight: "3.5px solid #BBC4CD",
    borderRadius: '2.5rem',
    zIndex: 5,
    opacity: 1
  })
  gsap.to('.reveal-text', {
    transform: "translateY(0) scale(0.75)",
    opacity: 1,
    zIndex: 10
  })
  gsap.to('.reveal-slider', {
    transform: "translateY(0)",
    // zIndex: -1
  })
  gsap.to('.secondary-one', {
    borderRadius: '1110px',
    transform: "translateX(0%) scale(1)",
    opacity: 0
  })
  gsap.to('.secondary-two', {
    borderRadius: '1110px',
    transform: "translateX(0%) scale(1)",
    opacity: 0
  })
})

