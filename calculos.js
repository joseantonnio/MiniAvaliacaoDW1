
/*
 * Função Calcular
 * Recebe como parametro uma string, que identifica qual a operação a ser utilizada no calculo
 */
function calculadora(operacao) {

    var valor1 = document.getElementById('numero1').value; // Armazena o valor do 1º número
    var valor2 = document.getElementById('numero2').value; // Armazena o valor do 2º número

    // Verifica se um dos campos está vazio
    if (valor1 == "" || valor2 == "") {

            $("#erro").slideDown("slow", function () {
                $(this).delay(1000);
                $(this).slideUp("fast");
            });
        
    } else {

        //Converte a variavel para inteiro
        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);

        // Verifica qual é a operação, e chama a função enviando como parametros, os 2 numeros para realizar os calculos
        if (operacao == "adicao") {

            adicao(valor1, valor2);

        } else if (operacao == "subtracao") {

            subtracao(valor1, valor2)

        } else if (operacao == "multiplicacao") {

            multiplicacao(valor1, valor2);

        } else if (operacao == "divisao") {

            divisao(valor1, valor2);

        } else {
            alert("Operação invalida!");
        }

    }

}

function adicao(valor1, valor2) {

    var resposta = valor1 + valor2;

    document.getElementById("resultado").value = resposta;
}
function multiplicacao(valor1, valor2) {

    var resposta = valor1 * valor2;
    document.getElementById("resultado").value = resposta;
}
function subtracao(valor1, valor2) {

    var resposta = valor1 - valor2;
    document.getElementById("resultado").value = resposta;
}
function divisao(valor1, valor2) {

    var resposta = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("resultado").value = resposta.toFixed(3);
    ;
}

