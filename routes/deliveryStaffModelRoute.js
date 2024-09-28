const express = require("express")
const router = express.Router()
const deliveryStaffController = require("../Controller/deliveryStaffController")

router.post("/",deliveryStaffController.createdDeliveryStaff)
router.get("/",deliveryStaffController.getAllDeliveryStaff)

module.exports = router