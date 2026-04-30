var novoPostModel = require("../models/novoPostModel");

function criarPost(req, res) {
  var titulo = req.body.titulo;
  var post = req.body.post;
  var fkUsuario = req.body.fkUsuario;
  var fkComentario = req.body.fkComentario || null

  novoPostModel.criarPost(titulo, post, fkUsuario, fkComentario).then((resultado) => {
    res.status(201).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao criar o post:", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  criarPost
}