const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");


async function calculate (req, res) {
    console.log(req.body);
    const serviceOperation = req.body.operation;

    switch(serviceOperation) {

        // CALL CONVERT SERVICE FUNCTIONS
        case "convert": {
            console.log("CONVERT");
            
            const convertedUnitValue = unitConversionService.convertUnits(req.body.value, req.body.unitFrom, req.body.unitTo);
            console.log(convertedUnitValue);

            httpResBody = {
                operationPerformed: req.body.operation,
                unitFrom: req.body.unitFrom,
                unitTo: req.body.unitTo,
                convertedValue: convertedUnitValue
            }

            res.json({
                method: "POST",
                headers: { "Content-Type": "application/json" },
				body: JSON.stringify(httpResBody)
            })

        break;
        };


        // CALL DISTANCE SERVICE FUNCTIONS 
        case "distance": {

            const meterDist = distanceService.meterDistance(
                { latitude: req.body.startLatitude, longitude: req.body.startLongitude },
                { latitude: req.body.endLatitude, longitude: req.body.endLongitude }
            );

            const kmDist = distanceService.kmDistance(meterDist);
            const miDist = distanceService.mileDistance(meterDist);

            httpResBody = {
                operationPerformed: req.body.operation,
                meterDist: meterDist,
                kmDist: kmDist,
                miDist: miDist
            }

            res.json({
                method: "POST",
                headers: { "Content-Type": "application/json" },
				body: JSON.stringify(httpResBody)
            });

        break;
        };


        // CALL STUDY SCORE SERVICE FUNCTIONS
        case "studyScore": {
            console.log("STUDY SCORE");
        break;
        };
    }
}

module.exports = {calculate};