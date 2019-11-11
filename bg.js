const body = document.querySelector("body");

const IMG_NUM = 3;

function backImg(imgNum) {
  const img = new Image();
  img.src = `BG${imgNum}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function genRand() {
  const num = Math.floor(Math.random() * IMG_NUM) + 1;
  return num;
}

function init() {
  const randomNumber = genRand();
  backImg(randomNumber);
}

init();
