import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Events from "./components/Events/Events";
import Dashboard from "./components/Hotels/Dashboard";
import Offers from "./components/Offers/Offers";
import TourPackages from "./components/TourPackages/TourPackages";
import Bus from "./components/Bus/Bus";
import HotelDetail from "./components/Hotels/HotelDetail/HotelDetail";
import Dashboard2 from "./components/Hotels/Dashboard";
import Bookings from "./components/Hotels/Bookings/Bookings";
import Payment from "./components/Payment/Payment";
import ReadReviews from "./components/Hotels/Reviews/ReadReviews";
import FlightBookings from "./components/Flights/FlightBookings/FlightBookings";
import Wallet from "./components/Wallet/Wallet";
import Cart from "./components/Cart/Cart";
import Login from "./components/Registration/Login";
import SignUp from "./components/Registration/SignUp";

function App() {
  const location = useLocation();
  const [ishome, setHome] = useState(false);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      setHome(true);
    } else {
      setHome(false);
    }
  });

  return (
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
        <Route path="flight-bookings" element={<FlightBookings />} />
        <Route path="events" element={<Events />} />
        <Route path="hotels" element={<Dashboard2 />} />
        <Route path="tour-packages" element={<TourPackages />} />
        <Route path="Offers" element={<Offers />} />
        <Route path="bus" element={<Bus />} />
        <Route path="hotel-detail" element={<HotelDetail />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="payment" element={<Payment />} />
        <Route path="read-reviews" element={<ReadReviews />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />

      </Routes>
    </div>
  );
}

export default App;
