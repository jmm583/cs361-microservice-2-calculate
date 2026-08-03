const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");


async function calculate (req, res) {
    
    const serviceOperation = req.body.operation;

    switch(serviceOperation) {

        // CALL CONVERT SERVICE FUNCTIONS
        case "convert": {
            console.log("CONVERT OP REQUESTED");
            console.log("HTTP REQUEST BODY: ", req.body)
            
            const convertedUnitValue = unitConversionService.convertUnits(req.body.value, req.body.unitFrom, req.body.unitTo);
            console.log(convertedUnitValue);
            
            httpResBody = {
                operationPerformed: req.body.operation,
                unitFrom: req.body.unitFrom,
                unitTo: req.body.unitTo,
                convertedValue: convertedUnitValue
            };
            console.log("CONVERT OP HTTP POST RESPONSE BODY", httpResBody);

            res.json({
                method: "POST",
                headers: { "Content-Type": "application/json" },
				body: JSON.stringify(httpResBody)
            })

        break;
        };

        // CALL DISTANCE SERVICE FUNCTIONS 
        case "distance": {

            console.log("DISTANCE OP REQUESTED")
            console.log("HTTP REQUEST BODY: ", req.body)

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
            };
            console.log("DISTANCE OP HTTP RES BODY", httpResBody);

            res.json({
                method: "POST",
                headers: { "Content-Type": "application/json" },
				body: JSON.stringify(httpResBody)
            });

        break;
        };

        // CALL STUDY SCORE SERVICE FUNCTIONS
        case "studyScore": {

            console.log("STUDY SCORE OP REQUESTED")
            console.log("HTTP REQUEST BODY: ", req.body)
            
            const studyScore = studyScoreService.studyScore (
                                req.body.wifiScore, req.body.noiseScore, 
                                req.body.seatingScore, req.body.outletScore, 
                                req.body.overallRating
                            );

            const httpResBody = {
                operationPerformed: req.body.operation,
                studyScore: studyScore
            };
            console.log("STUDY SCORE OP HTTP RES BODY", httpResBody);


            res.json({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(httpResBody)
            });

        break;
        };
    }
}

module.exports = {calculate};