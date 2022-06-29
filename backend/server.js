const express = require("express");
const app = express();
const userRoute = require("./routes");

app.use("/", userRoute);

app.listen(process.env.PORT || 5001, () => {
	console.log("server started");
});
