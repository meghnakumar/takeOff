import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import Flights from './components/Flights/Flights';
import Events from './components/Events/Events';
import Hotels from './components/Hotels/Hotels';
import Offers from './components/Offers/Offers';
import TourPackages from './components/TourPackages/TourPackages';
import Bus from './components/Bus/Bus';

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
          <Route path="hotels" element={<Hotels />} />
          <Route path="tour-packages" element={<TourPackages />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="bus" element={<Bus />} />
      </Routes>
    </div>
  );
}

export default App;
