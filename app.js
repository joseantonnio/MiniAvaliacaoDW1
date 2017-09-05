/*
 * 
 * Funções Globais - Javascript
 * Autores: Alex Souza, Cesar Pierobom, José Silva
 * 
 * Instituto Federal de São Paulo campus São Carlos
 * The content of project is licensed under The Unlicense <http://unlicense.org/#the-unlicense>.
 * 
 */

// Exporta uma tabela para CSV
function exportarCsv() {

    // Declara variáveis
    var csv = "";
    var table = document.getElementById("exportar");

    // Realiza um laço nas linhas da tabela
    for (var i = 0, row; row = table.rows[i]; i++) {

        // Na linha atual, percorre as colunas
        for (var j = 0, col; col = row.cells[j]; j++) {

            // Adiciona um ponto e virgula entre cada coluna
            csv += row.cells[j].innerHTML + ";";

            // Se for a última coluna, pula uma linha
            if (j === (row.cells.length - 1)) {
                csv += "\n";
            }
        }
    }

    // Adiciona na área de texto
    document.getElementById("resultadocsv").value = csv;

    return;
}

// Verifica se um valor passado é do tipo object
function isObjeto(valor) {

    return typeof valor === 'object';
}

// Realiza a ordenação de duas listas de acordo com a posição declarada no data-posicao
function ordenar(lista1, lista2) {

    // Armazena as variaveis
    var total = lista1.options.length + lista2.options.length;
    var temporaria = new Array(total);

    // Percorre toda a array temporária criada
    for (var i = 0; i < temporaria.length; i++) {

        // Verifica se a opção na lista de DESTINO é indefinida
        if (typeof lista2.options[i] !== "undefined") {

            // Se a opção existir, armazena a posição do mesmo
            var pos = lista2.options[i].getAttribute('data-posicao');

            // Adiciona as informações da opção na array temporária
            temporaria[pos] = new Array();
            temporaria[pos][0] = lista2.options[i].text;
            temporaria[pos][1] = lista2.options[i].value;

            // Armazena a posição, já que a array vai ser filtrada
            temporaria[pos][2] = pos;
        }
    }

    // Limpa a lista de DESTINO
    while (lista2.options.length > 0) {
        lista2.options[0] = null;
    }

    // Remove tudo que não é objeto da array temporária
    temporaria = temporaria.filter(isObjeto);

    // Percorre a array temporária
    for (var i = 0; i < temporaria.length; i++) {

        // Cria uma nova opção para a lista
        var op = new Option(temporaria[i][0], temporaria[i][1]);

        // Adiciona o atributo com a posição original da mesma
        op.setAttribute("data-posicao", temporaria[i][2]);

        // Adiciona na lista de DESTINO
        lista2.options[i] = op;
    }

    return;
}

// Evento de transferencia
function transfereOpcoes(e, left) {

    // Armazena as informações basicas para iniciar a transferencia
    var atual = e.options[e.selectedIndex];
    var cursos = document.getElementById("cursos");
    var escolhidos = document.getElementById("cursos_escolhidos");

    // Verifica se é da esquerda para direita ou vice-versa
    if (left) {

        // Adiciona a opção atual na lista de destino
        escolhidos.options.add(atual);

        // Ordena as listas
        ordenar(cursos, escolhidos);
    } else {

        // Adiciona a opção atual na lista de destino
        cursos.options.add(atual);

        // Ordena as listas
        ordenar(escolhidos, cursos);
    }

    return;

}