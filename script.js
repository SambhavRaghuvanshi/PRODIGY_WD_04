
// Reveal sections with delay on load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('visible');
    }, 500 + index * 300);
  });
});

// Scroll to top functionality
const topBtn = document.getElementById('backToTop');
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Framer Motion-like Scroll Animations
const animatedElements = document.querySelectorAll('.project-card, .card, .timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));


document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
