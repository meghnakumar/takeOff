import {
    Button,
    CardContent,
    CardMedia,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, FormControl,
    Grid, InputLabel, MenuItem,
    Paper, Select,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";


const ReadReviews = () =>{

    const reviewData = {
        "reviews": [
            {
                "name": "Suyash Medhavi",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": 4
            },
            {
                "name": "Ananaya Tiwari",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": 3
            },
            {
                "name": "Priya Tyagi",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": 5
            },
            {
                "name": "Shriya Srivastava",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": 5
            },
            {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": 2
            }]
        }

    const [sortedReviews, setSortedReviews] = useState("");
    useEffect(() => {
        return () => {
            setSortedReviews(reviewData.reviews.sort((a, b) => a.rating - b.rating));
        };
    }, []);


    const [sortReviews, setSortReviews] = React.useState('lowToHigh');
    const handleChange = (event) => {
        setSortReviews(event.target.value);
        console.log(event.target.value);
        if (event.target.value === "lowToHigh"){
            setSortedReviews(reviewData.reviews.sort((a, b) => a.rating - b.rating));
        }
        else {
            setSortedReviews(reviewData.reviews.sort((a, b) => b.rating - a.rating));
        }
    };

    return(
        <div>

            <Paper sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(225, 253, 234)",
            }} className="col-12 col-sm-8">
                <div className="container-fluid">
                    <div className="row mb-1 align-items-center justify-content-between">
                        <div className="col-6 col-sm-6 p-0 m-0" style={{paddingTop: '5px'}}>
                            <h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>Reviews</h1>
                        </div>
                        <div className="col-6 col-sm-6 text-end p-0 m-0" style={{paddingTop: '5px'}}>
                            <FormControl size="small">
                                <InputLabel id="travel-class-label">Sort By</InputLabel>
                                <Select
                                    labelId="travel-class-label"
                                    id="demo-simple-select"
                                    value={sortReviews}
                                    label="Travel Class"
                                    onChange={handleChange}>
                                    <MenuItem value={"lowToHigh"}>Low to High</MenuItem>
                                    <MenuItem value={"HighToLow"}>High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    spacing={3} className="text-start">
                    {Object.values(sortedReviews).map(review => <Grid item xs={12}>
                        <Grid container
                              direction="row"
                              justifyContent="start"
                              style={{backgroundColor: "lightyellow"}}>

                            <Grid item xs={12} md={8}>
                                <CardContent style={{paddingBottom: "4px", paddingTop: "8px"}}>
                                    <Typography fontWeight="bold" variant="h6">{review.name}</Typography>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start">
                                        {[...Array(review.rating)].map(() => {
                                            return (
                                                <span className="star" style={{color: '#ffd700'}}>&#9733;</span>
                                            );
                                        })}
                                    </Grid>
                                    <Typography color="text.primary">
                                        {review.feedback}
                                    </Typography>
                                </CardContent>

                            </Grid>
                        </Grid>
                    </Grid>)}
                </Grid>
            </Paper>


        </div>
    )

}

export default ReadReviews