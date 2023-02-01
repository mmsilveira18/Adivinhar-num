var valorEscolhido = 0;
var valorSorteado = Math.floor(Math.random() * 100) + 1;

var tentativa = 5;
var acertou = false;
var fim = false;
botao.onclick = function () {
    if (!fim) {
        if (tentativa > 0 && !acertou) {
            var valorEscolhido = document.getElementById("Valor");
            if (valorEscolhido.value == valorSorteado)
                acertou = true;
            else {
                tentativa--;
                if (valorEscolhido.value > valorSorteado)
                    alert(
                        "O número é menor que " +
                        valorEscolhido.value +
                        "\n Você ainda tem " +
                        tentativa +
                        " tentativas restantes!"
                    );

                else
                    alert(
                        "O número é maior que " +
                        valorEscolhido.value +
                        "\n Você ainda tem " +
                        tentativa +
                        " tentativas restantes!"
                    );
            }
        } else {
            fim = true;
            if (!acertou)
                alert(
                    "Suas tentativas acabaram :/ \n O número sorteado era: " +
                    valorSorteado
                );
            else {
                alert("Acertou! Parabéns!!!");
            }
        }
    }
};


