const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Calculator microservice is running on http://localhost:${PORT}`);
});