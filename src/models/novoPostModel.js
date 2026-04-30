var database = require("../database/config");

function criarPost(titulo, post, fkUsuario, fkComentario) {
  var instrucaoSql = `
    INSERT INTO postagem (titulo, post, fkUsuario, fkComentario) 
    VALUES ('${titulo}', '${post}', ${fkUsuario}, ${fkComentario})
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  criarPost
}