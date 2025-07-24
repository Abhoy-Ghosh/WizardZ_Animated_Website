gsap.registerPlugin(ScrollTrigger);

function section1Animation (){
var tl = gsap.timeline()

tl.from("nav h1,nav h4,nav button",{
    y: -30,
    opacity: 0, 
    // delay: 1,
    duration: 0.8,
    stagger: 0.2,
})

tl.from(".centerPart1 h1",{
    x: -200,
    opacity: 0, 
    duration: 0.5
},"*=0.3")

tl.from(".centerPart1 p",{
    x: -100,
    opacity: 0, 
    duration: 0.4,
})

tl.from(".centerPart1 button",{
    opacity: 0, 
    duration: 0.4,
})

tl.from(".centerPart2 img",{
    opacity: 0,
    duration: 0.5,
    x:300, 
},"-=0.5")

tl.from(".section1Bottom img",{
    y: 30,
    opacity: 0,
    duration:0.5,
    stagger:0.15,
    duration:0.6,
})

tl.from(".marque",{
    xPercent: -50, 
    repeat: -1,
    duration: 12,
    ease: "linear",
},"-=1")

}

section1Animation();

