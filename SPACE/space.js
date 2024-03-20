const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const municao = document.getElementById("muni");
const contextoMuni = municao.getContext("2d"); 

let game = false;

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 50,
    width: 50,
    height: 30,
    speed: 5
};

let invaders = [];
const invaderWidth = 30;
const invaderHeight = 30;
let invaderSpeed = 1;
const maxInvaders = 50;

let bullets = [];
const bulletWidth = 5;
const bulletHeight = 10;
const bulletSpeed = 5;
let colorbullet = "white";

let score = 0;
let time = 300;
let balas = 10;

let min = 0;
let sec = 0;

const playerImage = new Image();
playerImage.src = "https://www.pngall.com/wp-content/uploads/13/Space-Invaders-Ship-PNG-Pic.png";
const invaderImage = new Image();
invaderImage.src = "https://art.pixilart.com/186cf4be3373d17.png";
const backImage = new Image();
backImage.src = "https://i.redd.it/j7xmsub8yzp71.png";

function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function drawInvaders() {
    for (const invader of invaders) {
        ctx.drawImage(invaderImage, invader.x, invader.y, invader.width, invader.height);
    }
}

function drawImage() {
    ctx.drawImage(backImage, 0, 0, canvas.width, canvas.height);
}

function drawBullets() {
    ctx.fillStyle = colorbullet;
    for (const bullet of bullets) {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
}


function drawMuni() {
    contextoMuni.clearRect(0, 0, municao.width, municao.height); 
    let alt = 5;
    for (let i = 0; i < balas; i++) {
        contextoMuni.fillStyle = colorbullet;
        contextoMuni.fillRect(10, 0 + alt, 100, 3);
        alt = alt + 10;
    }
}

function createInvadersMatrix() {
    for (let row = 0; row < numRows; row++) {
        invadersMatrix[row] = [];
        for (let col = 0; col < numCols; col++) {
            invadersMatrix[row][col] = {
                x: col * (invaderWidth + 10),
                y: row * (invaderHeight + 10),
                width: invaderWidth,
                height: invaderHeight,
                speed: invaderSpeed,
                direction: 1,
                shootCooldown: Math.random() * 1000 + 500
            };
        }
    }
}

function addInvader() {
    if (game == true) {
        const newInvader = {
            x: Math.random() * (canvas.width - invaderWidth),
            y: 0,
            width: invaderWidth,
            height: invaderHeight,
            speed: invaderSpeed,
            direction: 1,
            shootCooldown: Math.random() * 1000 + 500
        };
        invaders.push(newInvader);
    }
}

function updateInvaders() {
    for (let i = invaders.length - 1; i >= 0; i--) {
        const invader = invaders[i];
        if (invader) {
        invader.y += invader.speed;
        if (invader.y > canvas.height) {
            invaders.splice(i, 1);
        }
        if (
            invader.x < player.x + player.width &&
            invader.x + invader.width > player.x &&
            invader.y < player.y + player.height &&
            invader.y + invader.height > player.y
        ) {
            gameOver();
        }
    }
}
}

function spawnInvaders() {
    setInterval(addInvader, time);
}

spawnInvaders();

function movePlayer() {
    if (isKeyPressed("ArrowLeft") && player.x > 0 && game == true) {
        player.x -= player.speed;
    }
    if (isKeyPressed("ArrowRight") && player.x + player.width < canvas.width && game == true) {
        player.x += player.speed;
    }

    if (isKeyPressed("ArrowUp") && player.y + player.height > 0 && game == true) {
        player.y -= player.speed;
    }
    if (isKeyPressed("ArrowDown") && player.y < canvas.height && game == true) {
        player.y += player.speed;
    }

    if (isKeyPressed("Enter") && game == false) {
        game = true;
    }
    if ((isKeyPressed("h") || isKeyPressed("H"))) {
        window.location.href = "../escolha.html";
    }
}

function shoot() {
    if (game == true) {
        if (balas > 0) {
            bullets.push({
                x: player.x + player.width / 2 - bulletWidth / 2,
                y: player.y,
                width: bulletWidth,
                height: bulletHeight,
                speed: bulletSpeed
            });
            balas--;
            setTimeout(() => {
                balas++;
            }, 5000);
        }
    }
}

function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.y -= bulletSpeed;

        for (let j = invaders.length - 1; j >= 0; j--) {
            const invader = invaders[j];
            if (
                bullet.x + bulletWidth >= invader.x &&
                bullet.x <= invader.x + invaderWidth &&
                bullet.y <= invader.y + invaderHeight &&
                bullet.y + bulletHeight >= invader.y
            ) {

                bullets.splice(i, 1);
                invaders.splice(j, 1);
                invaderSpeed = invaderSpeed + 0.01
                score = score + 5;
            }
        }
    }
    if (balas > 10) {
        balas = 10;
    }
}

const keysPressed = {};
function isKeyPressed(key) {
    return keysPressed[key];
}

document.addEventListener("keydown", function (event) {
    keysPressed[event.key] = true;
    if (event.key === " ") {
        shoot();
    }
});

document.addEventListener("keyup", function (event) {
    keysPressed[event.key] = false;
});



function updateGame() {
    updateInvaders();
    movePlayer();
    updateBullets();

    ctx.clearRect(0, 0, canvas.width, canvas.height);    
    drawMuni();
    drawImage();
    drawBullets();
    drawPlayer();
    drawInvaders();

    if (game == true) {
        document.getElementById("pontos").innerHTML = score;
        document.getElementById("over").innerHTML = "";
    }
    else {
        document.getElementById("pontos").innerHTML = "press 'Enter'";
    }

    if (score % 100 === 0 && score != 0) {
        colorbullet = "yellow";
    }
    else{
        colorbullet = "red";
    }

    requestAnimationFrame(updateGame);
}

updateGame();

    function gameOver() {
        game = false;
        invaders = [];
        bullets = [];
        balas = 10;
        sec = 0;
        min = 0;
        score = 0;
        drawMuni()
        player.x = canvas.width / 2 - player.width / 2;
        document.getElementById("over").innerHTML = "YOU LOSE";
}

function atualizarCronometro() {
    if (game) {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
    }
    document.getElementById("time").innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

setInterval(atualizarCronometro, 1000);

