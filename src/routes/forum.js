let express = require("express");
let router = express.Router();

let forumController = require("../controllers/forumController");

router.get("/", function (req, res) {
  forumController.buscarForuns(req, res);
});
router.get("/:idUsuario/:idPost",function (req, res) {
  forumController.buscarPost(req, res);
});
router.post("/filtrar", function(req, res){
  console.log("cheguei aq")
  forumController.filtrarPosts(req, res)
});

module.exports = router;