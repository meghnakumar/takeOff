const express = require("express");
const connectDB = require("./config/db");
const app = express();
// Connect Database
connectDB();

//Events
const eventRoute = require("./routes/eventRoute");
app.use("/events", eventRoute);

app.listen(process.env.PORT || 5001, () => {
	console.log("server started");
});
