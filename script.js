
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = navLinks.querySelectorAll("p, button");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link or button is clicked
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  });

