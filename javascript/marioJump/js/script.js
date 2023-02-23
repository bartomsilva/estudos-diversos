const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const zumbie = document.querySelector(".zumbie");
const htmll = document.querySelector("*");

var pontos = 0;
var btn = document.querySelector("#refresh");

var largura = +window.getComputedStyle(htmll).width.replace("px", "");

var pulo = new Audio("/som/pulo.mp3");
var perdeu = new Audio("/som/fail.mp3");
var musicafundo = new Audio("/som/somfundo.mp3");

const jump = () => {
  mario.classList.add("jump");
  pulo.play();
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 800);
};

const loop = setInterval(() => {
  musicafundo.volume = 0.7;
  musicafundo.play();
  const pipePosition = pipe.offsetLeft;
  const zumbPosition = zumbie.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (
    (pipePosition <= 120 || zumbPosition <= 120) &&
    pipePosition > 0 &&
    zumbPosition > 0 &&
    marioPosition < 80
  ) {
    perdeu.volume = 0.4;
    perdeu.play();
    pulo = "";
    pipe.style.animation = "nome";
    pipe.style.left = `${pipePosition}px`;
    zumbie.style.animation = "nome";
    zumbie.style.left = `${zumbPosition}px`;
    mario.style.animation = "nome";
    mario.src = "/imagens/game-over.png";
    mario.style.bottom = `${marioPosition}px`;
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    clouds.style.animation = "nome";
    clouds.style.left = `${cloudsPosition}px`;

    clearInterval(loop);

    btn.addEventListener("click", function () {
      location.reload();
    });
  } else {
    pontos++;
    document.getElementById("demo").innerHTML = pontos;

    if (largura <= 640) {
      htmll.style.zoom = "50%";
    } else {
      htmll.style.zoom = "100%";
    }
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("onClick");
