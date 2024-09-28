const express = require("express")
const router = express.Router()
const deliveryController = require("../Controller/deliveryController")

router.post("/",deliveryController.createDelivery)
router.get("/",deliveryController.getAlldelivery)

module.exports = router