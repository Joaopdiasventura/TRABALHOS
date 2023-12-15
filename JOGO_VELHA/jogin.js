document.addEventListener("keydown", function (e) {
    if ((e.key === "h" || e.key === "H")) {
        window.location.href = "../escolha.html";
    }
}
);

var player = "∑";
var click = 0

setInterval(() => {
    detectX()
    detectO()
    console.log(player);
    document.getElementById("vez").innerHTML = "É a vez do " + player;
}, 100);

function jogue1() {



    if (document.getElementById("btn1").textContent !== "∑" && document.getElementById("btn1").textContent !== "⨀") {

        document.getElementById("btn1").style.color = "black"
        document.getElementById("btn1").textContent = player

        troca()
    }
}

function jogue2() {


    if (document.getElementById("btn2").textContent !== "∑" && document.getElementById("btn2").textContent !== "⨀") {

        document.getElementById("btn2").style.color = "black"
        document.getElementById("btn2").textContent = player

        troca()
    }
}

function jogue3() {


    if (document.getElementById("btn3").textContent !== "∑" && document.getElementById("btn3").textContent !== "⨀") {

        document.getElementById("btn3").style.color = "black"
        document.getElementById("btn3").textContent = player

        troca()
    }
}

function jogue4() {


    if (document.getElementById("btn4").textContent !== "∑" && document.getElementById("btn4").textContent !== "⨀") {

        document.getElementById("btn4").style.color = "black"
        document.getElementById("btn4").textContent = player

        troca()
    }
}

function jogue5() {


    if (document.getElementById("btn5").textContent !== "∑" && document.getElementById("btn5").textContent !== "⨀") {

        document.getElementById("btn5").style.color = "black"
        document.getElementById("btn5").textContent = player

        troca()
    }
}

function jogue6() {


    if (document.getElementById("btn6").textContent !== "∑" && document.getElementById("btn6").textContent !== "⨀") {

        document.getElementById("btn6").style.color = "black"
        document.getElementById("btn6").textContent = player

        troca()
    }
}

function jogue7() {


    if (document.getElementById("btn7").textContent !== "∑" && document.getElementById("btn7").textContent !== "⨀") {

        document.getElementById("btn7").style.color = "black"
        document.getElementById("btn7").textContent = player

        troca()
    }
}

function jogue9() {


    if (document.getElementById("btn9").textContent !== "∑" && document.getElementById("btn9").textContent !== "⨀") {

        document.getElementById("btn9").style.color = "black"
        document.getElementById("btn9").textContent = player

        troca()
    }
}

function jogue8() {


    if (document.getElementById("btn8").textContent !== "∑" && document.getElementById("btn8").textContent !== "⨀") {

        document.getElementById("btn8").style.color = "black"
        document.getElementById("btn8").textContent = player

        troca()
    }
}

function troca() {

    click++
    console.log(click)

    if (player === "∑") {
        player = "⨀"
    }

    else {
        player = "∑"
    }
}

function detectX() {

    if (document.getElementById("btn1").textContent === "∑" &&
        document.getElementById("btn2").textContent === "∑" &&
        document.getElementById("btn3").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn1").textContent === "∑" &&
        document.getElementById("btn4").textContent === "∑" &&
        document.getElementById("btn7").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn1").textContent === "∑" &&
        document.getElementById("btn5").textContent === "∑" &&
        document.getElementById("btn9").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn3").textContent === "∑" &&
        document.getElementById("btn5").textContent === "∑" &&
        document.getElementById("btn7").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn2").textContent === "∑" &&
        document.getElementById("btn5").textContent === "∑" &&
        document.getElementById("btn8").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn3").textContent === "∑" &&
        document.getElementById("btn6").textContent === "∑" &&
        document.getElementById("btn9").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn4").textContent === "∑" &&
        document.getElementById("btn5").textContent === "∑" &&
        document.getElementById("btn6").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }

    if (document.getElementById("btn7").textContent === "∑" &&
        document.getElementById("btn8").textContent === "∑" &&
        document.getElementById("btn9").textContent === "∑") {
        alert("O JOGADOR ∑ VENCEU")
        restart()
    }


}


function detectO() {

    if (document.getElementById("btn1").textContent === "⨀" &&
        document.getElementById("btn2").textContent === "⨀" &&
        document.getElementById("btn3").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn1").textContent === "⨀" &&
        document.getElementById("btn4").textContent === "⨀" &&
        document.getElementById("btn7").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn1").textContent === "⨀" &&
        document.getElementById("btn5").textContent === "⨀" &&
        document.getElementById("btn9").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn3").textContent === "⨀" &&
        document.getElementById("btn5").textContent === "⨀" &&
        document.getElementById("btn7").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn2").textContent === "⨀" &&
        document.getElementById("btn5").textContent === "⨀" &&
        document.getElementById("btn8").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn3").textContent === "⨀" &&
        document.getElementById("btn6").textContent === "⨀" &&
        document.getElementById("btn9").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn4").textContent === "⨀" &&
        document.getElementById("btn5").textContent === "⨀" &&
        document.getElementById("btn6").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (document.getElementById("btn7").textContent === "⨀" &&
        document.getElementById("btn8").textContent === "⨀" &&
        document.getElementById("btn9").textContent === "⨀") {
        alert("O JOGADOR ⨀ VENCEU")
        restart()
    }

    if (click === 9) {
        alert("VELHA (nenhum jogador venceu)")
        restart()
    }


}

function restart() {
    document.getElementById("btn1").textContent = "."
    document.getElementById("btn2").textContent = "."
    document.getElementById("btn3").textContent = "."
    document.getElementById("btn4").textContent = "."
    document.getElementById("btn5").textContent = "."
    document.getElementById("btn6").textContent = "."
    document.getElementById("btn7").textContent = "."
    document.getElementById("btn8").textContent = "."
    document.getElementById("btn9").textContent = "."

    document.getElementById("btn1").style.color = "white"
    document.getElementById("btn2").style.color = "white"
    document.getElementById("btn3").style.color = "white"
    document.getElementById("btn4").style.color = "white"
    document.getElementById("btn5").style.color = "white"
    document.getElementById("btn6").style.color = "white"
    document.getElementById("btn7").style.color = "white"
    document.getElementById("btn8").style.color = "white"
    document.getElementById("btn9").style.color = "white"

    player = "∑"
    click = 0

}