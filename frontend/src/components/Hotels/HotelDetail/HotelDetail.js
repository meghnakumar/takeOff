import React, {useState, useEffect} from 'react'
import {Form} from "react-bootstrap";
import {
    Alert,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Dialog, DialogActions, DialogContent, DialogTitle,
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
import {useLocation} from "react-router-dom";
import {createHotelBooking} from "../../../services/hotelServices";
import {addCartItem} from "../../../services/cartServices";

/*Author: Created by Meghna Kumar
Renders the room details about a specific hotel and provides the option to create a booking by clicking on specific room card*/

/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/
//references
//https://mui.com/material-ui/

const HotelDetail = () => {
    let userId = JSON.parse(localStorage.getItem("userDetails"))._id;
    const [userIdPresent, setUserIdPresent] = useState(false)
    const goToReadReviews = useNavigate();
    const location = useLocation();
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
    const [hotelBookingSummary, setHotelBookingSummary] = useState({
        startDate: '',
        endDate:'',
        roomType:'',
        hotelName:'',
        location:'',
        guests:'',
        contactNumber:0,
        numberOfRooms:0,
        guestName:'',
        status:'',
        userId:userId,
        hotelId:location.state.hotelid,
        img: location.state.img
    })

    useEffect(()=>{
        if(userId !== undefined)
            setUserIdPresent(true)
    })


    //function to handle all the form input and provide appropriate validation checks for it.
    const handleOnInput = (e) => {
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

    //function to perform actions on submitting the form by calling the add to cart API and then storing it in booking collection by making a an api call
    const handleSubmit = (e) => {
        e.preventDefault();

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
            createHotelBooking(hotelBookingSummary).then(result => {
                if(result.status === 200){
                    const bookingId = result.data._id
                    const cartItem = {
                        type:"hotel",
                        userId:userId,
                        itemId:bookingId,
                        price: hotelBookingSummary.price
                    }
                    addCartItem(cartItem).then(result =>{
                    })

                }
                setOpenSnackBar(true)
                setOpen(false);
            })
        } else {
            setShowErrors(true)
        }
    }

    const handleClose = () => {
        setOpen(false);
    };




    //function to validate start date change
    const handleOnChangeStartDate = (value) =>{
        setDepartureValue(value)
        if (value === "") {
            setValidationError(prevState => {
                return {...prevState, startDateError: "Please enter the start booking date"}
            })
        } else setValidationError(prevState => {
            return {...prevState, startDateError: ""}
        })

    }

    //function to validate end date change
    const handleOnChangeEndDate = (value) =>{
        returnSetValue(value)
        if (value === "") {
            setValidationError(prevState => {
                return {...prevState, endDateError: "Please enter the end booking date"}
            })
        } else setValidationError(prevState => {
            return {...prevState, endDateError: ""}
        })

    }


    //function to redirect to the reviews page when user clicks on review button
    const handleReviewsClick = () => {
        goToReadReviews("/read-reviews", {state:{hotelid:location.state.hotelid, reviews:location.state.reviews}})
    }


    const [createBooking, setCreateBooking] = useState({roomInfo:"", show:false});

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
                            <div className="h2" style={{fontFamily: 'fantasy', textAlign: "left"}}>{location.state.hotelname}</div>
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
                    {Object.values(location.state.rooms).map(roomInfo => <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card onClick={() => {
                            handleClickRoomType();
                            setCreateBooking({roomInfo: roomInfo, show: true})
                        }}>
                            <CardActionArea>
                                <CardMedia className="imageSize"
                                    component="img"
                                    height="200"
                                    image={roomInfo.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontFamily="fantasy" component="div">
                                        {roomInfo.name}
                                    </Typography>
                                    <Typography fontWeight="bold" variant="h6">${roomInfo.price} +${roomInfo.tax} taxes & fees</Typography>
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
                        {location.state.hotelname} - {createBooking.roomInfo.name}
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
                            <Button type="submit" onClick={()=>{
                                setHotelBookingSummary({
                                    startDate: departureValue,
                                    endDate:returnValue,
                                    roomType:createBooking.roomInfo.name,
                                    hotelName:location.state.hotelname,
                                    location:location.state.place,
                                    guests:guestNumber,
                                    contactNumber:contact,
                                    numberOfRooms:parseInt(roomNumber),
                                    guestName:guestName,
                                    email:email,
                                    status:'Pending',
                                    userId:userId,
                                    hotelId:hotelBookingSummary.hotelId,
                                    price: parseInt(roomNumber)*(createBooking.roomInfo.price+createBooking.roomInfo.tax),
                                    img:location.state.img
                                });
                            }}>Add to cart</Button>
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