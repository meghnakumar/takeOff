import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Events from "./components/Events/Events.jsx";
import BookingEvents from "./components/Events/BookingEvents";
import Dashboard from "./components/Hotels/Dashboard";
import Offers from "./components/Offers/Offers";
import TourPackages from "./components/TourPackages/TourPackages";
import BookingTours from "./components/TourPackages/BookingTour";
import Bus from "./components/Bus/Bus";
import HotelDetail from "./components/Hotels/HotelDetail/HotelDetail";
import Dashboard2 from "./components/Hotels/Dashboard";
import Bookings from "./components/Hotels/Bookings/Bookings";
import Payment from "./components/Payment/Payment";
import ReadReviews from "./components/Hotels/Reviews/ReadReviews";
import FlightDetails from "./components/Flights/FlightDetails/FlightDetails";
import Wallet from "./components/Wallet/Wallet";
import Cart from "./components/Cart/Cart";
import Login from "./components/Registration/Login";
import SignUp from "./components/Registration/SignUp";
import Reset from "./components/Registration/Reset";
import Logout from "./components/Registration/Logout";
import Profile from "./components/Profile/Profile";
import FlightBookings from "./components/Flights/FlightBookings/FlightBookings";

//event management imports
import EventContext from "./context/eventContext";
import { getEvents } from "./services/eventServices";

function App() {
	const location = useLocation();
	const [ishome, setHome] = useState(false);

	const [events, setEvents] = useState([]);
	useEffect(() => {
		if (location.pathname === "/" || location.pathname === "/home") {
			setHome(true);
		} else {
			setHome(false);
		}

		const getData = async () => {
			const { data: dataEvents } = await getEvents();
			setEvents(dataEvents);
		};

		getData();
	}, []);

	return (
		<EventContext.Provider value={{ events }}>
			<div className="App">
				{ishome ? (
					<></>
				) : (
					<div>
						<Header></Header> <div className="header-footer-margin"></div>
					</div>
				)}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="flights" element={<Flights />} />
					<Route path="flight-details" element={<FlightDetails />} />
					<Route path="flight-bookings" element={<FlightBookings />} />
					<Route path="booking" element={<Bookings />} />
					<Route path="events" element={<Events />} />
					<Route path="events-booking" element={<BookingEvents />} />
					<Route path="hotels" element={<Dashboard2 />} />
					<Route path="tour-packages" element={<TourPackages />} />
					<Route path="tour-booking" element={<BookingTours />} />
					<Route path="Offers" element={<Offers />} />
					<Route path="bus" element={<Bus />} />
					<Route path="hotel-detail" element={<HotelDetail />} />
					<Route path="bookings" element={<Bookings />} />
					<Route path="payment" element={<Payment />} />
					<Route path="read-reviews" element={<ReadReviews />} />
					<Route path="wallet" element={<Wallet />} />
					<Route path="cart" element={<Cart />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="reset" element={<Reset />} />
					<Route path="logout" element={<Logout />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
				<div>{/* <Footer></Footer> */}</div>
			</div>
		</EventContext.Provider>
	);
}

export default App;
