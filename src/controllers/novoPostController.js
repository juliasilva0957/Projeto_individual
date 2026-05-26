let novoPostModel = require("../models/novoPostModel");

function criarPost(req, res) {
  let titulo = req.body.titulo;
  let post = req.body.post;
  let fkUsuario = req.body.fkUsuario;
  let fkComentario = req.body.fkComentario || null

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