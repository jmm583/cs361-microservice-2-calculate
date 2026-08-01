const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const microsrvcPrompt = (askService) => {
	return new Promise((resolve) => {
		rl.question(askService, (answer) => {
		resolve(answer);
		});
	});
};

const main = async () => {
  while (true) {
    const srvcChoice = await microsrvcPrompt(`
        ========================================
            Calculator Microservice Test Client
        ========================================

        Please choose an operation:

        1. Unit Conversion
        2. Latitude/Longitude Distance
        3. Study Score Calculation
        4. Exit

        Choice: `);
	
	// initailize request_service variable to null
	let request_service = null;

	// set request_service based on user choice
	if (srvcChoice === '1') {
			request_service = "unit_conversion";
		} else if (srvcChoice === '2') {
			request_service = "lat_long_distance";
		} else if (srvcChoice === '3') {
			request_service = "study_score_calculation";
		};

	console.log(`Requesting service: ${request_service}`);

    switch (srvcChoice) {
		case '1':
		// call unit conversion microservice
			const unitConversionChoice = await microsrvcPrompt(`
				Please choose a unit conversion operation:

				1. Meters to Feet
				2. Feet to Meters
				3. Miles to Kilometers
				4. Kilometers to Miles
				5. Kilograms to Pounds
				6. Pounds to Kilograms
				7. Celsius to Fahrenheit
				8. Fahrenheit to Celsius

				Choice: `);

	
			const value1ToConvert = await microsrvcPrompt('Enter the first value to convert: ');
			const value2ToConvert = await microsrvcPrompt('Enter the second value to convert: ');

		

			const http_req_body = {
				operation: unitConversionChoice,
				value1: parseFloat(value1ToConvert),
				value2: parseFloat(value2ToConvert)
        	}

        break;


	case '2':
	// call latitude/longitude distance microservice
	break;
	case '3':
	// call study score calculation microservice
	break;

	case '4':
	console.log('Exiting...');
	rl.close();
	return;
	default:
	console.log('Invalid choice. Please try again.');
	}
  }
  console.log(srvcChoice);
};

main();