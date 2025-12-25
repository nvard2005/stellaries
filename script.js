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
      hubObserver.disconnect(); // run once
    }
  },
  { threshold: 0.4 }
);

hubObserver.observe(hubSection);


const missionVisionItems = document.querySelectorAll(
  '.mission-vision .fade-up'
);

const missionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 300);
        missionObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.4 }
);

missionVisionItems.forEach(item => missionObserver.observe(item));
const servicesSection = document.querySelector('.services');

const servicesObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      servicesSection.classList.add('show');
      servicesObserver.disconnect();
    }
  },
  { threshold: 0.3 }
);

servicesObserver.observe(servicesSection);
const excellenceItems = document.querySelectorAll('.excellence .fade-up');

const excellenceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200); // stagger by 200ms per item
        excellenceObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.3 }
);

excellenceItems.forEach(item => excellenceObserver.observe(item));
const aboutUsItems = document.querySelectorAll('.about-us .fade-up');

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200); // stagger 200ms per element
        aboutObserver.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.3 }
);

aboutUsItems.forEach(item => aboutObserver.observe(item));
const keyProductsItems = document.querySelectorAll('.key-products .fade-up');

const productsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show'); // triggers fade-up AND underline
        }, index * 200);
        productsObserver.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.3 }
);

keyProductsItems.forEach(item => productsObserver.observe(item));
 // Select all elements with fade-up in our-team section
const teamItems = document.querySelectorAll('.our-team .fade-up');

const teamObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200); // stagger animation by 200ms
        teamObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.3 }
);

teamItems.forEach(item => teamObserver.observe(item));
// H2 + Left + Right fade-up observer
const serviceSection = document.querySelector('.servicess');
const serviceItems = document.querySelectorAll('.servicess .fade-up');
const serviceH3s = document.querySelectorAll('.our-service-info h3');

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');

          // For H3 underline
          if(entry.target.tagName === "H3"){
            entry.target.classList.add('show');
          }
        }, index * 200); // stagger
        serviceObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

serviceItems.forEach(item => serviceObserver.observe(item));
serviceH3s.forEach(h3 => serviceObserver.observe(h3));
