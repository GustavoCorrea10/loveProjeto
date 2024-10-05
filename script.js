function fuja(){
    const botaoNao = document.getElementById("nao")
    
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const maxX = larguraJanela - botaoNao.offsetWidth;
    const maxY = alturaJanela - botaoNao.offsetHeight;

    const aleatoriX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatoriX + "px"
    botaoNao.style.top = aleatorioY + "px"
}