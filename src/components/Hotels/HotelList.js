import React from 'react'
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {CardImg, Container} from "react-bootstrap";
import {hotels} from './HotelsDummy'
import Hotel from "./Hotel";
import SearchBar from "./SearchBar";

const HotelList = () => {
    const [travelClass, setTravelClass] = React.useState('lowToHigh');
    const handleChange = (event) => {
        setTravelClass(event.target.value);
    };

    return(
        <div>
            <SearchBar/>

        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(225, 253, 234)",
            }}
            className="col-12 col-sm-10"
        >
            <div className="container-fluid">
                <div className="row justify-content-between mb-1">
                    <div className="col-12 col-sm-6" style={{paddingTop: '5px'}}>Showing 3 of 3 results
                    </div>
                    {/*<div className="col-9 basis-1/2 sm:basis-1/4 lg:basis-1/6">*/}
                    {/*    <Select options={sortBy}/>*/}
                    {/*</div>*/}
                    <div className="col-12 col-sm-6">
                        <Box>
                            <FormControl size="small">
                                <InputLabel id="travel-class-label">Sort By</InputLabel>
                                <Select
                                    labelId="travel-class-label"
                                    id="demo-simple-select"
                                    value={travelClass}
                                    label="Travel Class"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"lowToHigh"}>Lowest to Highest</MenuItem>
                                    <MenuItem value={"HighToLow"}>Highest to Lowest</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
            </div>

            {hotels.map((hotels) => {
                return (<Hotel name = {hotels.name} description={hotels.description} rating={hotels.rating}/>);
            })}
        </Paper>
        </div>
    )
}

export default HotelList