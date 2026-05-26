let database = require("../database/config");

function buscarNome(idUsuario) {

  let instrucaoSql = `SELECT nome,email,transtornoMental,
                        CASE
                        WHEN momentosDificeis = 0 THEN ('Sim')
                        ELSE ('Não')
                        END AS momentosDificeis,
                        comoAjudou FROM usuario
                      JOIN formCadastro ON fkUsuario = idUsuario
                      WHERE idUsuario = ${idUsuario} ;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarNome
}