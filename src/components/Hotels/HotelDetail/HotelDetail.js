import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import {
    Alert,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    Paper, Snackbar,
    Typography
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import {red} from "@mui/material/colors";


/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/

const HotelDetail = () => {

    const [departureValue, setDepartureValue] = useState(null);
    const [returnValue, returnSetValue] = useState(null);
    const [guestName, setGuestName] = useState();
    const [guestNumber, setGuestNumber] = useState();
    const [email, setEmail] = useState();
    const [roomNumber, setRoomNumber] = useState();
    const [contact, setContact] = useState();
    const [showErrors, setShowErrors] = useState(false);
    const [open, setOpen] = useState(false);
    const [validationError, setValidationError] = useState({
        guestNameError: 'Please enter name of the guest',
        guestNumberError: 'Please enter the number of guests',
        emailError: 'Please enter email',
        numberOfRoomError: 'Please enter the number of rooms required',
        contactNumberError: 'Please enter the contact number',
        startDateError: 'Please add the booking date',
        endDateError: 'Please add the end booking date'

    })

    const handleOnInput = (e) => {
        console.log(e.target)
        const {id, value} = e.target;
        setShowErrors(false)
        if (id === 'guestName') {
            setGuestName(value)
            if (value === "") {
                setValidationError(prevState => {
                    return {...prevState, guestNameError: "Guest Name cannot be empty"}
                })
            } else if (!value.match(/[a-zA-Z]+$/)) {
                setValidationError(prevState => {
                    return {...prevState, guestNameError: "Guest Name should have only letters"}
                })
            } else setValidationError(prevState => {
                return {...prevState, guestNameError: ""}
            })
        }
        if (id === 'guestNumber') {
            setGuestNumber(value)
            if (value === "") {
                setValidationError(prevState => {
                    return {...prevState, guestNumberError: "Please provide number of guests"}
                })
            } else setValidationError(prevState => {
                return {...prevState, guestNumberError: ""}
            })
        }
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

        if (id === 'roomNumber') {
            setRoomNumber(value)
            if (value === "") {
                setValidationError(prevState => {
                    return {...prevState, numberOfRoomError: "Please enter the number of rooms required"}
                })}
                else if(value > 15){
                    setValidationError(prevState => {
                        return {...prevState, numberOfRoomError: "Number of Rooms can't be greater than 15"}
                    })
                }
            else setValidationError(prevState => {
                return {...prevState, numberOfRoomError: ""}
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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("here", validationError)
        if (validationError.guestNameError === '' &&
            validationError.endDateError === '' &&
            validationError.emailError === '' &&
            validationError.startDateError === '' &&
            validationError.numberOfRoomError === '' &&
            validationError.guestNumberError === '' &&
            validationError.contactNumberError === '' &&
            guestName !== null &&
            guestNumber !== null &&
            email !== null &&
            contact !== null &&
            roomNumber !== null) {
            console.log(departureValue)
            console.log(returnValue)
            setOpen(false);
            setOpenSnackBar(true);
        } else {

            setShowErrors(true)
        }
    }

    const handleClose = () => {
        setOpen(false);
    };



    const goToReadReviews = useNavigate();



    const hotelData = {
        "name": "Country Inn",
        "rooms": {
            "room1": {
                "name": "Garden View Suite - Twin with Balcony",
                "size": "603 sq.ft",
                "beds": "Twin Bed",
                "view": "Garden View",
                "img": "https://live.staticflickr.com/5028/5574612655_8afc0e4d82_b.jpg"
                //    https://search.openverse.engineering/image/b2af466b-0fad-4c2d-a687-640b5951a451
            },
            "room2": {
                "name": "Garden View Suite King with Bathtub",
                "size": "605 sq.ft",
                "beds": "King Bed",
                "view": "Garden View",
                "img": "https://live.staticflickr.com/3454/3821489872_e6a2159b55_b.jpg"
                //    https://search.openverse.engineering/image/b3bbb3d2-b758-40f6-83c2-33bb3dd4d6aa
            },
            "room4": {
                "name": "Luxury Suite - King with Balcony",
                "size": "874 sq.ft",
                "beds": "King Bed",
                "view": "Sea View",
                "img": "https://live.staticflickr.com/11/12486706_5933881653_b.jpg"
                //    https://search.openverse.engineering/image/b1277ef8-ce4d-4725-ac01-d50db359494f
            },
            "room3": {
                "name": "Pool View Suite King with Bathtub",
                "size": "600 sq.ft",
                "beds": "King Bed",
                "view": "Swimming Pool View",
                "img": "https://live.staticflickr.com/3450/3268933215_d4f7b72455_b.jpg"
                //    https://search.openverse.engineering/image/275e55c6-73fb-4197-bead-41e800b3724f
            },
            "room5": {
                "name": "The Legacy Suite with Jacuzzi",
                "size": "2476 sq.ft",
                "beds": "King Bed",
                "view": "Sea View",
                "img": "https://live.staticflickr.com/3378/3508996768_cf9e0efd83.jpg"
                //    https://search.openverse.engineering/image/302dc0c5-d728-4bcc-bb23-f4f9d0481b15
            }
        },
        "reviews": {}
    };

    const handleOnChangeStartDate = (value) =>{
        console.log(value)
        setDepartureValue(value)
        if (value === "") {
            setValidationError(prevState => {
                return {...prevState, startDateError: "Please enter the start booking date"}
            })
        } else setValidationError(prevState => {
            return {...prevState, startDateError: ""}
        })

    }

    const handleOnChangeEndDate = (value) =>{
        console.log(value)
        returnSetValue(value)
        if (value === "") {
            setValidationError(prevState => {
                return {...prevState, endDateError: "Please enter the end booking date"}
            })
        } else setValidationError(prevState => {
            return {...prevState, endDateError: ""}
        })

    }


    const handleReviewsClick = () => {
        goToReadReviews("/read-reviews")
    }


    const [createBooking, setCreateBooking] = useState({roomInfo:"", show:false});


    // Modal props

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClickRoomType = () => {
        setOpen(true);
    };

    const handleCloseBookingForm = (e) => {
        setShowErrors(false)
        setOpen(false);
    };


    return (
        <div>
            <Paper sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(225, 253, 234)",
            }} className="col-12 col-sm-10">
                <div className="container-fluid">
                    <div className="row mb-1 align-items-center justify-content-between">
                        <div className="col-6 col-sm-6" style={{paddingTop: '5px'}}>
                            <h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>{hotelData.name}</h1>
                        </div>

                        <div className="col-6 col-sm-6">
                            <Button variant="contained" color="secondary" className="float-end" startIcon={<StarIcon/>} onClick={handleReviewsClick}>
                                Reviews
                            </Button>
                        </div>
                    </div>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    spacing={3} className="text-start">
                    {Object.values(hotelData.rooms).map(roomInfo => <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card onClick={() => {
                            handleClickRoomType();
                            setCreateBooking({roomInfo: roomInfo, show: true})
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={roomInfo.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontFamily="fantasy" component="div">
                                        {roomInfo.name}
                                    </Typography>
                                    <Typography fontWeight="bold" variant="h6">$120 +$45 taxes & fees</Typography>
                                    <Typography color="text.primary">
                                        {roomInfo.size}
                                    </Typography>
                                    <Typography>{roomInfo.view}</Typography>
                                    <Typography>{roomInfo.beds}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)}

                </Grid>
            </Paper>
            <Dialog open={open} onClose={handleCloseBookingForm}
                    fullWidth={true}
                    maxWidth={"sm"}>
                <DialogTitle>Booking Details</DialogTitle>
                <DialogContent>
                    <Typography fontWeight={"bold"}>
                        {hotelData.name} - {createBooking.roomInfo.name}
                    </Typography>
                    <Form onSubmit={handleSubmit} onReset={handleCloseBookingForm}>
                            <Form.Group className="mb-2">
                                <Form.Label>Guest Name</Form.Label>
                                <Form.Control id="guestName" placeholder="Guest Name" onChange={(e) => handleOnInput(e)}/>
                                <Form.Label hidden={!showErrors} style={{color:'red'}}>{validationError.guestNameError}</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Number of Guests</Form.Label>
                                <Form.Control id="guestNumber" placeholder="Number of Guests" type='number' onChange={(e) => handleOnInput(e)} />
                                <Form.Label hidden={!showErrors} style={{color:'red'}}>{validationError.guestNumberError}</Form.Label>
                            </Form.Group>
                            <Form.Group className=" mb-2">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control id="contact" placeholder="Contact Number" type='number' onChange={(e) => handleOnInput(e)}/>
                                <Form.Label hidden={!showErrors} style={{color:'red'}}>{validationError.contactNumberError}</Form.Label>
                            </Form.Group>
                            <Form.Group className=" mb-2">
                                <Form.Label>Number of Rooms</Form.Label>
                                <Form.Control id="roomNumber" placeholder="Number of Rooms" type='number' onChange={(e) => handleOnInput(e)}/>
                                <Form.Label hidden={!showErrors} style={{color:'red'}}>{validationError.numberOfRoomError}</Form.Label>
                            </Form.Group>
                        <Form.Group className=" mt-3">
                        <div className="row justify-content-evenly">
                            <div className="row col-12 col-sm-6 justify-content-evenly">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        id="startDate"
                                        label="Check-in"
                                        value={departureValue}
                                        disablePast
                                        closeOnSelect
                                        onChange={(newValue) => handleOnChangeStartDate(newValue)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className="row col-12 col-sm-6 mt-2 mt-sm-0 justify-content-center">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        id="endDate"
                                        label="Check-out"
                                        value={returnValue}
                                        disablePast
                                        closeOnSelect
                                        minDate={departureValue}
                                        onChange={(newValue) => handleOnChangeEndDate(newValue)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" placeholder="Email" onChange={(e) => handleOnInput(e)}/>
                                <Form.Label hidden={!showErrors} style={{color:'red'}}>{validationError.emailError}</Form.Label>
                            </Form.Group>
                        <DialogActions className="mt-1">
                            <Button type="reset" color="error" >Cancel</Button>
                            <Button type="submit">Add to cart</Button>
                        </DialogActions>

                    </Form>

                </DialogContent>

            </Dialog>

            <Snackbar anchorOrigin={{vertical:"top", horizontal:"right"}} open={openSnackBar} autoHideDuration={4000} onClose={()=>setOpenSnackBar(false)}>
                <Alert onClose={()=>setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
                    Booking Successfully Added to Cart!
                </Alert>
            </Snackbar>

        </div>


    );

}

export default HotelDetail