var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/", function (req, res) {
  forumController.buscarForuns(req, res);
});
router.get("/:idUsuario/:idPost",function (req, res) {
  forumController.buscarPost(req, res);
});

module.exports = router;