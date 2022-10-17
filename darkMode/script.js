const toggle = document.getElementById("toggle");
const h1 = document.getElementById("h1");
const p = document.getElementsByClassName("p");

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});
