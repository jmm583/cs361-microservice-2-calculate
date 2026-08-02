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
        ==========================================
        	Calculator Microservice Test Client
        ==========================================

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

			console.log(`You chose: ${unitConversionChoice}`);
			
			// Correct naming convention for the value to convert using npm module convert-units
			const conversionOperations = {
				'1': { from: "m",  to: "ft" },
				'2': { from: "ft", to: "m" },
				'3': { from: "mi", to: "km" },
				'4': { from: "km", to: "mi" },
				'5': { from: "kg", to: "lb" },
				'6': { from: "lb", to: "kg" },
				'7': { from: "C",  to: "F" },
				'8': { from: "F",  to: "C" }
			};

			// map the user choice to the corresponding conversion operation
			const conversionOperation = conversionOperations[unitConversionChoice];

			// prompt user for the value to convert
			const valueToConvert = await microsrvcPrompt(`Enter the value to convert from ${conversionOperation.from} to ${conversionOperation.to}: `);

			const http_req_body = {
				operation: conversionOperation,
				value: valueToConvert,
				unitFrom: conversionOperation.from,
				unitTo: conversionOperation.to
			};
			console.log(http_req_body);
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