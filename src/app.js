const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// Start Connect to MongoDB with error handling
mongoose
  .connect(
    ("mongodb://localhost:27017/school")
  )
  .then(() => console.log("Connection to MongoDB successful!"))
  .catch((err) => console.log(err));
// End Connect to MongoDB


// Start Listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"));
// End Listen
