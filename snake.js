//VARIAVEIS//

var contador = document.getElementById("contador")

let renderizacao = 0;
var comprimento = 0
let velocidade = 70;
const jogo = document.getElementById("jogo");
var corpo = [{ x: 16, y: 16 }, { x: 16, y: 17 }, { x: 16, y: 18 }];
var maior = 1
var fruta = { x: 16, y: 5 };

//JOGO//

requestAnimationFrame(jogoemsi)

function jogoemsi() {

  atualizarcobra();
  desenharcobra();
  desenharFruta();

  if (comprimento === 35) {


    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    alert("ESPERE SUA RECOMPENSA")

    corpo = { x: 1, y: 1 };
    fruta = { x: 16, y: 5 };

  }

  if (comprimento > maior) {
    maior = comprimento

    contador.style.animation = " recorde 3s";
    setTimeout(() => {
      contador.style.color = "red"
    }, 3000);

  }



  if (corpo[0].x == fruta.x && corpo[0].y == fruta.y) {
    comprimento = comprimento + 1

    contador.style.display = "block";
    criarFruta()
    contador.textContent = comprimento

    aumentar()


  }


  if (corpo[1].x == fruta.x && corpo[1].y == fruta.y) {
    comprimento = comprimento + 1

    contador.style.display = "block";
    criarFruta()
    contador.textContent = comprimento

    aumentar()


  }

  if (corpo[1].x == fruta.x && corpo[1].y == fruta.y) {
    comprimento = comprimento + 1

    contador.style.display = "block";
    criarFruta()
    contador.textContent = comprimento

    aumentar()


  }

  if (corpo[0].x > 30) {
    perda()
    comprimento = 0
  }

  if (corpo[0].y > 30) {
    perda()
    comprimento = 0
  }

  if (corpo[0].x < 0) {
    perda()
    comprimento = 0
  }

  if (corpo[0].y < 0) {
    perda()
    comprimento = 0
  }





  setTimeout(() => {
    requestAnimationFrame(jogoemsi);
  }, velocidade);
}







//DESENHOS NO MAPA// 


function desenharcobra() {
  const cobraDivs = corpo.map(segment => {
    const div = document.createElement('div');
    div.style.gridRowStart = segment.y;
    div.style.gridColumnStart = segment.x;
    div.classList.add('cobra');

    document.addEventListener("keydown", function (e) {

    });
    return div;
  });

  jogo.innerHTML = '';
  jogo.append(...cobraDivs);
}

function criarFruta() {
  fruta.x = Math.floor(Math.random() * 30) + 1;
  fruta.y = Math.floor(Math.random() * 30) + 1;

  if (fruta === corpo) {
    criarFruta
  }
}

function desenharFruta() {
  const div = document.createElement("div");
  div.style.gridRowStart = fruta.y;
  div.style.gridColumnStart = fruta.x;
  div.classList.add("comida");
  jogo.appendChild(div);
}


// MOVIMENTAÇÃO DA COBRA//

var direcao = "u";


