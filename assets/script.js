const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("mb-menu");
});
