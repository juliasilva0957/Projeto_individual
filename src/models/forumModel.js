var database = require("../database/config");

function buscarForuns() {

  var instrucaoSql = `SELECT * FROM postagem WHERE fkComentario IS NULL`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPost(idPost, idUsuario) {
  var instrucaoSql = `SELECT p.*,u.imagemPerfil, u.nomeUsuario FROM postagem AS p 
  JOIN usuario AS s ON p.fkUsuario = u.idUsuario
  WHERE p.idPostagem = ${idPost};`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function filtrarPosts(dtPostagem){
  console.log(dtPostagem)
  var instrucaoSql =  `SELECT postagem.*,  
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
