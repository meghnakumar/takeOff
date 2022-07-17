/**
 * @author ${Bhavesh Lalwani}
 */

import React from 'react';
import PropTypes from 'prop-types';
import './FlightBookings.scss';
import flights from "../../../assets/images/flight-bookings.png";
import FlightBookingList from '../FlightBookingList/FlightBookingList';

const FlightBookings = () => {
  
  
  return (
  <div className="FlightBookings">
    <div>
      <img src={flights} />
    </div>
    <FlightBookingList></FlightBookingList>
  </div>
)};

FlightBookings.propTypes = {};

FlightBookings.defaultProps = {};

export default FlightBookings;
