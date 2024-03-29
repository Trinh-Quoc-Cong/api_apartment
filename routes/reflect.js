const reflectController = require("../controller/reflectController");

const router = require("express").Router();


router.post("/",reflectController.addNews);
router.get("/", reflectController.getAllNews);
router.get("/:id", reflectController.getANews);
router.put("/:id", reflectController.updateNews);
router.delete("/:id", reflectController.deleteNews);


module.exports = router; 