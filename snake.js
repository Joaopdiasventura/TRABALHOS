const canvas = document.getElementById("jogo");
const ctx = canvas.getContext('2d');
canvas.width = 300
canvas.height = 300
let largura = canvas.width;
let altura = canvas.height;
let size = 10
let square = largura / size
let xc = 150;
let yc = 150;
let direcao = "u"
let cobra = [{ x: canvas.width / 2 , y: canvas.height / 2 }];
let fruta = { x: 150, y: 60 };
let maximo = 3;

function drawborder() {
  ctx.fillStyle = "gray"
  for (let i = 1; i < largura; i++) {
    ctx.fillRect(30 * i, 0, 1, largura)
  }
  for (let i = 1; i < altura / 2; i++) {

    ctx.fillRect(0, 30 * i, altura * 2, 1)

  }
  ctx.strokeRect(0, 0, largura, altura)
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, largura, altura);
}

jogo()

function limparCanvas() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawborder();

}

function jogo() {
  limite()
  vitoria()
  document.getElementById("contador").innerHTML = cobra.length - 1
  requestAnimationFrame(jogo)
  largura = canvas.width
  altura = canvas.height;

}

 

function desenharcobra() {
  let startColor = [0, 255, 0];  
  let endColor = [0, 0, 255];    
  ctx.fillStyle = `rgb(0, 255, 0)`;
  ctx.fillRect(cobra[0].x + 0.5, cobra[0].y + 0.5, 30, 30);
  for (let i = 1; i < cobra.length; i++) {
    let progresso = i / (cobra.length - 1);  
    let color = interpolateColor(startColor, endColor, progresso);
    
    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(cobra[i].x + 0.5, cobra[i].y + 0.5, 30, 30);
    ctx.strokeStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.strokeRect(cobra[i].x + 0.5, cobra[i].y + 0.5, 30, 30);
  }
  ctx.strokeStyle = `#FFFFFF`;
}

function interpolateColor(startColor, endColor, progress) {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color[i] = Math.round(startColor[i] * (1 - progress) + endColor[i] * progress);
  }
  return color;
}

function mover() {

    if (direcao === "up") {
      const novaPosicao = { x: cobra[0].x, y: cobra[0].y - 30};
      cobra.unshift(novaPosicao);
      cobra.pop();
    }

    if (direcao === "down") {
      const novaPosicao = { x: cobra[0].x, y: cobra[0].y + 30  };
      cobra.unshift(novaPosicao);
      cobra.pop();
    }

    if (direcao === "left") {
      const novaPosicao = { y: cobra[0].y, x: cobra[0].x - 30 };
      cobra.unshift(novaPosicao);
      cobra.pop();

    }

    if (direcao === "right") {
      const novaPosicao = { y: cobra[0].y, x: cobra[0].x + 30 };
      cobra.unshift(novaPosicao);
      cobra.pop();
    }

    for (let i = 1; i < cobra.length; i++) {
      if (cobra[i].x === cobra[0].x && cobra[i].y === cobra[0].y) {
        perda()
      }
    }

  draw();

}

setInterval(mover, 100);

document.addEventListener("keydown", function (e) {

  if ((e.key === "ArrowUp" || e.key === "w" || e.key === "W") && (direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "u")) {

      const novaPosicao = { x: cobra[0].x, y: cobra[0].y - 30 };
      cobra.unshift(novaPosicao);
      cobra.pop();
      direcao = "up";

  }

  if ((e.key === "ArrowDown" || e.key === "s" || e.key === "S") && (direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "d") && direcao !== "up") {

    const novaPosicao = { x: cobra[0].x, y: cobra[0].y + 30 };
    cobra.unshift(novaPosicao);
    cobra.pop();
    direcao = "down";

  }

  if ((e.key === "ArrowLeft" || e.key === "a" || e.key === "A") && (direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "l")) {

      const novaPosicao = { x: cobra[0].x - 30, y: cobra[0].y };
      cobra.unshift(novaPosicao);
      cobra.pop();
      direcao = "left";

  }

  if ((e.key === "ArrowRight" || e.key === "d" || e.key === "D") && (direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "r")) {

      const novaPosicao = { x: cobra[0].x + 30, y: cobra[0].y };
      cobra.unshift(novaPosicao);
      cobra.pop();
      direcao = "right";

  }

 

  if (e.key === "Enter" && direcao === "up") {
    direcao = "u"
  }

  if (e.key === "Enter" && direcao === "down") {
    direcao = "d"
  }

  if (e.key === "Enter" && direcao === "left") {
    direcao = "l"
  }

  if (e.key === "Enter" && direcao === "right") {
    direcao = "r"
  }

  if ((e.key === "h" || e.key === "H")) {
    window.location.href = "escolha.html";
  }

  if ((e.key === "v" || e.key === "V")) {
    voltar()
  }
}
);

function draw() {
  limparCanvas()
  desenharcobra()
  desenharfruta()
}

 

 

 

function limite() {
  if (cobra[0].x == fruta.x && cobra[0].y == fruta.y) {
    criarfruta()
    aumentar()
    recorde()
  }

  if (cobra[1]) {
    if (cobra[1].x == fruta.x && cobra[1].y == fruta.y) {
      criarfruta()
      aumentar()
      recorde()
    }
  }

  if (cobra[0].x > largura - 30) {
    perda()
  }

  if (cobra[0].x < 0) {
    perda()
  }

  if (cobra[0].y > altura - 30) {
    perda()
  }

  if (cobra[0].y < 0) {
    perda()
  }

}

