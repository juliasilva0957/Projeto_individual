let database = require("../database/config");

function buscarKpi(idUsuario) {
    let instrucaoSql = `
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
    let instrucaoSql = `
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
    let instrucaoSql = `
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
    let instrucaoSql = `
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

function filtrarDashboard(idUsuario, mes) { /*para filtrar a dash, preciso fazer o model de cada KPI e grafico, que assim que o usuario filtrar em algum do select, entra aqui e faz os models(se der tempo vou implementar VIEW pra ficar mais facil) */
    let instrucaoSqlKpi = `
        SELECT 
            COUNT(CASE 
                WHEN fkComentario IS NULL 
                AND MONTH(dtPostagem) = ${mes}
                AND YEAR(dtPostagem) = YEAR(CURRENT_DATE())
                THEN 1 
            END) AS totalPostsMes,
            COUNT(DISTINCT DATE(dtPostagem)) AS diasInteragidos
        FROM postagem
        WHERE fkUsuario = ${idUsuario}
        AND MONTH(dtPostagem) = ${mes}
        AND YEAR(dtPostagem) = YEAR(CURRENT_DATE());
    `;

    let instrucaoSqlAtividade = `
        SELECT 
            DAY(dtPostagem) AS dia,
            COUNT(CASE WHEN fkComentario IS NULL THEN 1 END) AS posts,
            COUNT(CASE WHEN fkComentario IS NOT NULL THEN 1 END) AS comentarios
        FROM postagem
        WHERE fkUsuario = ${idUsuario}
        AND MONTH(dtPostagem) = ${mes}
        AND YEAR(dtPostagem) = YEAR(CURRENT_DATE())
        GROUP BY dia
        ORDER BY dia;
    `;

    let instrucaoSqlEmocoes = `
        SELECT 
            emocao AS nomeEmocao,
            COUNT(*) AS quantidade
        FROM emocao
        WHERE fkUsuario = ${idUsuario}
        AND MONTH(dtRegsitro) = ${mes}
        AND YEAR(dtRegsitro) = YEAR(CURRENT_DATE())
        GROUP BY emocao
        ORDER BY quantidade DESC;
    `;

    let resultado = {};

    return database.executar(instrucaoSqlKpi)
        .then(function(kpi) {
            resultado.kpi = kpi[0];
            return database.executar(instrucaoSqlAtividade);
        })
        .then(function(atividade) {
            resultado.atividade = atividade;
            return database.executar(instrucaoSqlEmocoes);
        })
        .then(function(emocoes) {
            resultado.emocoes = emocoes;
            return resultado;
        });
}

module.exports = {
    buscarKpi,
    buscarAtividade,
    buscarRaca,
    buscarEmocoes,
    filtrarDashboard
};