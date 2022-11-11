const router = require("express").Router();
const controller= require("../controllers/driver_documentsController")

router.get("/alldriverDocs" ,controller.getAlldriverDocs)
router.get("/specificdriverDoc/:docId" , controller.getSpecificdriverDoc)
router.delete("/deletedriverDoc/:docId" , controller.deletedriverDoc);
router.post("/createdriverDoc" , controller.createdriverDoc);
router.put("/updatedriverDoc" , controller.updatedriverDoc);

module.exports = router;