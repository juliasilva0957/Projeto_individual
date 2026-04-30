var database = require("../database/config");

function buscarPostagem(idPost) {
    var instrucaoSql = `SELECT * FROM postagem WHERE idPostagem = ${idPost}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarComentarios(idPost) {
    var instrucaoSql = `SELECT * FROM postagem WHERE fkComentario = ${idPost}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPostagem,
    buscarComentarios
}