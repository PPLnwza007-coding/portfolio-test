const text = [
  "I learn by breaking systems",
  "Linux is my playground",
  "Code > Certificates",
  "Curiosity drives me",
  "Building real skills"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  if (!typing) return;

  if (!deleting && j <= text[i].length) {
    current = text[i].slice(0, j++);
  }

  if (deleting && j >= 0) {
    current = text[i].slice(0, j--);
  }

  typing.textContent = current;

  if (j === text[i].length + 1) deleting = true;
  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }
}

setInterval(typeEffect, 80);

const btn = document.getElementById("helloBtn");

btn.addEventListener("click", () => {
  alert("Connection request acknowledged.");
});
