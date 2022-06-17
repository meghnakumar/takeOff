import React,  { useState} from 'react';
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

const FlightBookingList = () => {
  const navigate = useNavigate();
  const modifyDetails = () => {
    alert("This section will modify the booking details")
  };

  const cancelBooking = () => {
    alert("This section will cancel the booking")
  };
  const [open, setOpen] = React.useState(false);
  const [removeBooking, setRemoveBooking] = useState({bookingInfo: "", show: false});
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const showFlightDetails = () => {
    navigate('/flight-details') 
  };

  const handleClickOpen = () => {
    console.log(removeBooking);
    setOpen(true);
};
  

  return (
  <div className="flight-list-bg">
    <div className='container res-p'>
    <div className="h3">Upcoming bookings</div>
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
              <div className="col-lg-1 col-4">
                <div>10:00</div>
                <div className='small-txt'>Toronto</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>13:00</div>
                <div className='small-txt'>Halifax</div>
              </div>
              <div className="col-lg-2 col-4">
                <div>Departure date</div>
                <div className='small-txt'>07 July 2022</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Travlers</div>
                <div className='small-txt'>2</div>
              </div>
              <div className="col-lg-1 col-4 ">
                <div>Cost</div>
                <div className='small-txt'>$ 360</div>
              </div>
              <div className="col-lg-4 col-12 m-top-16 d-flex justify-content-end">
              <Button type="button" variant="outlined" color="primary" startIcon={<EditIcon/>} onClick={() => modifyDetails()}>
                    Modify details
                  </Button>
                  <Button style={{marginLeft: "8px"}} color="error" type="button" variant="outlined" 
                  onClick={() => handleClickOpen()} startIcon={<DeleteIcon/>}>
                    Cancel
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
              <div className="col-lg-1 col-4">
                <div>10:00</div>
                <div className='small-txt'>Toronto</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>13:00</div>
                <div className='small-txt'>Halifax</div>
              </div>
              <div className="col-lg-2 col-4">
                <div>Departure date</div>
                <div className='small-txt'>10 July 2022</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Travlers</div>
                <div className='small-txt '>1</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Cost</div>
                <div className='small-txt'>$ 180</div>
              </div>
              <div className="col-lg-4 col-12 m-top-16 d-flex justify-content-end">
                <Button type="button" variant="outlined" color="primary" startIcon={<EditIcon/>} onClick={() => modifyDetails()}>
                    Modify details
                  </Button>
                  <Button style={{marginLeft: "8px"}} color="error" type="button" variant="outlined" 
                  onClick={() => handleClickOpen()} startIcon={<DeleteIcon/>}>
                    Cancel
                  </Button>
              </div>
          </div>
        </div>
      </div>

      <div className="h3">Past bookings</div>
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
              <div className="col-lg-1 col-4">
                <div>10:00</div>
                <div className='small-txt'>Montreal</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>13:00</div>
                <div className='small-txt'>Vancouver</div>
              </div>
              <div className="col-lg-2 col-4">
                <div>Departure date</div>
                <div className='small-txt'>10 May 2022</div>
              </div>
              <div className="col-lg-1 col-4">
                <div>Travlers</div>
                <div className='small-txt'>2</div>
              </div>
              <div className="col-lg-1 col-4 ">
                <div>Cost</div>
                <div className='small-txt'>$ 360</div>
              </div>
              <div className="col-lg-4 col-12 m-top-16 d-flex justify-content-end">
                  <Button disabled style={{marginLeft: "8px"}} color="error" type="button" variant="outlined" 
                    onClick={() => handleClickOpen()} startIcon={<DeleteIcon/>}>
                    Cancel
                  </Button>
                  <Button style={{marginLeft: "8px"}} color="secondary" type="button" variant="outlined" 
                    onClick={() => showFlightDetails()} startIcon={<RefreshIcon />}>
                    Rebook
                  </Button>
                  
              </div>
          </div>
        </div>
      </div>
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
            handleClose();
            setOpenSnackBar(true)
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
  </div>
)};

export default FlightBookingList;
