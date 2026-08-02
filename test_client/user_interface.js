const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const userPrompt = (question) => {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
		resolve(answer);
		});
	});
};

const main = async () => {
  while (true) {
    const serviceChoice = await userPrompt(`
        =====================================
        Calculate Microservice User Interface
        =====================================

        Please choose an operation:

        1. Unit Conversion
        2. Latitude/Longitude Distance
        3. Study Score Calculation
        4. Exit

        Choice: `);

    switch (serviceChoice) {
		case '1':
		// prompts user for unit conversion operation and value to convert
			const unitConversionChoice = await userPrompt(`
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
			// preps the http request body for the unit conversion operation
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
			const valueToConvert = await userPrompt(`Enter the value to convert from ${conversionOperation.from} to ${conversionOperation.to}: `);
			
			// creates object to hold the unit conversion operation and value to convert
			// converts value to float before sending HTTP request body
			const http_req_body_convert = {
				operation: "convert",
				value: parseFloat(valueToConvert),
				unitFrom: conversionOperation.from,
				unitTo: conversionOperation.to
			};
			console.log(http_req_body_convert);


			// sends an http request with http_req_body_convert to /calulate route 
			const response = await fetch('http://localhost:3000/calculate', {
				method: "POST",
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(http_req_body_convert)
			});

        break;

		case '2':
			// prompts user for latitude and longitude of two points
			const latitude1 = await userPrompt('Enter the latitude of the first point: ');
			const longitude1 = await userPrompt('Enter the longitude of the first point: ');
			const latitude2 = await userPrompt('Enter the latitude of the second point: ');
			const longitude2 = await userPrompt('Enter the longitude of the second point: ');


			// creates object to hold latitude and longitude inputs
			// converts latitude and longitude to float before sending HTTP request body
			const http_req_body_dist = {
				operation: "distance", 
				startLatitude: parseFloat(latitude1),
				startLongitude: parseFloat(longitude1),
				endLatitude: parseFloat(latitude2),
				endLongitude: parseFloat(longitude2)
			};
			console.log(http_req_body_dist);
		break;

		case '3':
		// prompts user for study score calculation inputs
			console.log('Study Score Calculation:');
			console.log('Please enter the following information:');
			const studyScore = await userPrompt('Enter the study score (0 to 5): ');
			const wifiScore = await userPrompt('Enter the WiFi score (0 to 5): ');
			const noiseScore = await userPrompt('Enter the noise score (0 to 5): ');
			const seatingScore = await userPrompt('Enter the seating score (0 to 5): ');
			const outletScore = await userPrompt('Enter the outlet score (0 to 5): ');
			const overallRating = await userPrompt('Enter the overall rating (0 to 5): ');
			
			// creates object to hold the study score calculation inputs
			// converts scores to integer before sending the HTTP request body
			const http_req_body_study = {
				operation: "studyScore",
				studyScore: parseInt(studyScore),
				wifiScore: parseInt(wifiScore),
				noiseScore: parseInt(noiseScore),
				seatingScore: parseInt(seatingScore),
				outletScore: parseInt(outletScore),
				overallRating: parseInt(overallRating)
			};
			console.log(http_req_body_study);
		break;

		case '4':
			console.log('Exiting...');
			rl.close();
			return;
		
		default:
		console.log('Invalid choice. Please try again.');
		}
	}
  console.log(serviceChoice);
};

main();