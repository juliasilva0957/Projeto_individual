var database = require("../database/config");

function buscarForuns(idUsuario) {

  var instrucaoSql = `SELECT * FROM postagem WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPost(idPost) {
  var instrucaoSql = `SELECT * FROM postagem WHERE idPostagem = ${idPost}`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarForuns,
  buscarPost
}
