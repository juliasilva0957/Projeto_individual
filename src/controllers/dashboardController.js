var dashboardModel = require("../models/dashboardModel");

function buscarKpis(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarKpis(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado[0]);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarAtividade(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarAtividade(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarRaca(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarRaca(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado[0]);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarEmocoes(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarEmocoes(idUsuario).then(function (resultado) {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarKpis,
  buscarAtividade,
  buscarRaca,
  buscarEmocoes
};