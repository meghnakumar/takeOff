import React, {useEffect, useState} from 'react'
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

/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/

const Bookings = () => {

    const [reviewButton, showReviewButton] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openModifySnackBar, setOpenModifySnackBar] = useState(false);
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [showErrors, setShowErrors] = useState(false);
    const [openModifyForm, setOpenModifyForm] = useState(false);
    const [validationError, setValidationError] = useState({
        emailError: 'Please enter email',
        contactNumberError: 'Please enter the contact number'
    })

    const [openReview, setOpenReview] = useState(false);
    const handleReviewClick = () =>{
        setOpenReview(true);
    }

    const handleCloseReview = () => {
        setOpenReview(false)
        setOpenReviewSnackBar(true);
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


    useEffect(() => {
        return () => {
            console.log(new Date());
            const dateStr = "Thu Jun 16 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)"
            const bookingStartDate = Date.parse(dateStr);
            console.log(bookingStartDate)
            console.log(bookingStartDate > new Date())
            console.log(dateStr.substring(0, 15))
        };
    }, []);

    const bookingData = [
        {
            "startDate": "Thu Jun 16 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "endDate": "Thu Jun 23 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "roomType": "Garden View Suite - Twin with Balcony",
            "hotelName": "Hotel Miramar",
            "location": "San Juan, Puerto Rico",
            "guests": "3",
            "contactNumber": 8527419632,
            "numberOfRooms": 2,
            "guestName": "Varun Dhawan",
            "img": "https://live.staticflickr.com/4152/5118876374_19128d90d0_b.jpg"
            //    https://search.openverse.engineering/image/b1d8eef1-5ef9-411a-804d-e4148ef297eb
        },
        {
            "startDate": "Tue Jul 12 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "endDate": "Thu Jul 14 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "roomType": "Garden View Suite King with Bathtub",
            "hotelName": "Ibsens Hotel",
            "location": "Copenhagen, Denmark",
            "guests": "1",
            "contactNumber": 8527419632,
            "numberOfRooms": 1,
            "email": "some@example.com",
            "guestName": "Varun Dhawan",
            "img": "https://live.staticflickr.com/7569/15760578227_d946d0b27c_b.jpg"
            //    https://search.openverse.engineering/image/7f80a973-574e-4c5c-9a57-fa14502a29eb
        },
        {
            "startDate": "Wed Jul 27 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "endDate": "Fri Jul 29 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "roomType": "Luxury Suite - King with Balcony",
            "hotelName": "Schwarzer Bock Hotel",
            "location": "Wiesbaden, Germany",
            "guests": "4",
            "contactNumber": 8527419632,
            "numberOfRooms": 2,
            "email": "some@example.com",
            "guestName": "Varun Dhawan",
            "img": "https://live.staticflickr.com/2175/2504826760_06f2d29c60_b.jpg",
            //    https://search.openverse.engineering/image/afb60f89-c00c-45e7-863c-745fb22dbb45
        },
        {
            "startDate": "Thu Jun 02 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "endDate": "Sat Jun 04 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "roomType": "Pool View Suite King with Bathtub",
            "hotelName": "El Cortez Hotel",
            "location": "Las Vegas, United States",
            "guests": "2",
            "contactNumber": 8527419632,
            "numberOfRooms": 1,
            "email": "some@example.com",
            "guestName": "Varun Dhawan",
            "img": "https://live.staticflickr.com/3241/2970607810_c94fea5a8e_b.jpg",
            //    https://search.openverse.engineering/image/e061dc6e-1806-4cec-9441-1b4420ef11fb
        },
        {
            "startDate": "Tue May 10 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "endDate": "Mon May 16 2022 00:00:00 GMT-0300 (Atlantic Daylight Time)",
            "roomType": "The Legacy Suite with Jacuzzi",
            "hotelName": "Raffles Hotel",
            "location": "Singapore",
            "guests": "1",
            "contactNumber": 8527419632,
            "numberOfRooms": 2,
            "email": "some@example.com",
            "guestName": "Varun Dhawan",
            "img": "https://live.staticflickr.com/4112/5444940496_3bf47e3929_b.jpg",
            //    https://search.openverse.engineering/image/772ea16d-0a82-48df-97ee-e6fa7beea510
        }];

    // Reference: https://stackoverflow.com/questions/41058681/sort-array-by-dates-in-react-jsaa
    let sortedBookings = bookingData.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));

    const [removeBooking, setRemoveBooking] = useState({bookingInfo: "", show: false});
    const [modifyBooking, setModifyBooking] = useState({bookingInfo: ""});


// Modal props

    const [open, setOpen] = React.useState(false);

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
    }

    const [feedback, setFeedback] = useState();
    const handleFeedbackInput = (e) =>{
        setFeedback(e.target.value)
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
                            <h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>My Bookings</h1>
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
                                <CardMedia
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
                            <Form.Control id="rating" placeholder="rate out of 5" type='number' max='5' min='0'/>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control id="feedback" onChange={(e)=>handleFeedbackInput(e)}/>
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