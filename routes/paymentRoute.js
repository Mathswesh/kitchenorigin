const express = require("express")
const router = express.Router()
const paymentController = require("../Controller/paymentController.js")

router.post("/",paymentController.createPayment)
router.get("/",paymentController.getAllPayment)

module.exports = router