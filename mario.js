var point = 0;
var pulo = "sim"
var lose = "no"
var win = "no"
var speed = 2
var time = speed * 3000




setInterval(() => {
    game()


}, 0.5);

function game() {
    var cano = document.getElementById("cano");
    var mario = document.getElementById("mario");
    var mario2 = document.getElementById("mario2");
    if (lose === "no") {
        document.getElementById("cano").style.animation = "andar " + speed + "s infinite linear"
    }
    perda()
    document.getElementById("pontos").innerHTML = point;
    if (point > 19) {
        victory()
    }
}

setInterval(() => {
    if (lose === "no") {
        speed = speed / 2
    }

}, time);



function jump() {

    pulo = "nao"
    document.getElementById("mario").style.animation = "pular 600ms infinite linear";

    setTimeout(() => {

        pulo = "sim"
        document.getElementById("mario").style.animation = "none";
        point++

    }, 599);

}

function reiniciar() {

    window.location.reload(true);

}


document.addEventListener("keydown", function (e) {

    if ((e.key === "ArrowUp" || e.key === "w" || e.key === "W") && pulo === "sim" && win !== "sim") {
        jump()
    }

    if ((e.key === "ArrowDown" || e.key === "s" || e.key === "S") && pulo === "nao" && win !== "sim") {
        document.getElementById("mario").style.animation = "";
        document.getElementById("mario").style.transition = " all 0.01s"

    }


    if (e.key === "Enter" && win === "no") {
        reiniciar()

    }

    if ((e.key === "j" || e.key === "J") && win === "sim") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    }

    if ((e.key === "h" || e.key === "H")) {
        window.location.href = "escolha.html";
    }

}
);

function perda() {

    var canop = +window.getComputedStyle(cano).left.replace('px', '');
    var mariop = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canop < 110 && canop > 10 && mariop < 75) {
        tempo = 0
        distancia = "nd"
        pulo = "no"
        lose = "si"
        point = "PERDEU"
        document.getElementById("pontos").innerHTML = 0;
        cano.style.animation = ""
        mario.style.animation = ""
        cano.style.left = canop + 'px';
        mario.style.bottom = mariop + 'px';
        document.getElementById("mario").style.width = "95px"
        document.getElementById("mario").src = "https://pbs.twimg.com/media/EvQit5UXEAM7gAe?format=png&name=240x240";
    }





}

function victory() {

    win = "sim"
    lose = "si"
    document.getElementById("pontos").style.display = "none";
    document.getElementById("win").style.display = "flex"
    document.getElementById("vitória").innerHTML = "😎PARABÉNS MEU CONSAGRADO 👏";
    document.getElementById("vitória2").innerHTML = "✨APERTE O J PARA RECEBER SUA RECOMPENSA✨";
    cano.style.animation = ""
    cano.style.display = "none"
    mario.style.animation = "vencer 3s linear"
    setTimeout(() => {
        mario.style.display = "none"
        mario2.style.display = "flex"
    }, 2999);
    pulo = "nao"
}