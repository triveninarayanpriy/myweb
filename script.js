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

// Reveal-on-scroll animation
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

// Set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
