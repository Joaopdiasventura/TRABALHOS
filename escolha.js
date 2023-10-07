let user = ""

function mudar() {

 user = document.getElementById("nome").value;
    
        
 document.getElementById("usuario").innerHTML = "BEM VINDO " + user + " AOS TRABALHOS DO VULGO JP"
    document.getElementById("texto2").style.left = "-100%"


    
    setTimeout(() => {
        
        document.getElementById("box").style.display = "flex"

    }, 500);

    setTimeout(() => {
        document.getElementById("box").style.left = "50%"
    }, 1500);
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        mudar()
      }
}
);