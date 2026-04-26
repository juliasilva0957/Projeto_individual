var formModel = require("../models/formModel");

function cadastrarInformacoes(req, res) {
    console.log(req.body)
    var tipo = req.body.tipo;
    var raca = req.body.raca;
    var senteAjudou = req.body.senteAjudou
    var tipoTranstorno = req.body.tipoTranstorno
    var teve = req.body.teve
    var descricao = req.body.descricao
    var fkUsuario = req.body.fkUsuario

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