function desenharfruta() {
  ctx.fillStyle = "red";
  const centerX = fruta.x + 15.5; 
  const centerY = fruta.y + 15.5;
  const radius = 15;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); 
  ctx.fill();
  
}

function aumentar() {

    if (direcao === "up") {
      let novaposicao = { x: cobra[cobra.length - 1].x, y: cobra[cobra.length - 1].y + 30 }
      cobra.push(novaposicao)
    }

    if (direcao === "down") {
      let novaposicao = { x: cobra[cobra.length - 1].x, y: cobra[cobra.length - 1].y + 30 }
      cobra.push(novaposicao)
    }

    if (direcao === "left") {
      let novaposicao = { x: cobra[cobra.length - 1].x, y: cobra[cobra.length - 1].y + 30 }
      cobra.push(novaposicao)
    }

    if (direcao === "right") {
      let novaposicao = { x: cobra[cobra.length - 1].x, y: cobra[cobra.length - 1].y + 30 }
      cobra.push(novaposicao)
    }

  desenharcobra()

}

 

function criarfruta() {
  fruta.x = Math.floor(Math.random() * 10) * square
  fruta.y = Math.floor(Math.random() * 10) * square
  for (let i = 2; i < cobra.length; i++) {
    if (cobra[i].x == fruta.x && cobra[i].y == fruta.y) {
      criarfruta()
    }
  }
}

function perda() {
  maximo = cobra.length;
  document.getElementById("contador").style.color = "white";
  direcao = "u";
  cobra = [{ x: canvas.width / 2 , y: canvas.height / 2 }];
  fruta = { x: canvas.width / 2 , y: canvas.height / 5 };
  r = 0;
  g = 255;
  recorde()
}
 
function recorde() {
  if (document.getElementById("contador").innerHTML >= maximo) {
    document.getElementById("contador").style.color = "red";
  }

  if (document.getElementById("contador").innerHTML < maximo) {
    document.getElementById("contador").style.color = "white";
  }
}

function facil() {
  limparCanvas()
  draw();
  document.getElementById("tudo").style.display = "block";
  document.getElementById("difi").style.display = "none";
  canvas.width = 300
  canvas.height = 300
  largura = canvas.width;
  altura = canvas.height;
  square = largura / size;
  cobra = [{ x: canvas.width / 2 , y: canvas.height / 2 }];
  fruta = { x: canvas.width / 2 , y: canvas.height / 5 };
  canvas.style.top = "10px";
  canvas.style.scale = 1;
  limparCanvas()
  draw();
}

function medio() {
  document.getElementById("tudo").style.display = "block";
  document.getElementById("difi").style.display = "none";
  canvas.width = 600
  canvas.height = 600
  largura = canvas.width;
  altura = canvas.height;
  square = largura / size;
  cobra = [{ x: canvas.width / 2 , y: canvas.height / 2 }];
  fruta = { x: canvas.width / 2 , y: canvas.height / 5 };
  canvas.style.position = "relative"
  document.getElementById("controle").style.position = "absolute";
  document.getElementById("controle").style.left = "50%";
  document.getElementById("controle").style.top = "75%";
  document.getElementById("controle").style.transform = "translate(-50%, -50%)";
  canvas.style.top = "-130px";
  canvas.style.scale = 1/10;
  limparCanvas()
  draw();
}

function dificil() {
  limparCanvas()
  draw();
  document.getElementById("tudo").style.display = "block";
  document.getElementById("difi").style.display = "none";
  canvas.width = 900
  canvas.height = 900
  largura = canvas.width;
  altura = canvas.height;
  square = largura / size;
  cobra = [{ x: canvas.width / 2 , y: canvas.height / 2 }];
  fruta = { x: canvas.width / 2 , y: canvas.height / 5 };
  canvas.style.position = "relative";
  canvas.style.padding = "-99999px";
  canvas.style.top = "-150px";
  canvas.style.scale = 1/2;
  limparCanvas()
  draw();
}

function voltar() {
  document.getElementById("difi").style.display = "block";
  document.getElementById("tudo").style.display = "none";
}

function vitoria() {
  if (cobra.length == largura - 10) {
    alert("PARABÉNS TU VENCEU");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    canvas.style.display = "none";
  }
}

function cima() {
  
  if ((direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "u")) {

    const novaPosicao = { x: cobra[0].x, y: cobra[0].y - 30 };
    cobra.unshift(novaPosicao);
    cobra.pop();
    direcao = "up";
  
  }

}

function esquerda() {

  if ((direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "l")) {

    const novaPosicao = { x: cobra[0].x - 30, y: cobra[0].y };
    cobra.unshift(novaPosicao);
    cobra.pop();
    direcao = "left";
  
  }

}

function direita() {

  if ((direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "r")) {

    const novaPosicao = { x: cobra[0].x + 30, y: cobra[0].y };
    cobra.unshift(novaPosicao);
    cobra.pop();
    direcao = "right";
  
  }

}

function baixo() {

  if ((direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "d")) {

    const novaPosicao = { x: cobra[0].x, y: cobra[0].y + 30 };
    cobra.unshift(novaPosicao);
    cobra.pop();
    direcao = "down";
    
    }

}



let startY = 0;
let startX = 0;
const minSwipeDistance = 300;

document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

document.addEventListener("touchmove", (e) => {
    const deltaY = e.touches[0].clientY - startY;

    if (deltaY > minSwipeDistance) {
       baixo();
    } else if (deltaY < -minSwipeDistance) {
       cima();
    }
});



document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
    const deltaX = e.touches[0].clientX - startX;

    if (deltaX > minSwipeDistance) {
      direita();
    } else if (deltaX < -minSwipeDistance) {
      esquerda();
    }
});