document.addEventListener("keydown", function (e) {

  if ((e.key === "ArrowUp" || e.key === "w" || e.key === "W") && (direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "u")) {


    const novaPosicao = { x: corpo[0].x, y: corpo[0].y - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "up";


  } else if ((e.key === "ArrowDown" || e.key === "s" || e.key === "S") && (direcao === "right" || direcao === "left" || direcao === "l" || direcao === "r" || direcao === "d")) {

    const novaPosicao = { x: corpo[0].x, y: corpo[0].y + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "down";


  } else if ((e.key === "ArrowLeft" || e.key === "a" || e.key === "A") && (direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "l")) {

    const novaPosicao = { y: corpo[0].y, x: corpo[0].x - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "left";


  } else if ((e.key === "ArrowRight" || e.key === "d" || e.key === "D") && (direcao === "up" || direcao === "down" || direcao === "u" || direcao === "d" || direcao === "r")) {

    const novaPosicao = { y: corpo[0].y, x: corpo[0].x + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "right";


  }
  else if (e.key === "Enter" && direcao === "up") {
    direcao = "u"
  }

  else if (e.key === "Enter" && direcao === "down") {
    direcao = "d"
  }

  else if (e.key === "Enter" && direcao === "left") {
    direcao = "l"
  }

  else if (e.key === "Enter" && direcao === "right") {
    direcao = "r"
  }

  else if ((e.key === "h" || e.key === "H")) {
    window.location.href = "escolha.html";
  }
}
);



function atualizarcobra() {
  if (direcao === "up") {
    const novaPosicao = { x: corpo[0].x, y: corpo[0].y - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
  }

  if (direcao == "left") {
    const novaPosicao = { y: corpo[0].y, x: corpo[0].x - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
  }

  if (direcao == "down") {
    const novaPosicao = { x: corpo[0].x, y: corpo[0].y + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
  }
  if (direcao == "right") {
    const novaPosicao = { y: corpo[0].y, x: corpo[0].x + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
  }
  for (let i = 1; i < corpo.length; i++) {
    if (corpo[i].x === corpo[0].x && corpo[i].y === corpo[0].y) {
      perda()

    }
  }
}


// AUMENTO DA COBRA//


function aumentar() {

  velocidade = velocidade - 3

  console.log(velocidade)

  if (direcao === "down") {
    const ultimaParte = corpo[corpo.length - 1];
    corpo.push({
      x: ultimaParte.x,
      y: ultimaParte.y
    });
  }
  if (direcao === "right") {
    const ultimaParte = corpo[corpo.length - 1];
    corpo.push({
      x: ultimaParte.x,
      y: ultimaParte.y
    });
  }


  if (direcao === "up") {
    const ultimaParte = corpo[corpo.length - 1];
    corpo.push({
      x: ultimaParte.x,
      y: ultimaParte.y
    });
  }

  if (direcao === "left") {
    const ultimaParte = corpo[corpo.length - 1];
    corpo.push({
      x: ultimaParte.x,
      y: ultimaParte.y
    });
  }
}

function cima() {
  if ((direcao === "right" || direcao === "left" || direcao == "u" || direcao == "l" || direcao == "r") && direcao !== "up") {


    const novaPosicao = { x: corpo[0].x, y: corpo[0].y - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "up";
  }
}

function esquerda() {
  if ((direcao === "up" || direcao === "down" || direcao == "u" || direcao == "l" || direcao == "d") && direcao !== "left") {


    const novaPosicao = { y: corpo[0].y, x: corpo[0].x - 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "left";
  }
}

function direita() {
  if ((direcao === "up" || direcao === "down" || direcao == "u" || direcao == "d" || direcao == "r") && direcao !== "right") {


    const novaPosicao = { y: corpo[0].y, x: corpo[0].x + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "right";
  }
}

function baixo() {
  if ((direcao === "right" || direcao === "left" || direcao == "d" || direcao == "l" || direcao == "r") && direcao !== "down") {


    const novaPosicao = { x: corpo[0].x, y: corpo[0].y + 1 };
    corpo.unshift(novaPosicao);
    corpo.pop();
    direcao = "down";

  }
}

function parar() {
  if (direcao === "up") {
    direcao = "u"
  }

  if (direcao === "down") {
    direcao = "d"
  }

  if (direcao === "left") {
    direcao = "l"
  }

  if (direcao === "right") {
    direcao = "r"
  }

}





// ENCCERRAMENTO //

function perda() {
  if (comprimento < maior) {

    contador.style.animation = " voltar 3s";


  }

  velocidade = 70
  setTimeout(() => {
    contador.style.color = "white"
  }, 3000);
  direcao = "u";
  corpo = [{ x: 16, y: 16 }, { x: 16, y: 17 }, { x: 16, y: 18 }];
  fruta = { x: 16, y: 5 };
  comprimento = 0
  contador.textContent = 0
}



