gsap.registerPlugin(ScrollTrigger);

function customCursor(){
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: `${e.clientX}px`,
    y: `${e.clientY}px`,
    ease: "linear",
    duration: 0.2,
  });
});
}


function section1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    y: -30,
    opacity: 0,
    // delay: 1,
    duration: 0.8,
    stagger: 0.2,
  });

  tl.from(".centerPart1 h1",{
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".centerPart1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".centerPart1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".centerPart2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 300,
    },
    "-=0.5"
  );

  tl.from(".section1Bottom img", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    duration: 0.6,
  });

  tl.from(".marque",{
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    },
    "-=1"
  );
}



function section2Animation() {
  var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".section2",
    scroller: "body",
    start: "top 50%",
    end: "top -90%",
    scrub:2,
  }
});
 
  tl2.from(".services",{
  y: 30,
  opacity: 0,
  duration: 0.5,
})

  tl2.from(".line1.left",{
    x:-200,
    duration: 1,
    rotate: -45,
    opacity: 0,
  },"anim1")

   tl2.from(".line1.right",{
    x:200,
    duration: 1,
    rotate: 45,
    opacity: 0,
  },"anim1")


    tl2.from(".line2.left",{
    x:-300,
    duration: 1,
    opacity: 0,
  },"anim2")

   tl2.from(".line2.right",{
    x:300,
    duration: 1,
    opacity: 0,
  },"anim2")


    tl2.from(".line3.left",{
    x:-300,
    duration: 1,
    rotate: 45,
    opacity: 0,
  },"anim3")

   tl2.from(".line3.right",{
    x:300,
    duration: 1,
    rotate: -45,
    opacity: 0,
  },"anim3")
}


function section3Animation() {
  // Set visible state before scroll affects it
  gsap.set(".section3 .services", { opacity: 1, y: 0 });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
    },
  });

  tl3.from(".section3 .services", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  document.querySelectorAll(".accordion-item").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%", // trigger when item is ~85% into viewport
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
});
}

function section4Animation() {
  // Set visible state before scroll affects it
  gsap.set(".section4 .services", { opacity: 1, y: 0 });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      // markers: true,
    },
  });

  tl3.from(".section4 .services", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });
}

const activeItem = document.querySelector(".accordion-item.active");
if (activeItem) {
  activeItem.style.backgroundColor = "#b9ff66"; //during first load first card opened and has the backgrounfd color
}

const items = document.querySelectorAll(".accordion-item"); // items is nodelist

items.forEach((item) => {
  const btn = item.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all other items and reset styles
    items.forEach((i) => {
      i.classList.remove("active");
      i.style.backgroundColor = ""; // reset to original
      const otherBtn = i.querySelector(".toggle-btn");
      if (otherBtn) otherBtn.textContent = "+";
    });

    // If this was not active, activate it and turn green
    if (!isActive) {
      item.classList.add("active");
      item.style.backgroundColor = "#b9ff66";
      btn.textContent = "−";
    }
  });
});


customCursor();
section1Animation();
section2Animation();
section3Animation();
section4Animation();