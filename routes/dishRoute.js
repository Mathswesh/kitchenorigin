const express = require("express")
const router = express.Router()
const dishController = require("../Controller/dishController.js")

router.post("/",dishController.createDish)
router.get("/",dishController.getAllDish)

module.exports = router