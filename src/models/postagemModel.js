var database = require("../database/config");

function buscarPostagem(idPost) {
    var instrucaoSql = `SELECT p.*, u.nomeUsuario
        FROM postagem AS p
        JOIN usuario AS u ON p.fkUsuario = u.idUsuario
        WHERE p.idPostagem = ${idPost}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarComentarios(idPost) {
    var instrucaoSql = `SELECT p.*, u.nomeUsuario
        FROM postagem AS p
        JOIN usuario AS u ON p.fkUsuario = u.idUsuario
        WHERE p.fkComentario = ${idPost}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPostagem,
    buscarComentarios
}