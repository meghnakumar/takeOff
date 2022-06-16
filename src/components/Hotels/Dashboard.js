import React, {useState} from 'react';
import background from "../../assets/images/skyline1.jpg";
import './Hotels.scss';
import HotelList from "./HotelList";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";


const Dashboard = () => {
    const [isLocationSelected, setIsLocationSelected] = useState()
    const [location, setlocation] = useState('Halifax');
    const styles = {
        paperContainer: {
            backgroundImage: `url(${background})`
        }
    };

    const handleLocationSelected = (value) => {
        setlocation(value)
        setIsLocationSelected(true)

    }

    return (


        <Grid item xs={12} sm={8} style={{
            backgroundImage: `url(${background})`,
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover', height: '300px',
            opacity: '90%',
            flexGrow: 1
        }}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <FormControl sx={{m: 15}}
                             className="col-8 col-sm-5 col-md-4 col-lg-3"
                             size="small" style={{backgroundColor: "white"}}>
                    <InputLabel id="demo-simple-select-label"
                                variant="filled" >Choose your location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="location"
                        onChange={(event, value) => handleLocationSelected(value)}>
                        <MenuItem value={"Halifax"}>Halifax</MenuItem>
                        <MenuItem value={"Montreal"}>Montreal</MenuItem>
                        <MenuItem value={"Toronto"}>Toronto</MenuItem>
                    </Select>
                </FormControl>
            </Grid>


            <Grid item style={{
                backgroundColor: '#b3e3f4',

            }}>

                {<HotelList/>}


            </Grid>

        </Grid>

    )
};
Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
