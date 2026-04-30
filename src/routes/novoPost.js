var express = require("express");
var router = express.Router();

var novoPostController = require("../controllers/novoPostController");

router.post("/", function (req, res) {
  novoPostController.criarPost(req, res);
});

module.exports = router;