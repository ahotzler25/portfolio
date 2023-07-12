// Add interactivity for the active tab in the header
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});

// Add interactivity for hovering over tabs
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.classList.add("hover");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("hover");
  });
});

// Add interactivity for hovering over project screenshots
const projectScreenshots = document.querySelectorAll(".project img");

projectScreenshots.forEach(screenshot => {
  screenshot.addEventListener("mouseover", () => {
    screenshot.classList.add("enlarge");
  });

  screenshot.addEventListener("mouseout", () => {
    screenshot.classList.remove("enlarge");
  });
});
