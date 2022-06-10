import React from 'react';
import './FlightList.scss';
import { Button } from '@mui/material';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';

const FlightList = () => {
  return (
  <div className="flight-list-bg">
    <div className='container res-p'>
      <div className="card">
        <div className="card-body">
          <div className="row flex-center">
              <div className="col-lg-2 col-12 m-bottom-16">
                <div className="row">
                  <div className="col-lg-4">
                    <FlightTakeoffSharpIcon fontSize="large"></FlightTakeoffSharpIcon>
                  </div>
                  <div className="col-lg-8">
                    <div>Air Canada</div>
                    <div className='small-txt'>IS 555, RT 443</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <div>10:00</div>
                <div className='small-txt'>Toronto</div>
              </div>
              <div className="col-lg-2 col-3">
                <div>13:00</div>
                <div className='small-txt'>Halifax</div>
              </div>
              <div className="col-lg-2 col-3">
                <div className='small-txt'>Non stop</div>
              </div>
              <div className="col-lg-2 col-3 ">
                <div>$ 180</div>
              </div>
              <div className="col-lg-2 col-12 m-top-16">
                  <Button type="submit" variant="contained">
                    Book Now
                  </Button>
              </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row flex-center">
              <div className="col-lg-2 col-12 m-bottom-16">
                <div className="row">
                  <div className="col-lg-4">
                    <FlightTakeoffSharpIcon fontSize="large"></FlightTakeoffSharpIcon>
                  </div>
                  <div className="col-lg-8">
                    <div>Air Canada</div>
                    <div className='small-txt'>IS 555, RT 443</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <div>10:00</div>
                <div className='small-txt'>Toronto</div>
              </div>
              <div className="col-lg-2 col-3">
                <div>13:00</div>
                <div className='small-txt'>Halifax</div>
              </div>
              <div className="col-lg-2 col-3">
                <div className='small-txt'>Non stop</div>
              </div>
              <div className="col-lg-2 col-3 ">
                <div>$ 180</div>
              </div>
              <div className="col-lg-2 col-12 m-top-16">
                  <Button type="submit" variant="contained">
                    Book Now
                  </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

FlightList.propTypes = {};

FlightList.defaultProps = {};

export default FlightList;
