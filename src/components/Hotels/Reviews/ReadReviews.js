import {
    Button,
    CardContent,
    CardMedia,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import React from "react";


const ReadReviews = () =>{

    const reviewData = {
        "reviews": {
            "reveiw1": {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": [1,2,3,4]
            },
            "reveiw2": {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": [1,2,3]
            },
            "reveiw3": {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": [1,2,3,4,5]
            },
            "review4": {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": [1,2,3,4]
            },
            "review5": {
                "name": "Varun Dhawan",
                "hotelName": "Hotel Miramar",
                "location": "San Juan, Puerto Rico",
                "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "rating": [1,2,3,4]
            }
        }
    }

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
                        <div className="col-6 col-sm-6" style={{paddingTop: '5px'}}>
                            <h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>Reviews</h1>
                        </div>
                    </div>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    spacing={3} className="text-start">
                    {Object.values(reviewData.reviews).map(review => <Grid item xs={12}>
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
                                        {[...Array(review.rating.length)].map(() => {
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