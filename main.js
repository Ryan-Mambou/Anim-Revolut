import gsap from "gsap";

let animate = document.querySelector(".animate")
let scrollToTop = document.querySelector(".scroll-to-top")

let reveal = document.querySelector('reveal')

animate.addEventListener('click', (e) => {
  gsap.to('.box', {
    width: '90vw',
    height: '100vh', 
    scale: 1, 
    borderRadius: '0px', zIndex: 5 })
  gsap.to('.middle-card', {
    transform: "scale(0.7) translateX(-72%)",
    borderRadius: '2.5rem',
    border: "none",
  })
  gsap.to('.reveal', {
    opacity: 1,
    zIndex: 10
  })
  gsap.to('.reveal-text', {
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


