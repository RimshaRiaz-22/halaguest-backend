const router = require("express").Router();
const controller= require("../controllers/comissionController")

router.get("/allComissions" ,controller.getAllComission)
router.delete("/deleteComission/:ComissionId" , controller.deleteComission);
router.post("/createComission" , controller.createComission);
router.put("/updateComission" , controller.updateComission);

module.exports = router;