let perfilModel = require("../models/perfilModel");

function buscarNome(req, res) {
  let idUsuario = req.params.idUsuario;

  perfilModel.buscarNome(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o nome: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarNome
}