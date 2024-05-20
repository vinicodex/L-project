// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navItems = document.querySelector(".nav-items");

  // Check if the elements exist
  if (hamburger && navItems) {
    hamburger.addEventListener("click", function () {
      navItems.classList.toggle("active");
    });
  } else {
    console.error("Hamburger button or nav items not found in the DOM");
  }
});
