import React, {useEffect, useState} from 'react'
import {Alert, Box, Button, Grid, Modal, Paper, Snackbar,CardContent,
    CardMedia, Typography} from "@mui/material";
import {CardImg} from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from "react-router";
import background from "../../assets/images/beach-background.jpg";

/*Author: Created by Meghna Kumar
Contains the format of hotel card which gets rendered on the dashboard*/

const Hotel = (props) => {
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const [openWishlistAlert, setOpenWishlistAlert] = useState({message:"", visibility:false});
    const goToDetailsPage= useNavigate();

    const handleClick =()=>{
        setAddedToWishlist(current=>!current)
        if(addedToWishlist===false){
            setOpenWishlistAlert({message:"Hotel added to wishlist!", visibility:true})
        }
        else
            setOpenWishlistAlert({message:"Hotel removed from wishlist!", visibility:true})
    }

    const id = props.id
    const hotelname = props.name
    const place = props.place

    //function to redirect to the hotel detail page based on which hotel cards book button is clicked.
    const handleBookClick = () =>{
        goToDetailsPage("/hotel-detail", {state:{hotelid:id, rooms:props.rooms, hotelname:hotelname, place:place, reviews: props.feedback, img:props.image}})

    }
    return(
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                mb: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            className="col-12 col-sm-10"
        >
            <Grid
                container
                direction="row"
                justifyContent="start"
                spacing={3} className="text-start">
                <Grid item xs={12}>
                    <Grid container
                          direction="row"
                          justifyContent="start"
                          style={{backgroundColor: "white"}}>
                        <Grid item xs={12} md={4}>
                            <CardMedia className="imageSize"
                                       component="img"
                                       image={props.image}
                                       height="207"
                                       alt={props.name}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CardContent style={{paddingBottom: "4px", paddingTop: "8px"}}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                <Typography gutterBottom variant="h5" fontFamily="fantasy" component="div">
                                    {props.name}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    <FavoriteIcon style={{
                                        color:addedToWishlist? 'red':'grey' }} onClick={handleClick}/>
                                </Typography>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start">
                                    {[...Array(props.rating)].map(() => {
                                        return (
                                            <span className="star" style={{color: '#ffd700'}}>&#9733;</span>
                                        );
                                    })}
                                </Grid>
                                <Typography color="text.primary">
                                    {props.description}
                                </Typography>
                            </CardContent>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-start">
                            <Button type="button" just style={{
                                "marginTop": "4px",
                                "padding": "8px 24px",
                                "borderRadius": "25px"
                            }} variant="contained" onClick={handleBookClick}>
                                Book
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "right"}} open={openWishlistAlert.visibility} autoHideDuration={2000}
                          onClose={() => setOpenWishlistAlert(false)}>
                    <Alert onClose={() => setOpenWishlistAlert(false)} severity="success" sx={{width: '100%'}}>
                        {openWishlistAlert.message}
                    </Alert>
                </Snackbar>
            </div>


        </Paper>

    )
}

export default Hotel