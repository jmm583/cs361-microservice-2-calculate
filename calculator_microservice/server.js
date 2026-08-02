const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const calculateRoutes = require("./src/routes/CalculateRoutes");
// send only the server requests for /calculate to the router
app.use('/calculate', calculateRoutes);	

app.listen(PORT, () => {
console.log(`Calculator microservice is running on http://localhost:${PORT}`);
});