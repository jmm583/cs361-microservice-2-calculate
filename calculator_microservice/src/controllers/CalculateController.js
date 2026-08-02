const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");

// exports.calculate = async (req, res) => { 

//     const microServiceOperation = req.body.operation

//     if ( microServiceOperation === 'convert' ) {

//     } else if ( microServiceOperation === 'distance ') {

//     } else if ( microServiceOperation === 'studyScore' ) {

//     }

// }


// test for controller
const calculate = (req, res) => {
    console.log(req.body);

    res.json({
        message: "hit controller"
    })
}

module.exports = {calculate};