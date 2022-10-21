const text = "remember those LED belts from the early 2000's?";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, text);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);

console.log(text[0]);
