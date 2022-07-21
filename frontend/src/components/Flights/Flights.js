/**
 * @author ${Bhavesh Lalwani}
 */

import React from 'react';
import FlightList from '../Flights/FlightList/FlightList';
import SearchFlights from '../Flights/SearchFlights/SearchFlights';
import './Flights.scss';

const Flights = () => {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [reqFlights, setReqFlights] = React.useState();
  return (
    <div>
    <SearchFlights setReqFlights = {setReqFlights} setIsButtonClicked = {setIsButtonClicked}></SearchFlights>
    {isButtonClicked ?
      <FlightList reqFlightDetails = {reqFlights}></FlightList> :  
      <div className="h2" style={{display: "flex", justifyContent: "center", margin: "40px 16px"}}>
        Please fill details to see the flight list
      </div> 
    }
  </div>
)};

Flights.propTypes = {};

Flights.defaultProps = {};

export default Flights;
