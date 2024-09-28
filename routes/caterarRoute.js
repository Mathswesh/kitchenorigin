const express = require("express")
const router = express.Router()
const caterarController = require("../Controller/caterarController.js")

router.post("/",caterarController.createCaterar)
router.get("/",caterarController.getAllCaterar)

module.exports = router