import React, {useEffect, useState} from 'react'
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {hotels} from './HotelsDummy'
import Hotel from "./Hotel";
import SearchBar from "./SearchBar";

const HotelList = () => {
    const [sortReviews, setSortReviews] = React.useState('lowToHigh');
    const handleChange = (event) => {
        setSortReviews(event.target.value);
        if (event.target.value === "lowToHigh"){
            setSortedHotels(hotels.sort((a, b) => a.rating - b.rating));
        }
        else {
            setSortedHotels(hotels.sort((a, b) => b.rating - a.rating));
        }
    };

    const [sortedHotels, setSortedHotels] = useState([]);
    useEffect(() => {
        return () => {
            setSortedHotels(hotels.sort((a, b) => a.rating - b.rating));
        };
    }, []);


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
                    <div className="col-6 col-sm-6 " style={{paddingTop: '5px'}}>Showing 3 of 3 results
                    </div>
                    <div className="col-6 col-sm-6 ">
                        <Box>
                            <FormControl size="small">
                                <InputLabel id="travel-class-label">Sort By</InputLabel>
                                <Select
                                    labelId="travel-class-label"
                                    id="demo-simple-select"
                                    value={sortReviews}
                                    label="Travel Class"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"lowToHigh"}>Low to High</MenuItem>
                                    <MenuItem value={"HighToLow"}>High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
            </div>

            {sortedHotels.map((hotels) => {
                return (<Hotel name = {hotels.name} description={hotels.description} rating={hotels.rating} image={hotels.img}/>);
            })}
        </Paper>
        </div>
    )
}

export default HotelList