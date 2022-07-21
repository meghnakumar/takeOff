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
import {getHotels} from "../../../services/hotelServices";
import {useLocation} from "react-router-dom";

/*Author: Created by Meghna Kumar
Renders the list of reviews and ratings available for a hotel*/

//references
//https://mui.com/material-ui/

const ReadReviews = () =>{
    const location = useLocation();
    const [reviewData, setReviewData] = useState("");
    const [sortedReviews, setSortedReviews] = useState("");
    useEffect(() => {
       setReviewData(location.state.reviews)
        return () => {
            if(location.state.reviews !== undefined){
                setSortedReviews(location.state.reviews.sort((a, b) => a.rating - b.rating));
            }

        };
    }, []);

    let reviewList = sortedReviews
    const [sortReviews, setSortReviews] = React.useState("lowToHigh");
    const handleChange = (event) => {
        setSortReviews(event.target.value);
        if (event.target.value === "lowToHigh"){
            setSortedReviews(reviewData.sort((a, b) => a.rating - b.rating));
            reviewList = reviewData.sort((a, b) => a.rating - b.rating)
        }
        else {
            setSortedReviews(reviewData.sort((a, b) => b.rating - a.rating));
            reviewList = reviewData.sort((a, b) => b.rating - a.rating)
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
                            {/*<h1 style={{fontFamily: 'fantasy', textAlign: "left"}}>Reviews</h1>*/}
                            <div className="h2" style={{fontFamily: 'fantasy', textAlign: "left"}}>Reviews</div>
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
                    {reviewList?.length ? reviewList.map(review => <Grid item xs={12}>
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
                    </Grid>): <div style={{marginTop: "20px", paddingLeft: "16px"}}><b>No review to display</b></div>}
                </Grid>
            </Paper>


        </div>
    )

}

export default ReadReviews