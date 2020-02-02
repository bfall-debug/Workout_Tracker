const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");


const PORT = process.env.PORT || 3000;
const app = express();

const dbName = "workout_db";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

mongoose.connect("mongodb://workoutTracker:password1@ds061731.mlab.com:61731/heroku_phddc0g5" || "mongodb://localhost/workout_db", 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log(`Successfully connected to database: ${dbName}`));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
