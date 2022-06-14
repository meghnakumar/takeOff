import React, {useState} from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/

const Bookings = () => {

    const[reviewButton, showReviewButton] = useState(false)

    const bookingData = {
        "bookings": {
            "booking1": {
                "date": "Garden View Suite - Twin with Balcony",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "img": "https://live.staticflickr.com/4152/5118876374_19128d90d0_b.jpg",
                "status":"Upcoming"
                //    https://search.openverse.engineering/image/b1d8eef1-5ef9-411a-804d-e4148ef297eb
            },
            "booking2": {
                "date": "Garden View Suite - Twin with Balcony",
                "hotelName": "Ibsens Hotel",
                "location": "Copenhagen, Denmark",
                "img": "https://live.staticflickr.com/7569/15760578227_d946d0b27c_b.jpg",
                "status":"Upcoming"
                //    https://search.openverse.engineering/image/7f80a973-574e-4c5c-9a57-fa14502a29eb
            },
            "booking3": {
                "date": "Garden View Suite - Twin with Balcony",
                "hotelName": "Schwarzer Bock Hotel",
                "location": "Wiesbaden, Germany",
                "img": "https://live.staticflickr.com/2175/2504826760_06f2d29c60_b.jpg",
                "status":"Upcoming"
                //    https://search.openverse.engineering/image/afb60f89-c00c-45e7-863c-745fb22dbb45
            },
            "booking4": {
                "date": "Garden View Suite - Twin with Balcony",
                "hotelName": "El Cortez Hotel",
                "location": "Las Vegas, United States",
                "img": "https://live.staticflickr.com/3241/2970607810_c94fea5a8e_b.jpg",
                "status":"Upcoming"
                //    https://search.openverse.engineering/image/e061dc6e-1806-4cec-9441-1b4420ef11fb
            },
            "booking5": {
                "date": "Garden View Suite - Twin with Balcony",
                "hotelName": "Raffles Hotel",
                "location": "Singapore",
                "img": "https://live.staticflickr.com/4112/5444940496_3bf47e3929_b.jpg",
                "status":"Completed"
                //    https://search.openverse.engineering/image/772ea16d-0a82-48df-97ee-e6fa7beea510
            }
        },
        "reviews": {}
    };

    const [removeBooking, setRemoveBooking] = useState({bookingInfo:"", show:false});


    // Modal props

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log(removeBooking);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
                    {Object.values(bookingData.bookings).map(bookingInfo => <Grid item xs={12}>
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
                                        {bookingInfo.date}
                                    </Typography>
                                    <Typography fontWeight="bold" variant="h6">{bookingInfo.hotelName}</Typography>
                                    <Typography color="text.primary">
                                        {bookingInfo.location}
                                    </Typography>
                                    <Typography color="text.primary">
                                        {bookingInfo.status}
                                    </Typography>
                                </CardContent>
                                <Button variant="outlined" color="error" className="float-end me-3 mb-1 mt-lg-3"
                                        startIcon={<DeleteIcon/>} onClick={() => {
                                    handleClickOpen();
                                    setRemoveBooking({bookingInfo: bookingInfo, show: true})
                                }}>
                                    Cancel
                                </Button>
                                <Button variant="outlined" color="primary" className="float-end me-3 mb-1 mt-lg-3"
                                        startIcon={<EditIcon/>}>
                                    Modify
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
                        Your hotel room booking at {removeBooking.bookingInfo.hotelName} will be removed for date {removeBooking.bookingInfo.date}.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="error"  onClick={handleClose} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

        </div>


    )

}

export default Bookings