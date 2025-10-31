document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelector(".nav-list");
  const closeBtn = document.querySelector(".close-btn");
  const menuIcon = document.querySelector(".mobile-logo");

  // Open menu
  menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    menuItems.classList.remove("active");
  });
});
