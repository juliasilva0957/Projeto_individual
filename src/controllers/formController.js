let formModel = require("../models/formModel");

function cadastrarInformacoes(req, res) {
    console.log(req.body)
    let tipo = req.body.tipo;
    let raca = req.body.raca;
    let senteAjudou = req.body.senteAjudou
    let tipoTranstorno = req.body.tipoTranstorno
    let teve = req.body.teve
    let descricao = req.body.descricao
    let fkUsuario = req.body.fkUsuario

    formModel.cadastrarInformacoes(tipo, raca, senteAjudou , tipoTranstorno , teve , descricao, fkUsuario)
        .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }



module.exports = {
    cadastrarInformacoes
}