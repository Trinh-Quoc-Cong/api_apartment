const newsController = require("../controller/newsController");

const router = require("express").Router();


router.post("/",newsController.addNews);
router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getANews);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);


module.exports = router; 