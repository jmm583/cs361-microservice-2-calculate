const express = require("express");
const router = express.Router();

const calculateController = require('../controllers/CalculateController')

// post router to the controller
router.post("/", calculateController.calculate);

module.exports = router;