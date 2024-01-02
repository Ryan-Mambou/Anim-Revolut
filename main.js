import gsap from "gsap";

let animate = document.querySelector(".animate")
let scrollToTop = document.querySelector(".scroll-to-top")


animate.addEventListener('click', (e) => {
  console.log('click')
  gsap.to('.box', {
    width: '100%',
    height: '100vh', 
    scale: 1, 
    borderRadius: '0px', zIndex: 5 })
  gsap.to('.middle-card', {
    transform: "scale(0.7)",
    borderRadius: '2.5rem',
    border: "none"
  })
  gsap.to('reveal', {
    opacity: 1
  })
  gsap.to('reveal-text', {
    opacity: 1
  })
  gsap.to('secondary-one', {
    duration: 1,
    borderRadius: '1110px',
    backgroundColor: 'blue',
    transform: "translateX('20%') scale(0.6)"
  })
  gsap.to('secondary-two', {
    duration: 1,
    borderRadius: '1110px',
    backgroundColor: 'blue',
    transform: "translateX('20%') scale(0.6)"
  })
})


