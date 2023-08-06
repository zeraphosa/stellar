// MENU BUTTON TOGGLE
const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("mb-menu");
});

// PROJECT OVERLAY SIZE
const projectoverlay = document.getElementById("projectoverlay");
function changeProjectOverlay() {
  projectoverlay.classList.toggle("project-overlay-mob", window.innerWidth <= 768);
}
changeProjectOverlay();
window.addEventListener("resize", changeProjectOverlay);
