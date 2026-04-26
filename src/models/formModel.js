var database = require("../database/config");

function cadastrarInformacoes(tipo, raca, senteAjudou , tipoTranstorno , teve , descricao, fkUsuario) {

    var instrucaoSql = `INSERT INTO formCadastro(transtornoMental, momentosDificeis, comoAjudou, especie, raça, fkUsuario) VALUES(
        '${tipoTranstorno}', 
        ${senteAjudou},
        '${descricao}',
        ${tipo},
        '${raca}',
        ${fkUsuario}
    ) `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarInformacoes
}
