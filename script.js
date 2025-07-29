gsap.registerPlugin(ScrollTrigger);

function customCursor() {
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

  tl.from(
    ".centerPart1 h1",
    {
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
    delay: 0.7,
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

function section2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -90%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".line1.left",
    {
      x: -200,
      duration: 1,
      rotate: -45,
      opacity: 0,
    },
    "anim1"
  );

  tl2.from(
    ".line1.right",
    {
      x: 200,
      duration: 1,
      rotate: 45,
      opacity: 0,
    },
    "anim1"
  );

  tl2.from(
    ".line2.left",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "anim2"
  );

  tl2.from(
    ".line2.right",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "anim2"
  );

  tl2.from(
    ".line3.left",
    {
      x: -300,
      duration: 1,
      rotate: 45,
      opacity: 0,
    },
    "anim3"
  );

  tl2.from(
    ".line3.right",
    {
      x: 300,
      duration: 1,
      rotate: -45,
      opacity: 0,
    },
    "anim3"
  );
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
    ease: "power2.out",
  });
}

document.querySelectorAll(".accordion-item").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%", // trigger when item is ~85% into viewport
      toggleActions: "play none none none",
      scrub: 2,
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
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

function section4Animation() {
  // Set visible state before scroll affects it
  gsap.set(".section4 .services", { opacity: 1, y: 0 });

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      // markers: true,
    },
  });

  tl4.from(".section4 .services", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
}

function footerAnimation() {
  var tlF = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "footer",
      start: "top 90%",
      end: "top 60%",
    },
  });

  tlF.from("footer #first", {
    opacity: 0,
    duration: 0.8,
    x: "-50",
    ease: "linear",
  });

  tlF.from("footer #second", {
    opacity: 0,
    duration: 0.8,
    x: "-100",
    ease: "linear",
  });

  tlF.from("footer #third", {
    opacity: 0,
    duration: 0.8,
    x: "-200",
    ease: "linear",
  });
}

customCursor();
section1Animation();
section2Animation();
section3Animation();
section4Animation();
footerAnimation();

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change button icon
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="ri-sun-line"></i>'
    : '<i class="ri-moon-fill"></i>';

  gsap.from("#darkModeToggle i", {
    opacity: 0,
    duration: 0.5,
    rotate: 45,
    ease: "power2.out",
  });

  if (document.body.classList.contains("dark-mode")) {
    document.querySelector(".cursor img").src = "./arrowWhite.png";
  } else {
    document.querySelector(".cursor img").src = "./arrow.png";
  }
});

document.getElementById("scrollToServices").addEventListener("click", () => {
  const target = document.getElementById("section2-services");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });

    // Delay refresh to allow smooth scroll to finish (~1s)
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // adjust this if your scroll is faster/slower
  }
});
