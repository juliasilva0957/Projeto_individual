var database = require("../database/config");

function buscarNome(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT nome FROM usuario 
        WHERE idUsuario = ${idUsuario} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRegistros(idUsuario){
    console.log("Acessei o registro de emoções");

    var instrucaoSql = ` SELECT * from emocao
    WHERE fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql )
    return database.executar(instrucaoSql)
}

function filtrarPosts(dtPostagem){
  console.log(dtPostagem)
  var instrucaoSql =  `SELECT * FROM emocao
    JOIN usuario ON emocao.fkUsuario = usuario.idUsuario
    WHERE DATE(emocao.dtRegistro) = "${dtPostagem}";`
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = {
  buscarNome,
  buscarRegistros, 
  filtrarPosts
}