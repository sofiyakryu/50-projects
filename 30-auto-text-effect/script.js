const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "And just like that ...";

let index = 1;

let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  //to start over the type out effect - remove if you want to stop it
  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
