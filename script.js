/* ===============================
   DUBAI HUB: line + heading
================================ */

const hubSection = document.querySelector('.hub-features');
const hubLine = document.querySelector('.hub-line');
const heading = document.querySelector('.dubai-hub');

const hubObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      hubLine.classList.add('draw');
      heading.classList.add('show');
    } else {
      hubLine.classList.remove('draw');
      heading.classList.remove('show');
    }
  },
  { threshold: 0.4 }
);

if (hubSection) hubObserver.observe(hubSection);


/* ===============================
   MISSION / VISION
================================ */

const missionVisionItems = document.querySelectorAll('.mission-vision .fade-up');

const missionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 300}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.4 }
);

missionVisionItems.forEach(item => missionObserver.observe(item));


/* ===============================
   SERVICES SECTION
================================ */

const servicesSection = document.querySelector('.services');

const servicesObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      servicesSection.classList.add('show');
    } else {
      servicesSection.classList.remove('show');
    }
  },
  { threshold: 0.3 }
);

if (servicesSection) servicesObserver.observe(servicesSection);


/* ===============================
   EXCELLENCE
================================ */

const excellenceItems = document.querySelectorAll('.excellence .fade-up');

const excellenceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 200}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.3 }
);

excellenceItems.forEach(item => excellenceObserver.observe(item));


/* ===============================
   ABOUT US
================================ */

const aboutUsItems = document.querySelectorAll('.about-us .fade-up');

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 200}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.3 }
);

aboutUsItems.forEach(item => aboutObserver.observe(item));


/* ===============================
   KEY PRODUCTS
================================ */

const keyProductsItems = document.querySelectorAll('.key-products .fade-up');

const productsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 200}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.3 }
);

keyProductsItems.forEach(item => productsObserver.observe(item));


/* ===============================
   OUR TEAM
================================ */

const teamItems = document.querySelectorAll('.our-team .fade-up');

const teamObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 200}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.3 }
);

teamItems.forEach(item => teamObserver.observe(item));


/* ===============================
   SERVICES (H3 + LEFT / RIGHT)
================================ */

const serviceItems = document.querySelectorAll('.servicess .fade-up');
const serviceH3s = document.querySelectorAll('.our-service-info h3');

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      entry.target.style.transitionDelay = `${index * 200}ms`;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.style.transitionDelay = '0ms';
      }
    });
  },
  { threshold: 0.3 }
);

[...serviceItems, ...serviceH3s].forEach(el =>
  serviceObserver.observe(el)
);


/* ===============================
   HEADER COLOR CHANGE
================================ */

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
