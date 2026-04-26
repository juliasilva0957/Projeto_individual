var database = require("../database/config");

function cadastrarInformacoes(tipo, raca, senteAjudou , tipoTranstorno , teve , descricao, fkUsuario) {

    var instrucaoSql = `INSERT INTO formCadastro(transtornoMental, momentosDificei, comoAjudou, especie, raça, fkUsuario) VALUES(
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
// CREATE TABLE formCadastro (
// idForm INT PRIMARY KEY AUTO_INCREMENT ,
// transtornoMental BOOLEAN,
// momentosDificeis BOOLEAN,
// comoAjudou VARCHAR(255),
// especie BOOLEAN,
// raça VARCHAR(50),
// fkUsuario INT,
// CONSTRAINT chFkUsuario
// FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
// );
