/**
 * @author ${Bhavesh Lalwani}
 */

import React,  { useState, useEffect} from 'react';
import './FlightBookingList.scss';
import { Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Snackbar,
  Alert,
  DialogTitle, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';
import TravellerDetails from '../TravellerDetails/TravellerDetails';
import { getFlightBooking, cancelFlightBooking } from "./../../../services/flightBookingService";

const FlightBookingList = () => {
  const navigate = useNavigate();

  const cancelBooking = () => {
    alert("This section will cancel the booking")
  };
  const [open, setOpen] = React.useState(false);
  const [cancelId, setCancelId] = React.useState(false);
  const [upcomingBookings, setUpcomingBookings] = React.useState([]);
  const [pastBookings, setPastBookings] = React.useState([]);
  const [removeBooking, setRemoveBooking] = useState({bookingInfo: "", show: false});
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openModify, setOpenModify] = React.useState(false);
  const [modifyBooking, setModifyBooking] = React.useState({});
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    let id = JSON.parse(localStorage.getItem("userDetails"))._id;
    getFlightBooking(id).then(result => {
      let bookingsData = result.data;
      let currentDate = new Date();
      setUpcomingBookings([]);
      setPastBookings([]);
      for(const element of bookingsData) {
        let flightDate = new Date(element.flightDate + " GMT-0300");
        if(flightDate.getDate() < currentDate.getDate()) {
          setPastBookings(pastBookings => [...pastBookings, element]);
        }else {
          setUpcomingBookings(upcomingBookings => [...upcomingBookings, element]);
        }
      }
    }).catch(err => {
      console.error(err);
    });
  }

  const handleModifyClickOpen = (item) => {
    setOpenModify(true);
    setModifyBooking(item);
  };

  const confirmCancelBooking = () => {
    cancelFlightBooking(cancelId).then(result =>{
      fetchBookings();
    })
    handleClose();
    setOpenSnackBar(true);
  }

  const handleModifyClose = () => {
    setOpenModify(false);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const showFlightDetails = () => {
    navigate('/flight-details') 
  };

  const handleClickOpen = (id) => {
    setCancelId(id);
    setOpen(true);
};
  

  return (
  <div className="flight-list-bg">
    <div className='container res-p'>
    <div className="h3">Upcoming bookings</div>
      {upcomingBookings?.length ? upcomingBookings.filter(item=>(item.status==="confirmed"))
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
              <div className="col-lg-1 col-4">
                <div>{item?.departureTime}</div>
                <div className='small-txt'>{item?.source}</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>{item?.arrivalTime}</div>
                <div className='small-txt'>{item?.destination}</div>
              </div>
              <div className="col-lg-2 col-4">
                <div>Departure date</div>
                <div className='small-txt'>{item?.flightDate}</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Fare Type</div>
                <div className='small-txt '>{item?.travelerDetails[0].fareType}</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Cost</div>
                <div className='small-txt'>$ {item?.price}</div>
              </div>
              <div className="col-lg-4 col-12 m-top-16 d-flex justify-content-end">
                <Button type="button" variant="outlined" color="primary" startIcon={<EditIcon/>} onClick={() => handleModifyClickOpen(item)}>
                    Modify details
                  </Button>
                  <Button style={{marginLeft: "8px"}} color="error" type="button" variant="outlined" 
                  onClick={() => handleClickOpen(item._id)} startIcon={<DeleteIcon/>}>
                    Cancel
                  </Button>
              </div>
          </div>
        </div>
      </div>
      )
        }) : <b> No upcoming flights bookings </b>
      }
      <div className="h3">Past bookings</div>
      {pastBookings?.length ? pastBookings.filter(item=>(item.status==="confirmed"))
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
              <div className="col-lg-1 col-4">
                <div>{item?.departureTime}</div>
                <div className='small-txt'>{item?.source}</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>{item?.arrivalTime}</div>
                <div className='small-txt'>{item?.destination}</div>
              </div>
              <div className="col-lg-2 col-4">
                <div>Departure date</div>
                <div className='small-txt'>{item?.flightDate}</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Travlers</div>
                <div className='small-txt'>{item?.noOfTravelers}</div>
              </div>
              <div className="col-lg-1 col-4 ">
                <div>Cost</div>
                <div className='small-txt'>$ {item?.price}</div>
              </div>
              <div className="col-lg-4 col-12 m-top-16 d-flex justify-content-end">
                  <Button disabled style={{marginLeft: "8px"}} color="error" type="button" variant="outlined" 
                    onClick={() => handleClickOpen(item?._id)} startIcon={<DeleteIcon/>}>
                    Cancel
                  </Button>
                  {/* <Button style={{marginLeft: "8px"}} color="secondary" type="button" variant="outlined" 
                    onClick={() => alert("In progress, This is part of feature 2.")} startIcon={<RefreshIcon />}>
                    Rebook
                  </Button> */}
                  
              </div>
          </div>
        </div>
      </div>
      )
        }) : <b> No Past bookings </b>
      }
    </div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to cancel the booking?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your tickets will be cancelled for the selected flight
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="error" onClick={() => {
            confirmCancelBooking();
          }} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={openSnackBar} autoHideDuration={4000}
        onClose={() => setOpenSnackBar(false)}>
        <Alert onClose={() => setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          Booking Successfully Cancelled!
        </Alert>
      </Snackbar>

      <Dialog open={openModify} onClose={handleModifyClose}>
      <DialogTitle>Modify traveler details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TravellerDetails setOpenModify = {setOpenModify} isModify={true} modifyBooking={modifyBooking} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
  </div>
)};

export default FlightBookingList;
