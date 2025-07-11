// Highlight current nav link based on URL
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  const filename = link.getAttribute("href");
  if (filename === currentPage) {
    link.classList.add("active");
  }
});

// Smooth scroll for anchor links (if any used in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Display alert on contact form submission (mock behavior)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! 🚀\n(Submission simulated for now)");
    form.reset();
  });
}
