const express = require("express");
const app = express();
const PORT = 3000;

const calculateRoutes = require("./src/routes/CalculateRoutes");

app.use(express.json());

app.use('/calculate', calculateRoutes);	

app.listen(PORT, () => {
console.log(`Calculator microservice is running on http://localhost:${PORT}`);
});