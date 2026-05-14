var registroModel = require("../models/registroModel");


function buscarNome(req, res) {
    var idUsuario = req.params.idUsuario;

    registroModel.buscarNome(idUsuario)
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

function buscarRegistros(req, res){
    var idUsuario = req.params.idUsuario;

    registroModel.buscarRegistros(idUsuario)
        .then(
            function (resultado){
                if(resultado.length > 0){
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
}

function filtrarPosts(req, res) {
  var dtPostagem = req.body.dtPostagem;
  console.log(dtPostagem)


  registroModel.filtrarPosts(dtPostagem).then((resultado) => {
    console.log(resultado)
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(200).json([])
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao filtrar os posts:", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage)
  });

}

module.exports = {
    buscarNome,
    buscarRegistros,
    filtrarPosts
}