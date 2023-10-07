var altura = 100;
var pause = "no"
var point = 0
var win = "no"




setInterval(() => {
  if (pause === "no") {
    document.getElementById("bird").style.top = altura + "px";
    altura += 1.5;
  }
  document.getElementById("pontos").innerHTML = point;

  if (point > 58) {
    if (point > 58) {
      document.getElementById("bird").style.transition = "all 0.5s";
      document.getElementById("bird").style.transform = "rotate(-25deg)";
      pause = "no"
      altura = 100
      win = "sim"
      setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }, 800);
    }
  }

}, 1);

setInterval(() => {
  perda()
}, 50);


function perda() {

  var queda = +document.getElementById("bird").style.top.replace("px", "")
  var canop2 = +window.getComputedStyle(cano2).left.replace('px', '');
  var canoh2 = +window.getComputedStyle(cano2).height.replace('px', '');
  var canop1 = +window.getComputedStyle(cano1).left.replace('px', '');
  var canoh1 = +window.getComputedStyle(cano1).height.replace('px', '');

  if (queda < (canoh2 - 30) && canop2 < 55 && canop2 > 27 && win === "no") {
    window.location.reload(true);
  }

  if ((525 - queda) < (canoh1 - 75) && canop1 < 55 && canop1 > 27 && win === "no") {
    window.location.reload(true);
  }

  setTimeout(() => {
    if (canop1 < 55 && canop1 > 30 && canop2 < 55 && canop2 > 30 && win === "no") {
      setTimeout(() => {
        point++
      }, 2000);
    }
  }, 150);



  
  if (queda > 524) {
    window.location.reload(true);
  }

  if (queda < 0) {
    window.location.reload(true);
  }


}

function mudarAlturaCanos() {

  var altura1 = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
  var altura2 = Math.floor(Math.random() * (250 - 100 + 1)) + 50;


  document.getElementById("cano1").style.height = altura1 + "px";
  document.getElementById("cano2").style.height = altura2 + "px";
}

setInterval(mudarAlturaCanos, 2000);

document.addEventListener("click", function () {
  altura -= 120;
  document.getElementById("bird").style.transform = "rotate(-25deg)";
  setTimeout(() => {
    document.getElementById("bird").style.transform = "rotate(25deg)";
  }, 90);
});

document.addEventListener("keydown", function (e) {
  if ((e.key === "h" || e.key === "H")) {
    window.location.href = "escolha.html";
  }

  if ((e.key === "Enter") && pause === "no") {
    pause = "sim"
    document.getElementById("cano1").style.animation = ""
    document.getElementById("cano2").style.animation = ""
  }

  else if ((e.key === "Enter") && pause === "sim") {
    pause = "no"
    document.getElementById("cano1").style.animation = "andar 2s infinite linear"
    document.getElementById("cano2").style.animation = "andar 2s infinite linear"
  }
}
);




