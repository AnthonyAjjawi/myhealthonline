document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuIcon = document.querySelector(".mobile-logo");

  // Open menu
  menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    menuItems.classList.remove("active");
    document.body.classList.toggle("no-scroll");
  });
});
