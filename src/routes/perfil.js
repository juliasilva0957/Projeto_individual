let express = require("express");
let router = express.Router();

let perfilController = require("../controllers/perfilController");

router.get("/:idUsuario", function (req, res) {
  perfilController.buscarNome(req, res);
});

module.exports = router;
