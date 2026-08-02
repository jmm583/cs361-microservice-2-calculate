# cs361-calculator-microservice

### Technologies Used
Node.js for runtime
Express.js for routing, middleware, request/response handling

### Prerequesites
-- Node.js
-- node packet manager (npm)

### Node Packages:
-- convert-units   -- Used for unit conversion operations

-- geolib          -- Used for distance calculation between latitude/longitude coordinates for distance operations

### Instructions for Demonstration
1) open a terminal
2) navigate to directory /calculator_microservice 
3) initialize the node server by entering the following bash commands:
        - npm install
        - npm start
4) open a second terminal
5) navigate to the /test_client directory
6) start the test_client interface by entering the following command:
        - node user_interface.js
7) follow the prompts by entering requested

### Microservice Implementation Instructions
1) Add a POST route in your application https router to /calculate
2) Format your http request body as a JSON object. The microservice handles 3 operations

    Operation 1: UNIT CONVERSION -- converts one unit of measurement to another
                                        -- for list of packaged units https://github.com/convert-units/convert-units#request-measures--units
    ```js
    const http_req_body = {

        operation: "convert",                           // must remain "convert"
        value: parseFloat(valueToConvert),
        unitFrom: conversionOperation.from,     
        unitTo: conversionOperation.to

    };
    ```
                
    Operation 2: LATITUDE/LONGITUDE DISTANCE CALCULATION -- calculates the distance between two LATITUDE/LONGITUDE coordinates
                
    ```js
    const http_req_body = {

        operation: "distance",                          // must remain "distance"
        startLatitude: parseFloat(latitude1),
        startLongitude: parseFloat(longitude1),
        endLatitude: parseFloat(latitude2),
        endLongitude: parseFloat(longitude2)

    };
    ```
            
     Operation 3: Study/Score Calculation

    ```js
    const http_req_body = {

        operation: "studyScore",                        // must remain "studyScore"
        studyScore: parseInt(studyScore),
        wifiScore: parseInt(wifiScore),
        noiseScore: parseInt(noiseScore),
        seatingScore: parseInt(seatingScore),
        outletScore: parseInt(outletScore),
        overallRating: parseInt(overallRating)

    };
    ```
                  
## Microservice Implementation Instructions cont...
4) Send an http POST request to /calculate

    ```js
    const response = await fetch('http://localhost:3000/calculate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(http_req_body)
    });
    ```

5) Add a response listener to receive the response from the microservice operation

    ```js
    const data = await response.json();
    console.log(data);
    ```

    The `data` variable contains the HTTP response payload returned by the microservice

    Example HTTP response:

        ```js
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: '{"operationPerformed":"distance","meterDist":179611,"kmDist":179.611,"miDist":111.60510120893979}'
        }
        ```
    
## References
- Express.js Router API:
  https://expressjs.com/en/5x/api/router/

- Express.js Middleware Guide:
  https://expressjs.com/en/guide/using-middleware.html

- Express Routing & Architecture:
  https://caffeinecoding.com/better-express-routing-for-nodejs/

- Using the Fetch API:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- Code Fencing for Readme
  https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks 

 - npm convert-units
  https://www.npmjs.com/package/@types/convert-units

 - npm geolib
  https://www.npmjs.com/package/geolib