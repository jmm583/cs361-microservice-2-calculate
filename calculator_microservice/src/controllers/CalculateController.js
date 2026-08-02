const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");


async function calculate (req, res) {
    console.log(req.body);
    console.log(req.body.operation);
    const serviceOperation = req.body.operation;

    switch(serviceOperation) {
        case "convert":
            console.log("CONVERT");
        break;

        case "distance":
            
            console.log("DISTANCE");
            // async function to send 
            const distServiceReqBody = req.body;

        break;

        case "studyScore":
            console.log("STUDY SCORE");
        break;
    }

    res.json({message: "hit controller"})

}

module.exports = {calculate};