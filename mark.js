var direcao = "up"
var x = 0
var y = 0
var life = 3
var corrent = "no"

setInterval(() => {
    document.getElementById("turtle").style.left = x + "px"
    document.getElementById("turtle").style.top = y + "px"
    victory()
    position()
    heart()
}, 1);

document.addEventListener("keydown", function (e) {

    if ((e.key === "d" || e.key === "D" || e.key === "ArrowRight") && direcao === "up" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "utr 500ms"
        setTimeout(() => {
            direcao = "right"
            document.getElementById("turtle").style.transform = "rotate(90deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "a" || e.key === "A" || e.key === "ArrowLeft") && direcao === "up" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "utl 500ms"
        setTimeout(() => {
            direcao = "left"
            document.getElementById("turtle").style.transform = "rotate(-90deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "a" || e.key === "A" || e.key === "ArrowLeft") && direcao === "right" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "rtu 500ms"
        setTimeout(() => {
            direcao = "up"
            document.getElementById("turtle").style.transform = "rotate(0deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "d" || e.key === "D" || e.key === "ArrowRight") && direcao === "left" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "ltu 500ms"
        setTimeout(() => {
            direcao = "up"
            document.getElementById("turtle").style.transform = "rotate(0deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "d" || e.key === "D" || e.key === "ArrowRight") && direcao === "right" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "rtd 500ms"
        setTimeout(() => {
            direcao = "down"
            document.getElementById("turtle").style.transform = "rotate(180deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "d" || e.key === "D" || e.key === "ArrowRight") && direcao === "down" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "dtl 500ms"
        setTimeout(() => {
            direcao = "left"
            document.getElementById("turtle").style.transform = "rotate(270deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "a" || e.key === "A" || e.key === "ArrowLeft") && direcao === "left" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "ltd 500ms"
        setTimeout(() => {
            direcao = "down"
            document.getElementById("turtle").style.transform = "rotate(-180deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "a" || e.key === "A" || e.key === "ArrowLeft") && direcao === "down" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.animation = "dtr 500ms"
        setTimeout(() => {
            direcao = "right"
            document.getElementById("turtle").style.transform = "rotate(-270deg)"
            document.getElementById("turtle").style.animation = ""
        }, 500);
    }

    if ((e.key === "w" || e.key === "W" || e.key === "ArrowUp") && direcao === "right" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.transition = "all 0.5s"
        x = x + 50
    }

    if ((e.key === "w" || e.key === "W" || e.key === "ArrowUp") && direcao === "down" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.transition = "all 0.5s"
        y = y + 50
    }

    if ((e.key === "w" || e.key === "W" || e.key === "ArrowUp") && direcao === "left" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.transition = "all 0.5s"
        x = x - 50
    }

    if ((e.key === "w" || e.key === "W" || e.key === "ArrowUp") && direcao === "up" && document.getElementById("turtle").style.animation === "") {
        document.getElementById("turtle").style.transition = "all 0.5s"
        y = y - 50
    }

    if ((e.key === "h" || e.key === "H")) {
        window.location.href = "escolha.html";
    }

});

function victory() {

}

function lose() {

    y = 0
    x = 0

    if (life === 3) {
        setTimeout(() => {
            life = 2
        }, 550);
    }
    else if (life === 2) {
        setTimeout(() => {
            life = 1
        }, 550);

    }

    else if (life === 1) {
        life = 0
    }

    console.log(life);
}

function position() {

    if (x === 550 && y === 550 && corrent === "si") {

        setTimeout(() => {
            y = 0
            x = 0
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 499);
    }

    if (y === 550 && corrent === "no"&& x !== 200) {
        setTimeout(() => {
            y = y + 100
        }, 500);

    }

    if (y === 550 && x === 200 && corrent === "no"){
        corrent = "si"
        setTimeout(() => {
            alert(PARABÉNS)
        }, 500);
    }

    if (x === 550 && corrent === "no") {

        document.getElementById("turtle").style.transform = "rotate(-90deg)"
        setTimeout(() => {
            x = 450
        }, 500);
        document.getElementById("turtle").style.animation = ""
        direcao = "left"

    }

    if (x > 599) {
        setTimeout(() => {
            lose()
        }, 501);
    }

    if (x < 0) {
        setTimeout(() => {
            lose()
        }, 501);
    }

    if (y > 599) {
        setTimeout(() => {
            lose()
        }, 501);
    }

    if (y < 0) {
        setTimeout(() => {
            lose()
        }, 501);

    }

}

function heart() {

    if (life === 3) {

        document.getElementById("life1").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"
        document.getElementById("life2").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"
        document.getElementById("life3").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"

    }

    if (life === 2) {

        document.getElementById("life1").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"
        document.getElementById("life2").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"
        document.getElementById("life3").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"

    }

    if (life === 1) {

        document.getElementById("life1").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"
        document.getElementById("life2").src = "https://lh3.googleusercontent.com/pw/AJFCJaW0TYdci3O441gPl3QApBkoPGtUH_518zMTFL5RPIMUJWyvFPMK9yd7eJ29ii2iybtpaSPRKxGULKtCysThr8zOt8u102v4NEXEZONdHVaG7rGDZJWccb3FIn3tlJP5TOM0bFa_3fcjHkK6h-jAPuRLyQ=w816-h757-s-no?authuser=0"
        document.getElementById("life3").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"

    }

    if (life === 0) {

        document.getElementById("life1").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"
        document.getElementById("life2").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"
        document.getElementById("life3").src = "https://lh3.googleusercontent.com/pw/AJFCJaUV-DvTW9bcsROAKPAlmI_MAU6LZvGrNzaQzHbZRo1Y7ktTXFzZC0MMRgsUWxHKljJovGKJtihs_Yq5GLdVzBczMEeDTwebv1zTJcUChEZTVuOp1MtrhzOp-XnzYWfwCxLQNQL6j2aAnjdtSXQgFc7o3g=w816-h757-s-no?authuser=0"



        setTimeout(() => {
            window.location.href = "escolha.html";
            setTimeout(() => {
                alert("PERDEU")
            }, 750);

        }, 500);
    }

}