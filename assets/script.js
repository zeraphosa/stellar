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
const testimonialimg = document.getElementById("testimonialimg");
const content = [
  {
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    user: "Jenny Wilson",
    title: "Vice President",
    src: "./assets/img/user-1.png",
  },
  {
    text: "Euismod faucibus turpis eu gravida mi. They understand our product and are able to add new features with a great focus.",
    user: "John Doe",
    title: "Developer at Microsoft",
    src: "./assets/img/user-2.jpg",
  },
  {
    text: "Faucibus turpis eu gravida mi. aliquam sed faucib turpisThey understand our product and are able to add.",
    user: "Daron William",
    title: "Specialist",
    src: "./assets/img/user-3.jpg",
  },
];
let x = 0;

testimonialimg.style.backgroundImage = `url('${content[0].src}')`;
testimonialtext.innerHTML = `"${content[0].text}"`;
testimonialusername.innerHTML = `${content[0].user}`;
testimonialusertitle.innerHTML = `${content[0].title}`;

setInterval(changetestimonial, 2000);
function changetestimonial(y = 1) {
  x += y;
  if (x > content.length) x = 0;
  testimonialimg.style.backgroundImage = `url('${content[x].src}')`;
  testimonialtext.innerHTML = `"${content[x].text}"`;
  testimonialusername.innerHTML = `${content[x].user}`;
  testimonialusertitle.innerHTML = `${content[x].title}`;
}
