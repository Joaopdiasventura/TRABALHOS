function bts(num) {
  var result = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = result + num;
  document.getElementById("resultado").style.padding = 0;
  document.getElementById("resultado").style.color = "black"
}

function back() {
  var result = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = result.substring(0, result.length - 1);
  document.getElementById("resultado").style.padding = "17px";
  document.getElementById("resultado").style.color = "black"
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.padding = "17px";
  document.getElementById("resultado").style.color = "black"
}

function funcione() {
  var result = document.getElementById("resultado").innerHTML;
  var foi = eval(result);
  document.getElementById("resultado").innerHTML = foi;
  document.getElementById("resultado").style.padding = 0;
  document.getElementById("resultado").style.color = "white"
}

function par1() {
  var result = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = result + "(";
  document.getElementById("resultado").style.padding = 0;
  document.getElementById("resultado").style.color = "black"
}

function par2() {
  var result = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = result + ")";
  document.getElementById("resultado").style.padding = 0;
  document.getElementById("resultado").style.color = "black"
}

document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 1;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "2") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 2;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "3") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 3;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "4") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 4;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "5") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 5;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "6") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 6;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "7") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 7;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "8") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 8;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "9") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 9;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "0") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + 0;
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "*") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + "*";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "+") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + "+";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "-") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + "-";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "/") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + "/";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === "(") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + "(";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === ")") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + ")";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if (e.key === ".") {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result + ".";
    document.getElementById("resultado").style.padding = 0;
    document.getElementById("resultado").style.color = "black"
  }

  if ((e.key === "h" || e.key === "H")) {
    window.location.href = "../escolha.html";
  }

  if (e.key === "Enter") {
    funcione()
  }

  if (e.key === "Backspace") {
    back()
  }

  if (e.key === "a") {
    limpar()
  }
});