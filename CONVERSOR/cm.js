

function direita() {
  
  let esquerda = document.getElementById('esquerda').value

  nada()
   
  if (esquerda > 0) {
    calculare()
  }

  else{
    document.getElementById('direita').value = ""
  }


}

function calculare() {
  let escolhae = document.getElementById('escolhae').value
  let escolhad = document.getElementById('escolhad').value
  let direita = document.getElementById('direita').value
  let esquerda = document.getElementById('esquerda').value

  if (escolhad === escolhae) {
    document.getElementById('direita').value = esquerda
  }

  if (escolhae === "Milímetros" && escolhad === "Centímetros") {
    document.getElementById('direita').value = esquerda / 10
  }

  if (escolhae === "Milímetros" && escolhad === "Metros") {
    document.getElementById('direita').value = esquerda / 1000
  }

  if (escolhae === "Milímetros" && escolhad === "Quilômetros") {
    document.getElementById('direita').value = esquerda / 1000000
  }

  if (escolhae === "Centímetros" && escolhad === "Milímetros") {
    document.getElementById('direita').value = esquerda * 10
  }

  if (escolhae === "Centímetros" && escolhad === "Metros") {
    document.getElementById('direita').value = esquerda / 1000
  }

  if (escolhae === "Centímetros" && escolhad === "Quilômetros") {
    document.getElementById('direita').value = esquerda / 100000
  }

  if (escolhae === "Metros" && escolhad === "Milímetros") {
    document.getElementById('direita').value = esquerda * 1000
  }

  if (escolhae === "Metros" && escolhad === "Centímetros") {
    document.getElementById('direita').value = esquerda * 100
  }

  if (escolhae === "Metros" && escolhad === "Quilômetros") {
    document.getElementById('direita').value = esquerda / 1000
  }
 
  if (escolhae === "Quilômetros" && escolhad === "Milímetros") {
    document.getElementById('direita').value = esquerda * 1000000
  }

  if (escolhae === "Quilômetros" && escolhad === "Centímetros") {
    document.getElementById('direita').value = esquerda * 100000
  }

  if (escolhae === "Quilômetros" && escolhad === "Metros") {
    document.getElementById('direita').value = esquerda * 1000
  }

}


function esquerda() {
  
  let direita = document.getElementById('direita').value

  nada()
   
  if (direita > 0) {
    calculard()
  }

  else{
    document.getElementById('esquerda').value = ""
  }


}

function calculard() {
  let escolhae = document.getElementById('escolhae').value
  let escolhad = document.getElementById('escolhad').value
  let direita = document.getElementById('direita').value
  let esquerda = document.getElementById('esquerda').value

  if (escolhad === escolhae) {
    document.getElementById('esquerda').value = direita
  }

  if (escolhad === "Milímetros" && escolhae === "Centímetros") {
    document.getElementById('esquerda').value = direita * 10
  }

  if (escolhad === "Milímetros" && escolhae === "Metros") {
    document.getElementById('esquerda').value = direita * 1000
  }

  if (escolhad === "Milímetros" && escolhae === "Quilômetros") {
    document.getElementById('esquerda').value = direita * 1000000
  }

  if (escolhad === "Centímetros" && escolhae === "Milímetros") {
    document.getElementById('esquerda').value = direita / 10
  }

  if (escolhad === "Centímetros" && escolhae === "Metros") {
    document.getElementById('esquerda').value = direita * 1000
  }

  if (escolhad === "Centímetros" && escolhae === "Quilômetros") {
    document.getElementById('esquerda').value = direita * 100000
  }

  if (escolhad === "Metros" && escolhae === "Milímetros") {
    document.getElementById('esquerda').value = direita / 1000
  }

  if (escolhad === "Metros" && escolhae === "Centímetros") {
    document.getElementById('esquerda').value = direita / 100
  }

  if (escolhad === "Metros" && escolhae === "Quilômetros") {
    document.getElementById('esquerda').value = direita * 1000
  }
 
  if (escolhad === "Quilômetros" && escolhae === "Milímetros") {
    document.getElementById('esquerda').value = direita / 1000000
  }

  if (escolhad === "Quilômetros" && escolhae === "Centímetros") {
    document.getElementById('esquerda').value = direita / 100000
  }

  if (escolhad === "Quilômetros" && escolhae === "Metros") {
    document.getElementById('esquerda').value = direita / 1000
  }

}

  document.addEventListener("keydown", function(e) {
  
    if ((e.key === "h" || e.key === "H")) {
        window.location.href = "../escolha.html";
      }
  }
  );

setInterval(() => {
  nada()
}, 1);


function nada() {

  var selectEscolhaE = document.getElementById('escolhae');
  var inputEsquerda = document.getElementById('esquerda');
  
  var opcaoSelecionadaE = selectEscolhaE.options[selectEscolhaE.selectedIndex].text;
  inputEsquerda.placeholder = opcaoSelecionadaE;

  var selectEscolhaD = document.getElementById('escolhad');
  var inputDireita = document.getElementById('direita');
  
  var opcaoSelecionadaD = selectEscolhaD.options[selectEscolhaD.selectedIndex].text;
  inputDireita.placeholder = opcaoSelecionadaD;

}

