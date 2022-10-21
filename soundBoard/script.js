const sounds = ["whiteDress", "baptized"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    console.log("imagine the sounds");
  });
  document.body.appendChild(btn);
});
