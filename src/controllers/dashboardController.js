let dashboardModel = require("../models/dashboardModel");

function buscarKpi(req, res) {
  let idUsuario = req.params.idUsuario;

  dashboardModel.buscarKpi(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado[0]);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarAtividade(req, res) {
  let idUsuario = req.params.idUsuario;

  dashboardModel.buscarAtividade(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarRaca(req, res) {
  let idUsuario = req.params.idUsuario;

  dashboardModel.buscarRaca(idUsuario)
    .then(function (resultado) {
    res.status(200).json(resultado[0]);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarEmocoes(req, res) {
  let idUsuario = req.params.idUsuario;

  dashboardModel.buscarEmocoes(idUsuario).then(function (resultado) {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function filtrarDashboard(req, res) {
  let idUsuario = req.params.idUsuario;
  let mes = req.body.mes
  
  dashboardModel.filtrarDashboard(idUsuario, mes)
    .then(function(resultado) {
      res.status(200).json(resultado);
    }).catch(function(erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarKpi,
  buscarAtividade,
  buscarRaca,
  buscarEmocoes,
  filtrarDashboard
};