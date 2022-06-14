import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import Flights from './components/Flights/Flights';
import Events from './components/Events/Events';
import Dashboard from './components/Hotels/Dashboard';
import Offers from './components/Offers/Offers';
import TourPackages from './components/TourPackages/TourPackages';
import Bus from './components/Bus/Bus';
import HotelDetail from "./components/Hotels/HotelDetail/HotelDetail";
import Dashboard2 from "./components/Hotels/Dashboard";
import Bookings from "./components/Hotels/Bookings/Bookings";
import ReadReviews from "./components/Hotels/Reviews/ReadReviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='header-footer-margin'></div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="events" element={<Events />} />
          <Route path="hotels" element={<Dashboard2 />} />
          <Route path="tour-packages" element={<TourPackages />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="bus" element={<Bus />} />
          <Route path="hotel-detail" element={<HotelDetail/>} />
          <Route path="bookings" element={<Bookings/>} />
          <Route path="read-reviews" element={<ReadReviews/>} />
      </Routes>
    </div>
  );
}

export default App;
