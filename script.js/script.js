const navbarTogglerBtn = document.getElementById("navbar-toggler-btn");
  const navbarCollapse = document.getElementById("navbarNav");

  navbarTogglerBtn.addEventListener("click", () => {
    // Toggle the class 'collapse' to show/hide the menu
    navbarCollapse.classList.toggle("collapse");
  });