const unitConversionService = require("../services/UnitConversionService");
const distanceService = require("../services/DistanceService");
const studyScoreService = require("../services/StudyScoreService");

const calculate = async (req, res) => { 

    const url = "http://localhost:3000";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

    // if ( microServiceOperation === 'convert' ) {

    //     console.log(req.body);
    //     res.json({message: "user Interface reached controller"})

    // } else if ( microServiceOperation === 'distance ') {
        
    //     console.log(req.body);
    //     res.json({message: "user Interface reached controller"})

    // } else if ( microServiceOperation === 'studyScore' ) {

    //     console.log(req.body);
    //     res.json({message: "user Interface reached controller"})
    // }




// test for controller
// const calculate = (req, res) => {
//     console.log(req.body);

//     res.json({
//         message: "hit controller"
//     })
// }

module.exports = {calculate};