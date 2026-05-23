var database = require("../database/config");

function buscarKpi(idUsuario) {
    var instrucaoSql = `
        SELECT 
            COUNT(CASE 
                WHEN fkComentario IS NULL 
                AND MONTH(dtPostagem) = MONTH(CURRENT_DATE())
                AND YEAR(dtPostagem) = YEAR(CURRENT_DATE())
                THEN 1 
            END) AS totalPostsMes,

            COUNT(DISTINCT DATE(dtPostagem)) AS diasInteragidos
        FROM postagem
        WHERE fkUsuario = ${idUsuario};
    `;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAtividade(idUsuario) {
    var instrucaoSql = `
        SELECT 
            DAY(dtPostagem) AS dia,
            COUNT(CASE WHEN fkComentario IS NULL THEN 1 END) AS posts,
            COUNT(CASE WHEN fkComentario IS NOT NULL THEN 1 END) AS comentarios
        FROM postagem
        WHERE fkUsuario = ${idUsuario}
        AND MONTH(dtPostagem) = MONTH(CURRENT_DATE())
        AND YEAR(dtPostagem) = YEAR(CURRENT_DATE())
        GROUP BY dia
        ORDER BY dia;
    `;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRaca(idUsuario) {
    var instrucaoSql = `
        SELECT 
            fc.raça AS racaUsuario,
            ROUND(
                (
                    SELECT COUNT(*) 
                    FROM formCadastro 
                    WHERE raça = (
                        SELECT raça 
                        FROM formCadastro 
                        WHERE fkUsuario = ${idUsuario}
                    )
                ) * 100 /
                (SELECT COUNT(*) FROM formCadastro)
            ) AS porcentagem
        FROM formCadastro fc
        WHERE fc.fkUsuario = ${idUsuario};
    `;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEmocoes(idUsuario) {
    var instrucaoSql = `
        SELECT 
            emocao AS nomeEmocao,
            COUNT(*) AS quantidade
        FROM emocao
        WHERE fkUsuario = ${idUsuario}
        GROUP BY emocao
        ORDER BY quantidade DESC;
    `;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpi,
    buscarAtividade,
    buscarRaca,
    buscarEmocoes
};