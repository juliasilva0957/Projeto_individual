let postagemModel = require("../models/postagemModel");

function buscarPostagem(req, res) {
    let idPost = req.params.idPost;

    postagemModel.buscarPostagem(idPost).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a postagem:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarComentarios(req, res) {
    let idPost = req.params.idPost;

    postagemModel.buscarComentarios(idPost).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os comentarios:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPostagem,
    buscarComentarios
}