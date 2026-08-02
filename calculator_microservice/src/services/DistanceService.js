const geolib = require('geolib');
// build service functions here and export so that controller has access to them

function meterDistance(startCoordinates, endCoordinates) {
    return geolib.getDistance(startCoordinates, endCoordinates);
}

function mileDistance(distanceInMeters) {
    return geolib.convertDistance(distanceInMeters, "mi")
}

function kmDistance(distanceInMeters) {
    return geolib.convertDistance(distanceInMeters, "km")
}


module.exports = {
    meterDistance,
    mileDistance,
    kmDistance
};

