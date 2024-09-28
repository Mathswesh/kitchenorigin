const express = require("express")
const router = express.Router()
const roleController = require("../Controller/roleController.js")

router.post("/",roleController.createRole)
router.get("/",roleController.getAllRole)

module.exports = router