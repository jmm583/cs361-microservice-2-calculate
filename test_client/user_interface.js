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

    switch (srvcChoice) {
      case '1':
        // call unit conversion microservice
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
