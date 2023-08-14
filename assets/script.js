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
document.addEventListener("DOMContentLoaded", () => {
  const faqcontent = document.getElementById("faqcontent");
  const faqitem = document.getElementById("faqitem");
  const faqtext = document.getElementById("faqtext");
  let faqcode = "";
  const faqdata = [
    {
      id: 1,
      head: "How much time does it take?",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      head: "What is your class naming convention?",
      p: "22 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      head: "How do you communicate?",
      p: "33 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      head: "I have a bigger project. Can you handle it?",
      p: "44 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      head: "What is your class naming convention?",
      p: "55 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  for (let f = 0; f < faqdata.length; f++) {
    faqcode += `
      <div id="faqitem" class="faq-item flex gap">
        <span>0${faqdata[f].id}</span>
        <div class="flex flex-col">
          <div class="flex align-center justify-between">
            <h6>${faqdata[f].head}</h6>
            <i class="fa-solid fa-plus"></i>
          </div>
          <p id="faqtext"></p>
        </div>
      </div>
  `;
    faqitem.addEventListener("toggle", () => {
      
    });
  }
  faqcontent.innerHTML = faqcode;

  const faqtext = document.getElementById("faqtext");
  faqitem.addEventListener("click", () => {
    faqtext.innerHTML = "";
  });
});
