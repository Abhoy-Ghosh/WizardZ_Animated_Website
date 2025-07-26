gsap.registerPlugin(ScrollTrigger);

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

  tl.from(
    ".marque",
    {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    },
    "-=1"
  );


}

section1Animation();

document.querySelectorAll(".accordion-item").forEach(item => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%", // trigger when item is ~85% into viewport
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });
});

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

// const cursor = document.querySelector(".cursor") 