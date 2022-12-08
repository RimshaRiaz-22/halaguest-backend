const router = require("express").Router();
const controller= require("../controllers/invoiceAdminController")

router.post("/createInvoiceAdmin" , controller.createInvoiceAdmin);
router.put("/selectOrderForInvoice" , controller.pushOrderIdAdminInvoice);
router.post("/getInvoiceAdmin" , controller.getSpecificInvoiceAdmin);
router.get("/getAllInvoiceAdmin" , controller.getAllInvoices)
router.post("/getInvoicesAdminBetweenDates" , controller.getInvoicesBetweenDates)
router.post("/getInvoicesByStatus" , controller.getInvoicesByStatus);

// router.post("/getAllInvoiceAdmin" , controller.getSpecificInvoiceAdmin);
;

// router.get("/allInvoices" , controller.getAllInvoices);
// router.get("/specificInvoice/:InvoiceId" , controller.getSpecificInvoice);
// router.delete("/deleteInvoice/:InvoiceId" , controller.deleteInvoice);

// router.put("/updateInvoice" , controller.updateInvoice);
// router.get("/getDriverTransactionCompleted/:driver_id" , controller.getDriverTransactionCompleted);
// router.get("/getGuestsTransactionCompleted/:guest_id" , controller.getGuestsTransactionCompleted);
// router.get("/getHotelTransactionCompleted/:hotel_id" , controller.getHotelTransactionCompleted);
// router.get("/getOrderTransactionCompleted/:order_id" , controller.getOrderTransactionCompleted);

// router.post("/getInvoicesBetweenDates" , controller.getInvoicesBetweenDates);

// router.post("/getInvoicesByStatus" , controller.getInvoicesByStatus);

module.exports = router;

