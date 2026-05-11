var database = require("../database/config");

function buscarForuns() {

  var instrucaoSql = `SELECT * FROM postagem WHERE fkComentario IS NULL`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPost(idPost, idUsuario) {
  var instrucaoSql = `SELECT * FROM postagem WHERE idPostagem = ${idPost}
  JOIN usuario ON fkUsuario = ${idUsuario};`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function filtrarPosts(dtPostagem){
  console.log(dtPostagem)
  var instrucaoSql =  `SELECT * FROM postagem
  WHERE DATE(dtPostagem) = "${dtPostagem}";`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarForuns,
  buscarPost,
  filtrarPosts
}
