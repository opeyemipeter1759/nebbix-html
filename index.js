const tG = document.getElementById("toggleMenu");
const navUl = document.getElementById("navUl");

tG.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
