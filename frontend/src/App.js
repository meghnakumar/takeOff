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
import HotelContext from "./context/hotelContext";
import {getHotels, getHotelById, getHotelBookingByUserId, createBooking} from "./services/hotelServices";
import EventBookingContext from "./context/eventBookingContext";
import {
	getEventBooking,
	createEventBooking,
	updateEventBooking,
} from "./services/eventBookingServices";

function App() {
	const location = useLocation();
	const [ishome, setHome] = useState(false);

	const [events, setEvents] = useState([]);
	const [eventsBooking, setEventsBooking] = useState([]);
	useEffect(() => {
		if (location.pathname === "/" || location.pathname === "/home") {
			setHome(true);
		} else {
			setHome(false);
		}

		const getData = async () => {
			const {data: dataEvents} = await getEvents();
			setEvents(dataEvents);
			const {data: dataBookingEvents} = await getEventBooking();
			setEventsBooking(dataBookingEvents);
			const {data: dataHotels} = await getHotels();
			setHotels(dataHotels);
			const {data: dataHotelBookings} = await getHotelBookingByUserId('user1');
			setBookingData(dataHotelBookings)
			console.log('I am in ', bookingData)

		}

		getData();
	}, []);

	const handleCreateEventBooking = async (bookingInfo) => {
		try {
			//console.log(bookingInfo);
			await createEventBooking(bookingInfo);
		} catch (ex) {
			if (
				ex.response &&
				ex.response.status >= 400 &&
				ex.response.status < 500
			) {
				console.log(ex.response.data);
			}
		}
	};

	//hotel list
	const[hotels, setHotels] = useState([]);
	//hotel booking by userId
	const[bookingData, setBookingData] = useState([])
	const[hotelBookingSummary, setHotelBookingSummary] = useState()

	const handleCreateHotelBooking = async (hotelBookingSummary) =>{
		await createBooking(hotelBookingSummary)
	}



	return (
		<EventContext.Provider value={{ events }}>
			<EventBookingContext.Provider
				value={{ eventsBooking, handleCreateEventBooking }}>
				<HotelContext.Provider value = {{hotels,bookingData, handleCreateHotelBooking}}>
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
				</HotelContext.Provider>
			</EventBookingContext.Provider>
		</EventContext.Provider>
	);
}

export default App;
