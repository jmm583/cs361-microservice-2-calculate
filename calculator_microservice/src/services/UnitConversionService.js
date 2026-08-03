// Unit conversion service
// npm package: convert-units

const convert = require('convert-units');

function convertUnits(value, unit1, unit2) {
    return convert(value).from(unit1).to(unit2)
}

module.exports = { convertUnits }
