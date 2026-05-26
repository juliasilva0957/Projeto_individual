let diarioModel = require("../models/diarioModel");


function pegarNome(req, res) {
    let idUsuario = req.params.idUsuario;

    diarioModel.pegarNome(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os registros: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    let selecionarEmocao = req.body.selecionar;
    let descricao = req.body.descricao;
    let idUsuario = req.params.idUsuario;
    console.log(req.params)
    console.log(req.body)

    if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        diarioModel.publicar(selecionarEmocao, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o registro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    // listarPorUsuario,
    pegarNome,
    publicar
}