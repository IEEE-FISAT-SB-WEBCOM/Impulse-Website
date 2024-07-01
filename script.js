document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // GSAP animations using ScrollTrigger
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: -200,
      ease: "power2.inOut",
    });
  
    gsap.to(".speakerlist", {
      scrollTrigger: {
        trigger: ".speakerlist",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: -100,
      ease: "power2.inOut",
    });
  
    gsap.to(".shops", {
      scrollTrigger: {
        trigger: ".shops",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: -50,
      ease: "power2.inOut",
    });
  
    gsap.to(".price-cards", {
      scrollTrigger: {
        trigger: ".price-cards",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: -50,
      ease: "power2.inOut",
    });
  
    // gsap.to(".footer", {
    //   scrollTrigger: {
    //     trigger: ".footer",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true
    //   },
    //   y: -100,
    //   ease: "power2.inOut"
    // });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuIcons = document.querySelectorAll(".toggle-menu");
    const closeMenuIcon = document.querySelector(".close-menu");
    const openMenu = document.querySelector(".open-menu");
  
    toggleMenuIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        if (openMenu.classList.contains("show")) {
          openMenu.classList.remove("show");
          setTimeout(() => {
            openMenu.style.visibility = "hidden";
            openMenu.style.opacity = "0";
          }, 500);
        } else {
          openMenu.style.visibility = "visible";
          openMenu.style.opacity = "1";
          setTimeout(() => {
            openMenu.classList.add("show");
          }, 0);
        }
      });
    });
  
    closeMenuIcon.addEventListener("click", function () {
      if (openMenu.classList.contains("show")) {
        openMenu.classList.remove("show");
        setTimeout(() => {
          openMenu.style.visibility = "hidden";
          openMenu.style.opacity = "0";
        }, 500);
      }
    });
  });
  