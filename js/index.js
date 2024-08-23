var backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");
  const unitSections = document.querySelectorAll(".fade-in-units");

  const options = {
    root: null, // relative to the viewport
    threshold: 0.15, // trigger when 15% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-faded");
        observer.unobserve(entry.target); // Stop observing after visible
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
  unitSections.forEach((unitSection) => {
    observer.observe(unitSection);
  });
});
