const router = require("express").Router();
const controller= require("../controllers/invoiceController")

router.post("/createInvoice" , controller.createInvoice);
router.get("/allInvoices" , controller.getAllInvoices);
router.get("/specificInvoice/:InvoiceId" , controller.getSpecificInvoice);
router.delete("/deleteInvoice/:InvoiceId" , controller.deleteInvoice);
router.put("/updateInvoice" , controller.updateInvoice);
module.exports = router;

