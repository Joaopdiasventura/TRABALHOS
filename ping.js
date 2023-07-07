const canvas = document.getElementById('pong-canvas');
const context = canvas.getContext('2d');
const fieldWidth = canvas.width;
const fieldHeight = canvas.height;
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
let speed = 5
let ruin = 20;
let pause = "s";
let pointp = 0;
let pointo = 0;
let maximo = 10;
let batida = 0;
let vic = "n";
let possible = "s";
let dupla = "n";
let mais = "s";

let player = {
    x: 10,                    
    y: fieldHeight / 2 - 25,  
    width: 10,
    height: 50,
    dy: fieldHeight / 3,                   
    color: '#FFF',
    score: 0                 
};

let ball = {
    x: fieldWidth / 2,        
    y: fieldHeight / 2,        
    radius: 5,
    dx: speed,                    
    dy: speed,                   
    speed: 5,                 
    color: '#FF0000'
};

let opponent = {
    width: 10,
    height: 50,
    x: fieldWidth - 20,       
    y: (ball.y - (player.height / 2)),   
    dy: fieldHeight / 3,                    
    color: '#FFF',
    score: 0                 
};

function drawPlayer() {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.width, player.height);
    context.fillStyle = "#FF0000";
    context.fillRect(player.x, player.y + (player.height / 2) - ball.radius, player.width, ball.radius * 2);
    context.strokeStyle = "#FFFFFF"
    context.strokeRect(player.x, player.y, player.width, player.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(player.x + 2.5, player.y + (player.height / 2) - ball.radius / 2 , player.width / 2, ball.radius);
}

function drawopponent() {
    context.fillStyle = opponent.color;
    context.fillRect(opponent.x, opponent.y, opponent.width, opponent.height);
    context.fillStyle = "#FF0000";
    context.fillRect(opponent.x, opponent.y + (opponent.height / 2) - ball.radius, opponent.width, ball.radius * 2);
    context.strokeStyle = "#FFFFFF"
    context.strokeRect(opponent.x, opponent.y, opponent.width, opponent.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(opponent.x + 2.5, opponent.y + (player.height / 2) - ball.radius / 2 , opponent.width / 2, ball.radius);
}

function drawBall() {
    context.strokeStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();
    context.strokeStyle = "#ffffff";
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.fillStyle = "#FFFFFF"
    context.beginPath();
    context.arc(ball.x, ball.y , ball.radius - 3, 0, Math.PI * 2, false);
    context.fill();
}

function drawLine() {
    context.fillStyle = ball.color;
    context.fillRect(fieldWidth / 2, 0, 1, fieldHeight);
}

function drawCollum() {
    context.fillStyle = ball.color;
    context.fillRect(0, fieldHeight / 2, fieldWidth, 1);
}

function drawCircle() {
    context.strokeStyle = "#ffffff";
    context.beginPath();
    context.arc(((fieldWidth / 2)), ((fieldHeight / 2)), 25, 0, Math.PI * 2, false);
    context.stroke();
}


function draw() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLine();
    drawCollum()
    drawCircle();
    drawBall();
    drawPlayer();
    drawopponent();
}



    


