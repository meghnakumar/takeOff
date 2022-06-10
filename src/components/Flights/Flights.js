import React from 'react';
import FlightList from '../Flights/FlightList/FlightList';
import SearchFlights from '../Flights/SearchFlights/SearchFlights';
import './Flights.scss';

const Flights = () => {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  return (
    <div>
    <SearchFlights setIsButtonClicked = {setIsButtonClicked}></SearchFlights>
    {isButtonClicked &&
      <FlightList></FlightList>  
    }
  </div>
)};

Flights.propTypes = {};

Flights.defaultProps = {};

export default Flights;
