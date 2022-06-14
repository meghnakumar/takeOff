import React, {useState} from 'react'
import {Box, Button, Grid, Modal, Paper, Typography} from "@mui/material";
import {CardImg} from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from "react-router";

const Hotel = (props) => {
    const [addedToWishlist, setAddedtoWishlist] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const goToDetailsPage= useNavigate();

    const handleClick =()=>{

        setAddedtoWishlist(current=>!current)
        if(addedToWishlist===true){
            setModalOpen(true)
        }
        else
            setModalOpen(false)

        console.log(addedToWishlist)
        console.log(modalOpen)
    }

    const handleClose = () => {
        setModalOpen(false)
    }

    const handleBookClick = () =>{
        goToDetailsPage("/hotel-detail")

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
            <Grid container spacing={2}>
                <Grid item sm={12} md={2}>

                    <CardImg alt="complex" src="/beach-background.jpg"/>

                </Grid>
                <Grid item sm={12} md={10} container>
                    <Grid item xs container direction="column" alignContent="flex-start">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >

                            <Typography variant="subtitle1" component="div">
                                {props.name}
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                <FavoriteIcon style={{
                                    color:addedToWishlist? 'red':'grey' }} onClick={handleClick}/>
                            </Typography>

                           <Modal
                                open={modalOpen}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description" >
                               <Box sx={{
                                   width: 250,
                                   height: 100,
                                   backgroundColor: 'white',
                                   alignItems:'center',
                                   '&:hover': {
                                       backgroundColor: 'primary.main',
                                       opacity: [0.9, 0.8, 0.7],
                                   },
                               }}>
                               <h6>Added to Wishlist</h6>
                           </Box>
                            </Modal>

                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start">
                            {[...Array(props.rating.length)].map(() => {
                                return (
                                    <span className="star" style={{color: '#ffd700'}}>&#9733;</span>
                                );
                            })}
                        </Grid>

                        <Typography variant="body2" align="left" color="text.secondary">
                            {props.description}
                        </Typography>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-start">
                            <Button type="button" style={{
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
        </Paper>

    )
}

export default Hotel