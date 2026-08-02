const geolib = require('geolib');

// build service functions here and export so that controller has access to them

const meter_dist = geolib.getDistance(
    { latitude: testData1.startLatitude, longitude: testData1.startLongitude },
    { latitude: testData1.endLatitude, longitude: testData1.endLongitude }
);

const mile_dist = geolib.convertDistance( meter_dist, 'km' );

const km_dist = geolib.convertDistance( meter_dist, "mi" )

module.exports = {
    meter_dist,
    mile_dist,
    km_dist
}

// console.log(testData1.startLatitude)

// console.log("Distance (m): ", meter_dist);
// console.log("Distance (km): ", meter_dist);
// console.log("Distance (mi): ", meter_dist);