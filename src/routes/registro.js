let express = require("express");
let router = express.Router();

let registroController = require("../controllers/registroController");

router.get("/listar/:idUsuario", function (req, res) {
    registroController.buscarNome(req, res);
});

router.get("/listar/registros/:idUsuario", function (req, res){
    registroController.buscarRegistros(req, res);
});
router.post("/filtrar", function(req, res){
  console.log("cheguei aq")
  registroController.filtrarPosts(req, res)
});


module.exports = router;