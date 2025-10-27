const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ===== SCROLL REVEAL ANIMATIONS =====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 200 });
ScrollReveal().reveal(".bundle__card", {
  ...scrollRevealOption,
  interval: 200,
});
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 200 });

// ===== SWIPER (REVIEW SLIDER) =====
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000, // 3 sec auto slide
    disableOnInteraction: false,
  },
  speed: 800,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===== INFINITE SCROLLING BANNER =====
const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});