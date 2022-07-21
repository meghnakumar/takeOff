import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Events from "./components/Events/eventList/Events.jsx";
import BookingEvents from "./components/Events/BookingEvents/BookingEvents";
import Offers from "./components/Offers/Offers";
import TourPackages from "./components/TourPackages/TourPackages";
import BookingTours from "./components/TourPackages/BookingTour";
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
import GenerateReset from "./components/Registration/GenerateReset";
import Logout from "./components/Registration/Logout";
import Profile from "./components/Profile/Profile";
import FlightBookings from "./components/Flights/FlightBookings/FlightBookings";
import {ProtectedRoute} from "./components/common/Routes/ProtectedRoute";
import NotFound from "./components/common/Routes/notFound";

function App() {
	const location = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	useEffect(() => {
      if(JSON.parse(localStorage.getItem("userDetails"))) {
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
	}, [location])

  return (
    <div className="App">
      {location.pathname === "/" || location.pathname === "/home" ? (
        <></>
      ) : (
        <div>
          <Header setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}></Header> <div className="header-footer-margin"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home  isLoggedIn = {isLoggedIn} />} />
        <Route path="home" element={<Home isLoggedIn = {isLoggedIn} />} />
        <Route path="flights" element={<Flights />} />
        <Route path="flight-details" element={<ProtectedRoute user={isLoggedIn}><FlightDetails /></ProtectedRoute>} />
        <Route path="flight-bookings" element={<ProtectedRoute user={isLoggedIn}><FlightBookings /> </ProtectedRoute>} />
        <Route path="booking" element={<ProtectedRoute user={isLoggedIn}><Bookings /></ProtectedRoute>} />
        <Route path="events" element={<Events />} />
        <Route path="events-booking" element={<ProtectedRoute user={isLoggedIn}><BookingEvents /></ProtectedRoute>} />
        <Route path="hotels" element={<Dashboard2 />} />
        <Route path="tour-packages" element={<TourPackages />} />
        <Route path="tour-booking" element={<ProtectedRoute user={isLoggedIn}><BookingTours /></ProtectedRoute>} />
        <Route path="Offers" element={<Offers />} />
        <Route path="hotel-detail" element={<ProtectedRoute user={isLoggedIn}><HotelDetail /></ProtectedRoute>} />
        <Route path="bookings" element={<ProtectedRoute user={isLoggedIn}><Bookings /></ProtectedRoute>} />
        <Route path="payment" element={<ProtectedRoute user={isLoggedIn}><Payment /></ProtectedRoute>} />
        <Route path="read-reviews" element={<ReadReviews />} />
        <Route path="wallet" element={<ProtectedRoute user={isLoggedIn}><Wallet /></ProtectedRoute>} />
        <Route path="cart" element={<ProtectedRoute user={isLoggedIn}><Cart /></ProtectedRoute>} />
        <Route path="login" element={<Login setIsLoggedIn = {setIsLoggedIn} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset" element={<Reset />} />
		<Route path="generateReset" element={<GenerateReset />} />
        <Route path="logout" element={<ProtectedRoute user={isLoggedIn}><Logout setIsLoggedIn = {setIsLoggedIn} /> </ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute user={isLoggedIn}><Profile  setIsLoggedIn = {setIsLoggedIn} /></ProtectedRoute>} />

		<Route path="/not-found" element={<NotFound />} />
		<Route path="*" element={<Navigate to="/not-found" />} />       
      </Routes>
    </div>
  );
}

export default App;
