const express = require("express")
const router = express.Router()
const reviewController = require("../Controller/reviewController.js")

router.post("/",reviewController.createReview)
router.get("/",reviewController.getAllReview)

module.exports = router