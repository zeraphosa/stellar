// MENU BUTTON TOGGLE
const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
const headernav = document.getElementById("headernav");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("mb-menu");
  if (headernav.style.height == "92px") headernav.style.height = "100vh";
  else headernav.style.height = "92px";
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
    text: "Reliable partner. Their expertise propelled our startup to new heights.",
    user: "Emily Lawson",
    title: "Vice President",
    src: "./assets/img/user-1.png",
  },
  {
    text: "Incredible work! Exceeded expectations and boosted our online presence significantly.",
    user: "Sophia Mitchell",
    title: "Developer at Microsoft",
    src: "./assets/img/user-2.jpg",
  },
  {
    text: "Impressed by their dedication. Transformed our vision into a stunning reality.",
    user: "Alexander Bennett",
    title: "Specialist",
    src: "./assets/img/user-3.jpg",
  },
];
let x = 0;

testimonialimg.style.backgroundImage = `url('${content[0].src}')`;
testimonialtext.innerHTML = `"${content[0].text}"`;
testimonialusername.innerHTML = `${content[0].user}`;
testimonialusertitle.innerHTML = `${content[0].title}`;

setInterval(changetestimonial, 4000);
function changetestimonial(y = 1) {
  x += y;
  if (x > content.length) x = 0;
  testimonialimg.style.backgroundImage = `url('${content[x].src}')`;
  testimonialtext.innerHTML = `"${content[x].text}"`;
  testimonialusername.innerHTML = `${content[x].user}`;
  testimonialusertitle.innerHTML = `${content[x].title}`;
}

// FAQ TOGGLE
const faqcontent = document.getElementById("faqcontent");
let faqcode = "";

const faqdata = [
  {
    id: 1,
    head: "How much time does it take?",
    p: "Project durations vary based on complexity. We provide tailored estimates after discussing your specific requirements.",
  },
  {
    id: 2,
    head: "What is your class naming convention?",
    p: "Our convention follows a structured format, enhancing code readability and maintainability across projects.",
  },
  {
    id: 3,
    head: "How do you communicate?",
    p: "We prioritize clear and timely communication via email, calls, and project management tools, ensuring seamless collaboration.",
  },
  {
    id: 4,
    head: "I have a bigger project. Can you handle it?",
    p: "Absolutely! We're equipped to handle projects of all sizes, adapting our approach to meet your project's scope and needs.",
  },
];

for (let f = 0; f < faqdata.length; f++) {
  faqcode += `
      <div class="faq-item flex gap" onclick="toggle(${f})">
        <span>0${faqdata[f].id}</span>
        <div class="flex flex-col">
          <div class="flex align-center justify-between">
            <h6>${faqdata[f].head}</h6>
            <i class="toggle-icon fa-solid ${faqdata[f].expanded ? "fa-close" : "fa-plus"}"></i>
          </div>
          <p class="faqtext" style="${faqdata[f].expanded ? "display:block;" : "display:none;"}">${faqdata[f].p}</p>
        </div>
      </div>
  `;
}
function toggle(id) {
  faqdata[id].expanded = !faqdata[id].expanded;

  const iconElement = document.querySelector(`.faq-item:nth-child(${id + 1}) .toggle-icon`);
  const textElement = document.querySelector(`.faq-item:nth-child(${id + 1}) .faqtext`);

  if (faqdata[id].expanded) {
    iconElement.classList.remove("fa-plus");
    iconElement.classList.add("fa-close");
    textElement.style.display = "block";
  } else {
    iconElement.classList.remove("fa-close");
    iconElement.classList.add("fa-plus");
    textElement.style.display = "none";
  }
}

faqcontent.innerHTML = faqcode;

// PROJECTS MAPPING & FILTERING
const data = [
  {
    i: "",
    h: "Template 1",
    p: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    l: "View Portfolio",
  },
];
