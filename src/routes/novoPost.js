let express = require("express");
let router = express.Router();

let novoPostController = require("../controllers/novoPostController");

router.post("/", function (req, res) {
  novoPostController.criarPost(req, res);
});

module.exports = router;