
gsap.registerPlugin(TextPlugin);

const timeline = gsap.timeline({ defaults: { duration: .75 }})
timeline
  .from('header.social', { y: '-100%', ease: 'bounce' })

    // .to('.message', {
    //     duration: 4, 
    //     text: {
    //     value: "Ok then, glad you are here! To begin with, click the button below",
    //     newClass: "new-message",
    //     type: "diff",
    //     delimiter: ""
    //     },
    //     ease: "bounce"
    // })


//   .from('.link', { opacity: 0, stagger: .5 })

//   .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
//   .from('.left', { x: '-100%' }, '<.5')

    // .fromTo('.link-1', { opacity: 0, scale: 0, rotation: 0 }, { opacity: 1, scale: 1, rotation: 0 })
    // .fromTo('.link-1', { opacity: 0, scale: 0, y: '-100%' }, { opacity: 1, scale: 1, y: 0, ease: 'bounce' })
    // .fromTo('.link-2', { opacity: 0, scale: 0, rotation: 0 }, { opacity: 1, scale: 1, rotation: 0 })
    // .fromTo('.link-2', { opacity: 0, scale: 0, x: '-100vw' }, { opacity: 1, scale: 1, x: 0 })
    // .fromTo('.link-3', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

    // .fromTo('.middle', { opacity: 0, scale: 0, y: '-100%' }, 
    //                     { opacity: 1, scale: .5, y: 400, ease: 'bounce' },
    //                     '<.25')
                        
    // .to('.footer', {  y: 0, ease: 'elastic' })

  // .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })
//   .fromTo('.button-view', { opacity: 0, scale: 0, rotation: 0 }, { opacity: 1, scale: 1, rotation: 0 })
//   .fromTo('.button-go', { opacity: 0, scale: 0, rotation: 0 }, { opacity: 1, scale: 1, rotation: 0 })

  

const buttonGo = document.querySelector('.button-go')
buttonGo.addEventListener('click', () => {
  timeline.timeScale(2)
  timeline.reverse()
  // alert("Good Bye!")
})