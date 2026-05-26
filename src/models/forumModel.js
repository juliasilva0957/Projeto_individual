let database = require("../database/config");

function buscarForuns() {

  let instrucaoSql = `SELECT *, DATE_FORMAT(dtPostagem, '%d/%m/%Y') AS dtPostagem 
  FROM postagem WHERE fkComentario IS NULL
  ORDER BY idPostagem DESC`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPost(idPost, idUsuario) {
  let instrucaoSql = `SELECT p.*, u.nomeUsuario FROM postagem AS p 
  JOIN usuario AS s ON p.fkUsuario = u.idUsuario
  WHERE p.idPostagem = ${idPost};`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function filtrarPosts(dtPostagem){
  console.log(dtPostagem)
  let instrucaoSql =  `SELECT postagem.*,
    DATE_FORMAT(dtPostagem, '%d/%m/%Y') AS dtPostagem,
    usuario.nome
    FROM postagem
    JOIN usuario ON postagem.fkUsuario = usuario.idUsuario
    WHERE DATE(postagem.dtPostagem) = "${dtPostagem}";`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarForuns,
  buscarPost,
  filtrarPosts
}
