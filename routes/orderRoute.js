const express = require("express")
const router = express.Router()
const orderController = require("../Controller/orderController.js")

router.post("/",orderController.createOrder)
router.get("/",orderController.getAllOrder)

module.exports = router