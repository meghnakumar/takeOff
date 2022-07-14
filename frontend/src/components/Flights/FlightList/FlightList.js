import React, {useEffect, useState} from 'react';
import './FlightList.scss';
import { Button } from '@mui/material';
import {Flights} from './../FlightsDummy';
import { useNavigate } from 'react-router-dom';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import { getAllFlights } from "./../../../services/flightServices";

const FlightList = (props) => {
  const navigate = useNavigate();
  const [flightList, setFlights] = useState([]);
  useEffect(() => {
    getAllFlights().then(result => {
      setFlights(result.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const showFlightDetails = () => {
    navigate('/flight-details') 
  };

  return (
  <div className="flight-list-bg">
    <div className='container res-p'>
      {flightList?.length ? flightList
        .filter((val) => {
          return val;
        })
        .map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <div className="row flex-center">
                  <div className="col-lg-2 col-12 m-bottom-16">
                    <div className="row">
                      <div className="col-lg-4">
                        <FlightTakeoffSharpIcon fontSize="large"></FlightTakeoffSharpIcon>
                      </div>
                      <div className="col-lg-8">
                        <div>{item?.flightCompany}</div>
                        <div className='small-txt'>{item?.flightId}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <div>{item?.departureTime}</div>
                    <div className='small-txt'>{item?.source}</div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <div>{item?.arrivalTime}</div>
                    <div className='small-txt'>{item?.destination}</div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <div className='small-txt'>{item?.stops == 0 ? "No Stops" :  item?.stops + " stops"}</div>
                  </div>
                  <div className="col-lg-2 col-3 ">
                    <div>$ {item?.price}</div>
                  </div>
                  <div className="col-lg-2 col-12 m-top-16">
                    <Button type="button" variant="contained" onClick={() => showFlightDetails()}>
                      See Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : null
      }
    </div>
  </div>
)};

FlightList.propTypes = {};

FlightList.defaultProps = {};

export default FlightList;
