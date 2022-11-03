const router = require("express").Router();
const controller= require("../controllers/dispacherController")

router.get("/allDispachers" ,controller.getAllDispachers)
router.get("/specificDispacher/:dispacherId" , controller.getSpecificDispacher)
router.delete("/deleteDispacher/:dispacherId" , controller.deleteDispacher);
router.post("/createDispacher" , controller.createDispacher);
router.put("/updateDispacher" , controller.updateDispacher);

module.exports = router;

