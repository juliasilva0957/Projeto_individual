var forumoModel = require("../models/forumModel");

function buscarForuns(req, res) {
  var idUsuario = req.params.idUsuario;

  forumModel.buscarForuns(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os foruns: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarPost(req, res){
  var idPost = req.params.idPost;

  forumModel.buscarPost(idPost).then((resultado) =>{
    if(resultado.length > 0){
      res.status(200).json(resultado[0]);
    } else{
      res.status(204).json([])
    }
  }).catch(function(erro){
    console.log(erro);
    console.log("Houve um erro ao buscar o post:", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage)
  });
}

module.exports = {
  buscarForuns,
  buscarPost
}