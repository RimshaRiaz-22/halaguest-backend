const router = require("express").Router();
const controller= require("../controllers/invoiceAdminController")

router.post("/createInvoiceAdmin" , controller.createInvoiceAdmin);
router.put("/selectOrderForInvoice" , controller.pushOrderIdAdminInvoice);
router.post("/getInvoiceAdmin" , controller.getSpecificInvoiceAdmin);
router.get("/getAllInvoiceAdmin" , controller.getAllInvoices)
router.post("/getInvoicesAdminBetweenDates" , controller.getInvoicesBetweenDates)
router.post("/getInvoicesByStatus" , controller.getInvoicesByStatus);
router.post("/getAllInvoiceByHotelId" , controller.getAllInvoiceByHotelId);
router.post("/changeStatusInvoicing" , controller.changeStatusInvoicing);

module.exports = router;

