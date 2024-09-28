const express = require("express")
const router = express.Router()
const cartController = require("../Controller/cartController.js")

router.post("/cart",cartController.createCart)
router.get("/",cartController.getAllCart)

module.exports = router