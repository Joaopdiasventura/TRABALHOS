const chave = "c61a34b00f6784eeae7520f44519cc24";

async function vai() {

    let cidade = document.getElementById("cidade").value;

    if (cidade.trim() === "") {
        alert("DIGITE UMA CIDADE");
        return;
    }

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt&units=metric`)
        .then(resposta => resposta.json())
        .catch(() => {
            alert("CIDADE NÃO ENCONTRADA");
        });
        
    if (dados) {

        document.getElementById("desc").innerHTML = `CLIMA EM ${cidade}`
        document.getElementById("count").innerHTML = `NO PAÍS ${dados.sys.country}`
        document.getElementById("temps").innerHTML = `${Math.floor(dados.main.temp)}°C DE TEMPERATURA MÉDIA`;
        document.getElementById("humi").innerHTML = `${Math.floor(dados.main.humidity)}% DE HUMIDADE`;
        document.getElementById("emoji").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
        document.getElementById("nuvem").innerHTML = dados.weather[0].description;

        if (dados.weather[0].description == "trovoada com chuva forte") {
            document.getElementById("nuvem").innerHTML = dados.weather[0].description + 
            " (proteja-se)";
        }

        console.log(dados);

    } else {
        alert("SELECIONE A CIDADE")
    }

}

document.addEventListener("keydown", function (event) {
    if (event.key === '.' || event.key === '.') {
        window.location.href = "escolha.html"
    }
    if (event.key === 'Enter') {
        vai();
    }
});