/**
 * @author ${Bhavesh Lalwani}
 */

import React from 'react';
import './FlightDetails.scss';
import { Card, CardActions, CardContent, Paper } from "@mui/material";
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutline';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOff';
import TravellerDetails from '../TravellerDetails/TravellerDetails';
import {useLocation} from "react-router-dom";


const FlightDetails = () => {
  const flightDetails = useLocation().state.flightDetails;
  const flightReqDetails = useLocation().state.flightReqDetails;
  let flightObj = {
    flightCompany: flightDetails.flightCompany,
    flightId: flightDetails.flightId,
    source: flightDetails.source,
    departureTime: flightDetails.departureTime,
    destination: flightDetails.destination,
    arrivalTime: flightDetails.arrivalTime,
    stops: flightDetails.stops,
    individualPrice: flightDetails.price,
    price: flightDetails.price * flightReqDetails.travelersCount,
    flightDate: flightReqDetails.departureDate,
    noOfTravelers: flightReqDetails.travelersCount
  }
  return (
    <div className="flightBooking">
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          flexGrow: 1,
          mb: 2,
          backgroundColor:
            (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#b3e3f4',
        }}
        className="col-12 col-sm-10"
      >
        {/* <h3>Available fares</h3> */}
        <div className="h3 center">Available fares</div>
        <div className='container res-p' style={{ backgroundColor: "#b3e3f4" }}>
          <div className='row justify-content-around'>
            {/* <ButtonBase className='col-sm-12 col-md-5' focusRipple={true}> */}
            <Card className="m-tp-16 col-sm-12 col-md-5" style={{ fontSize: "16px" }}>
              <CardContent>
                <div className="d-flex justify-content-between mb-3">
                  <div> <b>Standard</b></div>
                  <div>$ {flightDetails?.price} </div>
                </div>
                <p className="ta-l">Fare offered by airline.</p>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div> <WorkOutlinedIcon /> Cabin bag</div>
                  <div>7 kgs</div>
                </div>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div> <LuggageOutlinedIcon /> check-in</div>
                  <div>Hand baggage only</div>
                </div>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div className="d-flex"> <MoneyOffOutlinedIcon /> Cancellation</div>
                  <div>Cancellation fee starting $100</div>
                </div>
                <div></div>
              </CardContent>
              <CardActions>
                {/* <Button size="small" onClick={() => buttonClicked(item?.id)}><b>See Details</b></Button> */}
              </CardActions>
            </Card>

            {/* 2nd fare card */}
            <Card className="m-tp-16 col-sm-12 col-md-5" style={{ fontSize: "16px" }}>
              <CardContent>
                <div className="d-flex justify-content-between mb-3">
                  <div> <b>Comfort</b></div>
                  <div>$ {flightDetails?.price + 30} </div>
                </div>
                <p className="ta-l">Fare offered by airline.</p>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div> <WorkOutlinedIcon /> Cabin bag</div>
                  <div>7 kgs</div>
                </div>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div> <LuggageOutlinedIcon /> check-in</div>
                  <div>2 pieces</div>
                </div>
                <div className="d-flex justify-content-between mb-3 p-2">
                  <div className="d-flex"> <MoneyOffOutlinedIcon /> Cancellation</div>
                  <div>No cancellation fee</div>
                </div>
                <div></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Paper>

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          flexGrow: 1,
          mb: 2,
          backgroundColor:
            (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#b3e3f4',
        }}
        className="col-12 col-sm-10"
      >
        <div className='container res-p' style={{ backgroundColor: "#b3e3f4" }}>
          <div className='row justify-content-center'>
            <div className="col-12">
              <TravellerDetails isModify={false} flightObj = {flightObj} />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
};

export default FlightDetails;
