const router = require("express").Router();
const controller= require("../controllers/notificationController")

router.post("/createNotificationId" , controller.createNotificationDetail);
router.get("/allNotificationIds" , controller.getAllNotificationDetails);
router.get("/specificNotificationId/:NotificationId" , controller.getSpecificNotificationDetail);
router.delete("/deleteNotificationId/:NotificationId" , controller.deleteNotificationDetail);
router.put("/updateNotificationId" , controller.updateNotificationDetail);
router.put("/changeStatusNotification" , controller.changeStatusNotificationDetail);
router.get("/getToNotifications/:ToId" , controller.getToNotification);

module.exports = router;

