const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const passport = require("passport");
const users = require("./routes/userRoute");

// Connect Database
connectDB();

//Events
const eventRoute = require("./routes/eventRoute");
app.use("/events", eventRoute);

//EventsBooking
const eventBookingRoute = require("./routes/eventBookingRoute");
app.use("/events/booking", eventBookingRoute);

const hotelListRoute = require("./routes/hotelRoute");
app.use("/hotels", hotelListRoute);

//Flights
const flightRoute = require("./routes/FlightRoute");
app.use("/flights", flightRoute);

//FlightBooking
const flightBookingRoute = require("./routes/FlightBookingRoute");
app.use("/flightbookings", flightBookingRoute);

//Tour
const tourRoute = require("./routes/tourPackageRoute");
app.use("/tours", tourRoute);

//TourBooking
const tourBookingRoute = require("./routes/tourBookingRoute");
app.use("/tours/booking", tourBookingRoute);

// Cart
const cartRoute = require("./routes/cartRoute");
app.use("/cart", cartRoute);

// Wallet
const walletRoute = require("./routes/walletRoute");
app.use("/wallet", walletRoute);

const OffersRoute = require("./routes/offersRoute");
app.use("/offers", OffersRoute);

const PaymentRoute = require("./routes/paymentRoute");
app.use("/payment", PaymentRoute);

//Users
const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.listen(process.env.PORT || 5001, () => {
  console.log("server started");
});

//references for passport and encryption
//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
