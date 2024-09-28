const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController.js")

router.post("/",userController.createUser)
router.get("/",userController.getAllUser)

module.exports = router