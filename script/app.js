const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // testing technique to check if classes are present to act on
  //   console.log(links.classList);
  //   console.log(links.classList.contains("random"));
  //   console.log(links.classList.contains("links"));
  // to toggle option 1---------------------
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }---------------------------
  //   to toggle option 2---------------
  links.classList.toggle("show-links");
});
