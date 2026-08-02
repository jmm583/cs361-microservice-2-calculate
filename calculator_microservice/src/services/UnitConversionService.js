// Unit conversion service
// npm package: convert-units
// Check for incompatible units - respond with incompatible units response
// Check for non numeric values - respond with invalid parameter response

const convert = require('convert-units');

function convertUnits(value, unit1, unit2) {
    return convert(value).from(unit1).to(unit2)
}

module.exports = { convertUnits }