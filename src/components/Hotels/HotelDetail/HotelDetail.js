import React, {useState} from 'react'
import {Button, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router";

/*https://www.expedia.ca/Page-Hotels-Country-Inn-Suites-By-Radisson.h22413242.Hotel-Information?pwaDialogNested=media-gallery - Image*/

const HotelDetail = () => {

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

    // function getWeeksAfter(date, amount) {
    //     return date ? addWeeks(date, amount) : undefined;
    // }
    //
    // const [value, setValue] = React.useState([null, null]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleReviewsClick = () => {
        goToReadReviews("/read-reviews")
    }

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
                        <Card>
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

                <Grid container style={{paddingTop: '30px'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <h3 style={{fontFamily: 'fantasy', textAlign: "left"}}>Booking Details</h3>
                        </div>
                        <div className="row">

                            {/* MUI Date Range Picker, license issue*/}
                            {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                            {/*    <DateRangePicker*/}
                            {/*        disablePast*/}
                            {/*        value={value}*/}
                            {/*        maxDate={getWeeksAfter(value[0], 4)}*/}
                            {/*        onChange={(newValue) => {*/}
                            {/*            setValue(newValue);*/}
                            {/*        }}*/}
                            {/*        renderInput={(startProps, endProps) => (*/}
                            {/*            <React.Fragment>*/}
                            {/*                <TextField {...startProps} />*/}
                            {/*                <Box sx={{ mx: 2 }}> to </Box>*/}
                            {/*                <TextField {...endProps} />*/}
                            {/*            </React.Fragment>*/}
                            {/*        )}*/}
                            {/*    />*/}
                            {/*</LocalizationProvider>*/}
                        </div>
                    </div>
                </Grid>


            </Paper>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>


    );

}

export default HotelDetail