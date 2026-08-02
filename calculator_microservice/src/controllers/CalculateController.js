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

            // console.log("DISTANCE");
            const dist = distanceService.meterDistance(
                { latitude: req.body.startLatitude, longitude: req.body.startLongitude },
                { latitude: req.body.endLatitude, longitude: req.body.endLongitude }
            )

            console.log("Distance from NY to Boston is: ", dist)

        break;

        case "studyScore":
            console.log("STUDY SCORE");
        break;
    }

    res.json({message: "hit controller"})

}

module.exports = {calculate};