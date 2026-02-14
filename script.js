// Mobile navigation toggle
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

menuBtn.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

// Close the menu after clicking a link (mobile)
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
  });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#' && this.getAttribute('href') !== '#home') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Reveal-on-scroll animation with enhanced timing
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the reveal animations
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

// Parallax effect on hero section
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const scrollPosition = window.scrollY;
    heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

// Active navigation link highlighting
const observeNavLinks = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('section, main').forEach(section => {
  observeNavLinks.observe(section);
});

// Add active state styles dynamically
const style = document.createElement('style');
style.textContent = `.nav a.active { color: var(--accent); font-weight: 700; }`;
document.head.appendChild(style);

// Set current year in the footer
if (document.getElementById("year")) {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Add ripple effect on button click
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Skill cards interaction
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
  });
});
