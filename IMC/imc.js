let altura = 0
let peso = 0
let imc = 0
let valor = 0
let def = "no"
let posicao = "direita"


setInterval(() => {

  verifica()
  tabela()

  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  valor = peso / ((altura * altura) / 10000)

  if (posicao === "direita") {
    document.getElementById("textotroca"). innerHTML = "DESEJA VER SUA CLASSIFICAÇÃO E A TABELA DE IMC?"
  }

  else if (posicao === "esquerda") {
    document.getElementById("textotroca"). innerHTML = "DESEJA MUDAR SEU IMC?"
  }



}, 1);

function verifica() {
  if (document.getElementById("altura").value === "") {
    document.getElementById("imc").innerHTML = "SEU IMC NÃO ESTÁ DEFINIDO"
    imc = 0
  }

  if (document.getElementById("peso").value === "") {
    document.getElementById("imc").innerHTML = "SEU IMC NÃO ESTÁ DEFINIDO"
    imc = 0
  }
 
  if (document.getElementById("altura").value !== "" && document.getElementById("peso").value !== "") {
    document.getElementById("imc").innerHTML = "SEU IMC É IGUAL A: " + imc
    imc =  valor.toFixed(1);
  }

}

function tabela() {
  if (imc < 18.5 && imc > 10) {
    document.getElementById("white1").style.color = "green"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "green"
  }


  else if (imc > 18.5 && imc < 24.9) {
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "green"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "green"}

  else if (imc > 24.9 && imc < 29.9 ) {
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "yellow"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "yellow"}

    else if  (imc > 29.9 && imc < 34.9) {
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "yellow"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "yellow"}

    else if (imc > 34.9 && imc < 39.9) {
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "red"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "red"
  }

  else if (imc > 40 ) {
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "red"
    document.getElementById("imc").style.color = "red"
  }

  else{
    document.getElementById("white1").style.color = "white"
    document.getElementById("white2").style.color = "white"
    document.getElementById("green").style.color = "white"
    document.getElementById("yellow1").style.color = "white"
    document.getElementById("yellow2").style.color = "white"
    document.getElementById("red").style.color = "white"
    document.getElementById("imc").style.color = "white"
  }
}

function trocar1() {
  if (posicao === "direita") {
    posicao = "esquerda"
    document.getElementById("troca").style.right = "50.7%"
    document.getElementById("botao1").style.display = "none"
    document.getElementById("botao2").style.display = "block"
  }

  else if (posicao === "esquerda") {
    posicao = "direita"
    document.getElementById("troca").style.right = "0"
    document.getElementById("botao2").style.display = "none"
    document.getElementById("botao1").style.display = "block"
  }

}

document.addEventListener("keydown", function (e) {

  if (e.key === "ArrowLeft" && posicao === "direita") {
    posicao = "esquerda"
    document.getElementById("troca").style.right = "50.7%"
    document.getElementById("botao1").style.display = "none"
    document.getElementById("botao2").style.display = "block"
  }

  if (e.key === "ArrowRight" && posicao === "esquerda") {
    posicao = "direita"
    document.getElementById("troca").style.right = "0"
    document.getElementById("botao2").style.display = "none"
    document.getElementById("botao1").style.display = "block"
  }

  if ((e.key === "h" || e.key === "H")) {
    window.location.href = "../escolha.html";
  }

});