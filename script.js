let pontos = 0;

function responder(botao, correto) {
    if (botao.disabled) {
        return;
    }

    if (correto) {
        botao.classList.add("certo");
        pontos++;
    } else {
        botao.classList.add("errado");
    }

    let botoes = botao.parentElement.querySelectorAll("button");

    botoes.forEach(function(item) {
        item.disabled = true;
    });

    document.getElementById("resultado").innerText =
        "Pontuação: " + pontos;
}