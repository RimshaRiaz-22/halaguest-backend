const router = require("express").Router();
const controller= require("../controllers/paymentDetailController")

router.post("/createPayment" , controller.createPaymentDetail);
router.get("/allPayments" , controller.getAllpaymentDetails);
router.get("/specificPayment/:paymentId" , controller.getSpecificpaymentDetail);
router.delete("/deletePayment/:paymentId" , controller.deletepaymentDetail);
router.put("/updatePayment" , controller.updatePaymentDetail);

module.exports = router;

