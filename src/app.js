const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// Start Connect to MongoDB with error handling

// End Connect to MongoDB

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// Start Listen on port 3000

// End Listen
