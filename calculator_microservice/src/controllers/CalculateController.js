const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");


async function calculate (req, res) {
    console.log(req.body);
    console.log(req.body.operation)

    res.json({message: "hit controller"})
}

module.exports = {calculate};