document.addEventListener('keydown', function(event) {
  if ((event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') && player.y > 1 && dupla === "n") {
    player.y -= player.dy;
  }  
  if ((event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') && player.y < fieldHeight - player.height && dupla === "n") {
    player.y += player.dy;
  }  

//sozinho//

  if ((event.key === 'w' || event.key === 'W') && player.y > 1) {
    player.y -= player.dy;
  }  
  if ((event.key === 's' || event.key === 'S') && player.y < fieldHeight - player.height) {
    player.y += player.dy;
  }   

//player1//
  if ((event.key === 'ArrowUp') && opponent.y > 1  && dupla === "s") {
    opponent.y -= player.dy;
  }  
  if ((event.key === 'ArrowDown') && opponent.y < fieldHeight - opponent.height  && dupla === "s") {
    opponent.y += player.dy;
  }

  //player2//
  if (event.key === 'Enter' && vic === 'n') {
    pause = 'n';
  } 
  if (event.key === 'R' || event.key === 'r') {
    pointo = 0;
    pointp = 0;
    batida = 0;
    ball.dx = 5;
    ball.dy = 5;
    maximo = 10;
  } 
  if (event.key === 'H' ||  event.key === 'h' && vic === 'n') {
    window.location.href = "escolha.html"
  } 

  if (event.key === '2') {
    dupla = "s"
    player.y = fieldHeight / 2 - 25
    opponent.y = player.y
  } 
  if (event.key === '1') {
    dupla = "n"
  }
    
    if ((event.key === "h" || event.key === "H")) {
     window.location.href = "escolha.html";
    }

   
});



function moveBall() {
    if (pause === "n") {
        
    ball.x += ball.dx; 
    ball.y += ball.dy; 

    if (ball.y + ball.radius > fieldHeight || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }


    if ((ball.x - ball.radius) < (player.x + player.width + 10) && (ball.y + ball.radius) > player.y && (ball.y - ball.radius) < (player.y + player.height)  && possible === "s") {
        possible = "n"
        ball.dx *= -1;
        setTimeout(() => {
            possible = "s"
            speed = speed + 1
        }, 150);
    }

    if ((ball.x - ball.radius) < (player.x + player.width + 10) && (ball.y + ball.radius) > player.y && (ball.y - ball.radius) < (player.y + player.height)  && possible === "s" && ball.y === (player.y + (player.height / 2) - ball.radius)) {
        possible = "n"
        ball.dx *= -1;
        ball.x += 3;
        setTimeout(() => {
            possible = "s"
            speed = speed + 1
        }, 150);
    }

    if (ball.y < (player.y + player.height - 1) && (ball.x + ball.radius) > player.x && (ball.x + ball.radius) < (player.x + player.width)  && possible === "s"){
        possible = "n"
        setTimeout(() => {
            possible = "s"
            speed = speed + 1
        }, 150);
    }

    if (ball.y < (opponent.y + opponent.height - 1) && (ball.x + ball.radius) < opponent.x && (ball.x + ball.radius) > (opponent.x + opponent.width)  && possible === "s"){
        possible = "n"
        setTimeout(() => {
            possible = "s"
            speed = speed + 1
        }, 150);
    }

    if (
        ball.x + ball.radius > opponent.x - 10 &&
        ball.y + ball.radius > opponent.y &&
        ball.y - ball.radius < opponent.y + opponent.height  && possible === "s"
    ) {
        possible = "n"
        ball.dx *= -1;
        setTimeout(() => {
            possible = "s"
        }, 150);
    }

    if (ball.x > fieldWidth - 8) {
        pointp = pointp + 1
        ruin = ruin - (20 / 9)
        ball.x = fieldWidth / 2
        ball.y = fieldHeight / 2
        pause = "s"
        speed = 5
        aumentar()
    }

    if (ball.x < 8) {
        pointo = pointo + 1
        ball.x = fieldWidth / 2
        ball.y = fieldHeight / 2
        pause = "s"
        speed = 5
        batida = 0
        aumentar()
    }

    if (pointo === (maximo / 2) && pointp === (maximo / 2) && mais === "s") {
        mais = "n"
            if (ball.dx > 0) {
                ball.dx = ball.dx + 1.5
            }
            if (ball.dx < 0) {
                ball.dx = ball.dx - 1.5
            }

            if (ball.dy > 0) {
                ball.dy = ball.dy + 1.5
            }
            if (ball.dx < 0) {
                ball.dy = ball.dy - 1.5
            }
    }

}
    requestAnimationFrame(moveBall);

    if (ball.dx > 0  && dupla === "n" && ball.x > ((fieldWidth / 3) * 2)) {
        IA()   
    }
    if (ball.dx < 0  && dupla === "n" ) {
            opponent.y = fieldHeight / 2 - 25; 
            
    }
    
    draw()
    pontos()

}

    moveBall()

    function pontos() {
        document.getElementById("pointp").innerHTML = pointp;
        document.getElementById("pointo").innerHTML = pointo;

        if (pointp > (maximo - 1) && dupla === "n") {
            pointp = 0
            pointo = 0
            alert("VOCÊ VENCEU ✨")
            vic = "s"
            pause = "s"
            setTimeout(() => {
                window.location.href = "https://youtu.be/dQw4w9WgXcQ";
            }, 1000);
        }

        if (pointo > (maximo - 1) && dupla === "n") {
            alert("VOCÊ PERDEU ✨")
            pointo = 0;
            pointp = 0;
            batida = 0;
            ball.dx = 5;
            ball.dy = 5;
            maximo = 10;
        }

        if (pointp > (maximo - 1) && dupla === "s") {
            pointp = 0
            pointo = 0
            alert("JOGADOR 1 VENCEU✨")
            vic = "s"
            pause = "s"
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=S8iYNNpKvCw";
            }, 1000);
        }

        if (pointo === maximo && dupla === "s") {
            pointp = 0
            pointo = 0
            alert("JOGADOR 2 VENCEU✨")
            vic = "s"
            pause = "s"
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=fMut2esOT5w";
            }, 1000);
        }

    }


    function IA() {

        if (ball.y > (opponent.y + opponent.height + ruin) && ball.dy > 0 && (opponent.y + opponent.height) < fieldHeight) {
            opponent.y += player.dy
        }

        if (ball.y < (opponent.y - ruin) && ball.dy < 0 && opponent.y > 1) {
            opponent.y -= player.dy
        }

    }








function subir() {
    if (player.y > 1) {
        
    player.y -= player.dy;
    }
}

function descer() {
    if (player.y < fieldHeight - player.height) {
    player.y += player.dy;
    }
}

function start() {
        pause = 'n';
}

function aumentar() {
    if (pointo === 9 && pointp === 9) {
        ball.dx = ball.dx + (ball.dx / 2205)
        ball.dy = ball.dy + (ball.dy / 2205)
    }

    if (pointo === pointp && pointo === (maximo - 1) && pointp === (maximo - 1)) {
        maximo += 2
    }
}

p1.addEventListener('touchstart', function(event){
    subir()
} )

p2.addEventListener('touchend', function(event){
    descer()
} )
