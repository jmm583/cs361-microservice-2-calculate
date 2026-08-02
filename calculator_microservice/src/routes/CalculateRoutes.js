const express = require("express");
const router = express.Router();

const calculateController = require('../controllers/CalculateController')

router.post("/", calculateController.calculate);

module.exports = router;