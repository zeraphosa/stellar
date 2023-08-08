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

// TESTIMONIAL SLIDER
const testimonialtext = document.getElementById("testimonialtext");
const testimonialusername = document.getElementById("testimonialusername");
const testimonialusertitle = document.getElementById("testimonialusertitle");
const content = [
  {
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    user: "Jenny Wilson",
    title: "Vice President",
  },
  {
    text: "Euismod faucibus turpis eu gravida mi. They understand our product and are able to add new features with a great focus.",
    user: "John Doe",
    title: "Developer at Microsoft",
  },
  {
    text: "Faucibus turpis eu gravida mi. aliquam sed faucib turpisThey understand our product and are able to add.",
    user: "Daron William",
    title: "Specialist",
  },
];
let x = 0;
setInterval(changetestimonial, 2000);
function changetestimonial(y = 1) {
  x += y;
  if (x > content.length) x = 0;
  testimonialtext.innerHTML = `"${content[x].text}"`;
  testimonialusername.innerHTML = `${content[x].user}`;
  testimonialusertitle.innerHTML = `${content[x].title}`;
}
