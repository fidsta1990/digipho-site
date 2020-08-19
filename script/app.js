const menu = document.querySelector(".menu-list");
const toggleDigi = document.getElementById("toggle-btn");
const toggleMenu = document.getElementById("toggle-menu");

toggleMenu.addEventListener("click", () => {
  if (toggleMenu) {
    menu.style.display = `flex`;
  } else {
    menu.style.display = `none`;
  }
});
