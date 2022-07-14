import React, {useEffect, useState, useContext} from 'react'
import {
    Alert,
    Button,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Paper,
    Snackbar,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from "@mui/icons-material/Star";
import {Form} from "react-bootstrap";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import {getHotelBookingByUserId, getHotels} from "../../../services/hotelServices";

import HotelContext from "../../../context/hotelContext";
import {getAllFlights} from "../../../services/flightServices";

/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/

//references
//https://mui.com/material-ui/
const Bookings = () => {

    const hotelContext = useContext(HotelContext);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openModifySnackBar, setOpenModifySnackBar] = useState(false);
    const [email, setEmail] = useState(modifyBooking.bookingInfo.contactNumber);
    const [contact, setContact] = useState(modifyBooking.bookingInfo.email);
    const [showErrors, setShowErrors] = useState(false);
    const [openModifyForm, setOpenModifyForm] = useState(false);
    const [validationError, setValidationError] = useState({
        emailError: 'Please enter email',
        contactNumberError: 'Please enter the contact number'
    })
    const [reviewValidationError, setReviewValidationError] = useState({
        ratingError: 'Please enter the rating',
        feedbackError: 'Please enter the feedback'
    })

    const [openReview, setOpenReview] = useState(false);
    const handleReviewClick = () =>{
        setOpenReview(true);
    }

    const handleCloseReview = () => {
        if(reviewValidationError.ratingError===''&&
        reviewValidationError.feedbackError===''){
            setOpenReview(false)
            setOpenReviewSnackBar(true);
        }
        else{
            setShowErrors(true)
        }
    }

    const handleOnInput = (e) => {

        const {id, value} = e.target;
        setShowErrors(false)
        if (id === 'email') {
            setEmail(value)

            if (value === "") {
                setValidationError(prevState => {
                    return {...prevState, emailError: "Email cannot be empty"}
                })
            } else if (!value.match(/[a-zA-Z0-9]+[a-zA-Z0-9_]*@[a-zA-Z]+.[a-zA-Z]+/)) {
                setValidationError(prevState => {
                    return {
                        ...prevState,
                        emailError: "Please provide a valid email address (e.g., jon_snow@westeros.com)"
                    }
                })
            } else setValidationError(prevState => {
                return {...prevState, emailError: ""}
            })

        }

        if (id === 'contact') {
            setContact(value)
            if (value === "") {
                setValidationError(prevState => {
                    return {...prevState, contactNumberError: "Please enter the contact number"}
                })}
            else if(value.length > 10){
                setValidationError(prevState => {
                    return {...prevState, contactNumberError: "Contact number cannot be greater than 10"}
                })
            }
            else setValidationError(prevState => {
                    return {...prevState, contactNumberError: ""}
                })
        }
    }


   /* useEffect(() => {
        return () => {
            console.log(new Date());
            const dateStr = "Thu Jun 16 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)"
            const bookingStartDate = Date.parse(dateStr);
            console.log(bookingStartDate)
            console.log(bookingStartDate > new Date())
            console.log(dateStr.substring(0, 15))
        };
    }, []);*/

    // Reference: https://stackoverflow.com/questions/41058681/sort-array-by-dates-in-react-jsaa


    const [removeBooking, setRemoveBooking] = useState({bookingInfo: "", show: false});
    const [modifyBooking, setModifyBooking] = useState({bookingInfo: ""});
    const [bookingData, setBookingData] = useState([]);
    let sortedBookings = bookingData.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));
    console.log('sorted', sortedBookings)
    useEffect(() => {
        getHotelBookingByUserId("user1").then(result => {
            setBookingData(result.data);
        }).catch(err => {
            console.error(err);
        });
    }, []);
    // Modal props

    const [open, setOpen] = React.useState(false);
    const [modifySummary, setModifySummary] = React.useState({
        email:'',
        contactNumber:0


    })

    const handleClickOpen = () => {
        console.log(removeBooking);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModifyClick = () => {
        console.log(modifyBooking)
        setOpenModifyForm(true)
    }

    const handleCloseBookingForm = (e) => {
        setShowErrors(false)
        setOpenModifyForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModifyForm(false)
        setOpenModifySnackBar(true);
        setModifySummary({
            email: email,
            contactNumber:contact
        })


    }

    const [feedback, setFeedback] = useState();
    const [rating, setRating] = useState();
    const handleFeedbackInput = (e) =>{
        const{id,value} = e.target
        if(id==='rating'){
            setRating(value)
            if(value===''){
                setReviewValidationError(prevState => {
                    return {
                        ...prevState,
                        ratingError: "Rating cannot be empty"
                    }
                })
            }
            else if(value>5){
                setReviewValidationError(prevState => {
                    return {
                        ...prevState,
                        ratingError: "Rating cannot be greater than 5"
                    }
                })
            }
            else{
                setReviewValidationError(prevState => {
                    return {
                        ...prevState,
                        ratingError: ""
                    }
                })
            }
        }

        if(id==='feedback'){
            setFeedback(value)
            if(value===''){
                setReviewValidationError(prevState => {
                    return {
                        ...prevState,
                        feedbackError: "Feedback cannot be empty"
                    }
                })
            }
            else{
                setReviewValidationError(prevState => {
                    return {
                        ...prevState,
                        feedbackError: ""
                    }
                })
            }
        }

    }

    const [openReviewSnackBar, setOpenReviewSnackBar] = useState(false);





    return (
        <div>
            <Paper sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(225, 253, 234)",
            }} className="col-12 col-sm-8">
                <div className="container-fluid">
                    <div className="row mb-1 align-items-center justify-content-between">
                        <div className="col-6 col-sm-6" style={{paddingTop: '5px'}}>
                            {/*<h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>My Bookings</h1>*/}
                            <div className="h2" style={{fontFamily: 'fantasy', textAlign: "left"}}>My Bookings</div>
                           {/* <Typography variant="h4" style={{fontFamily: 'fantasy', textAlign: "left"}}>My Bookings</Typography>*/}
                        </div>
                    </div>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    spacing={3} className="text-start">
                    {Object.values(sortedBookings).map(bookingInfo => <Grid item xs={12}>
                        <Grid container
                              direction="row"
                              justifyContent="start"
                              style={{backgroundColor: "white"}}>
                            <Grid item xs={12} md={4}>
                                <CardMedia className="imageSize"
                                    component="img"
                                    image={bookingInfo.img}
                                    height="207"
                                    alt="green iguana"
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <CardContent style={{paddingBottom: "4px", paddingTop: "8px"}}>
                                    <Typography gutterBottom variant="h5" fontFamily="fantasy" component="div">
                                        {bookingInfo.startDate.substring(0, 15)} - {bookingInfo.endDate.substring(0, 15)}
                                    </Typography>
                                    <Typography fontWeight="bold" variant="h6">{bookingInfo.hotelName}</Typography>
                                    <Typography color="text.primary">
                                        {bookingInfo.location}
                                    </Typography>
                                    <Typography color="text.primary">
                                        {bookingInfo.roomType}
                                    </Typography>
                                    <Typography color="text.primary">
                                        {bookingInfo.guests} Guests
                                    </Typography>
                                </CardContent>
                                <Button hidden={Date.parse(bookingInfo.startDate) < new Date()} variant="outlined"
                                        color="error" className="float-end me-3 mb-1"
                                        startIcon={<DeleteIcon/>} onClick={() => {
                                    handleClickOpen();
                                    setRemoveBooking({bookingInfo: bookingInfo, show: true})
                                }}>
                                    Cancel
                                </Button>
                                <Button hidden={Date.parse(bookingInfo.startDate) < new Date()} variant="outlined"
                                        color="primary" className="float-end me-3 mb-1"
                                        startIcon={<EditIcon/>} onClick={() => {
                                    handleModifyClick();
                                    setModifyBooking({bookingInfo: bookingInfo})
                                }}>
                                    Modify
                                </Button>

                                <Button hidden={Date.parse(bookingInfo.startDate) > new Date()} variant="outlined"
                                        color="secondary" className="float-end me-3 mb-1" startIcon={<StarIcon/>}
                                onClick={()=>handleReviewClick()}>
                                    Review
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>)}
                </Grid>
            </Paper>


            {/*    Cancel Listing Modal starts*/}
            {/*https://mui.com/material-ui/react-dialog/*/}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to remove the booking?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your hotel room booking at {removeBooking.bookingInfo.hotelName} will be removed for
                        date {removeBooking.bookingInfo.date}.
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

            <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={openSnackBar} autoHideDuration={4000}
                      onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="success" sx={{width: '100%'}}>
                    Booking Successfully Cancelled!
                </Alert>
            </Snackbar>

            {/*Modify Booking Modal starts*/}

            <Dialog open={openModifyForm} onClose={handleCloseBookingForm}
                    fullWidth={true}
                    maxWidth={"sm"}>
                <DialogTitle>Modify Booking</DialogTitle>
                <DialogContent>
                    <Form onSubmit={handleSubmit} onReset={handleCloseBookingForm}>
                        <Form.Group className="mb-2">
                            <Form.Label>Guest Name</Form.Label>
                            <Form.Control id="guestName" defaultValue={modifyBooking.bookingInfo.guestName} disabled/>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Number of Guests</Form.Label>
                            <Form.Control id="guestNumber" placeholder="Number of Guests" type='number'
                                          defaultValue={modifyBooking.bookingInfo.guests} disabled/>
                        </Form.Group>
                        <Form.Group className=" mb-2">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control id="contact" placeholder="Contact Number" type='number'
                                          defaultValue={modifyBooking.bookingInfo.contactNumber}
                                          onChange={(e) => handleOnInput(e)}/>
                            <Form.Label hidden={!showErrors}
                                        style={{color: 'red'}}>{validationError.contactNumberError}</Form.Label>
                        </Form.Group>
                        <Form.Group className=" mb-2">
                            <Form.Label>Number of Rooms</Form.Label>
                            <Form.Control id="roomNumber" placeholder="Number of Rooms" type='number'
                                          defaultValue={modifyBooking.bookingInfo.numberOfRooms} disabled/>
                            <Form.Label hidden={!showErrors}
                                        style={{color: 'red'}}>{validationError.numberOfRoomError}</Form.Label>
                        </Form.Group>
                        <Form.Group className=" mt-3">
                            <div className="row justify-content-evenly">
                                <div className="row col-12 col-sm-6 justify-content-evenly">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            id="startDate"
                                            label="Check-in"
                                            disabled
                                            closeOnSelect
                                            /*onChange={(newValue) => handleOnChangeStartDate(newValue)}*/
                                            value={modifyBooking.bookingInfo.startDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="row col-12 col-sm-6 mt-2 mt-sm-0 justify-content-center">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            id="endDate"
                                            label="Check-out"
                                            disabled
                                            closeOnSelect
                                            value={modifyBooking.bookingInfo.endDate}
                                            /*onChange={(newValue) => handleOnChangeEndDate(newValue)}*/
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control id="email" placeholder="Email" defaultValue={modifyBooking.bookingInfo.email}
                                          onChange={(e) => handleOnInput(e)}/>
                            <Form.Label hidden={!showErrors}
                                        style={{color: 'red'}}>{validationError.emailError}</Form.Label>
                        </Form.Group>
                        <DialogActions className="mt-1">
                            <Button type="reset" color="error">Cancel</Button>
                            <Button type="submit">Modify</Button>
                        </DialogActions>

                    </Form>

                </DialogContent>

            </Dialog>

            <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={openModifySnackBar} autoHideDuration={4000}
                      onClose={() => setOpenModifySnackBar(false)}>
                <Alert onClose={() => setOpenModifySnackBar(false)} severity="success" sx={{width: '100%'}}>
                    Booking Successfully Modified!
                </Alert>
            </Snackbar>

            {/*Add Review starts*/}
            <Dialog open={openReview} onClose={handleCloseReview}>
                <DialogTitle>Add Review</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Please add a feedback and rating for your stay.
                    </DialogContentText>
                    <Form onSubmit={handleSubmit} onReset={handleCloseBookingForm}>
                        <Form.Group className="mb-2">
                            <Form.Label>Rate out of 5</Form.Label>
                            <Form.Control id="rating" placeholder="rate out of 5" type='number' max='5' min='0' onChange={(e)=>handleFeedbackInput(e)}/>
                            <Form.Label hidden={!showErrors} style={{color:'red'}}>{reviewValidationError.ratingError}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control id="feedback" onChange={(e)=>handleFeedbackInput(e)}/>
                            <Form.Label hidden={!showErrors} style={{color:'red'}}>{reviewValidationError.feedbackError}</Form.Label>
                        </Form.Group>
                        <DialogActions>
                            <Button onClick={handleCloseReview}>Add</Button>
                        </DialogActions>

                    </Form>
                </DialogContent>

            </Dialog>

            <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={openReviewSnackBar} autoHideDuration={4000}
                      onClose={() => setOpenReviewSnackBar(false)}>
                <Alert onClose={() => setOpenReviewSnackBar(false)} severity="success" sx={{width: '100%'}}>
                    Review Added Successfully!
                </Alert>
            </Snackbar>

        </div>
    );

}

export default Bookings