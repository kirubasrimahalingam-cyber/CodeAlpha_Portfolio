const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

// Mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Simple scroll reveal animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});