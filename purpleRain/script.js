function createHeart() {
  const HEART = document.createElement("div");
  HEART.classList.add("heart");
  HEART.innerText = "💜";
  document.body.appendChild(HEART);
  HEART.style.left = Math.random() * 100 + "vw";
  HEART.style.animationDuration = Math.random() * 2 + 3 + "s";
  setTimeout(() => {
    HEART.remove();
  }, 5000);
}

setInterval(createHeart, 300);
