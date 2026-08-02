const geolib = require('geolib');
// build service functions here and export so that controller has access to them

function meterDistance(startCoordinates, endCoordinates) {
    return geolib.getDistance(startCoordinates, endCoordinates);
}

function mileDistance() {
    return geolib.convertDistance()
}

function kmDistance() {
    return geolib.convertDistance()
}


module.exports = {
    meterDistance,
    mileDistance,
    kmDistance
};

