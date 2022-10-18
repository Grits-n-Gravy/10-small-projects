const btn = document.getElementById("btn");

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
btn.addEventListener("click", () => {
  let color = (document.body.style.background = randomBg());
  btn.style.color = color;
});
