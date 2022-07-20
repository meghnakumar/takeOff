import React, {useEffect, useState, useContext} from 'react'
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography, TextField} from "@mui/material";
import Hotel from "./Hotel";
import {getHotels} from "../../services/hotelServices";

/*Author: Created by Meghna Kumar
Iterates over the filtered list of hotel object and calls the Hotel component*/

const HotelList = (props) => {
    const [hotels, setHotels] = useState([]);
    const [sortReviews, setSortReviews] = React.useState('lowToHigh');

    //function to perform the sorting operation on the hotel list
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
        getHotels().then(result => {
            setHotels(result.data);
            setSortedHotels(result.data.sort((a, b) => a.rating - b.rating));
        })
      
    }, []);

    //filter the list based on the selected location

    let filteredHotels = sortedHotels.filter((item) => item.location === props.location);
    const handleOnSearch=(e)=> {
        const search = e.target.value
        if(search===''){
            filteredHotels = sortedHotels.filter((item) => item.location === props.location);
        }
        else{
            const filteredText = filteredHotels.filter(find=>{
                return find.name.toUpperCase().includes(search.toUpperCase());
            });
            filteredHotels = filteredText
        }
    }

    return(
        <div>

            { <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: "rgb(225, 253, 234)",
            }}
            className="col-12 col-sm-10">
            <div className="container-fluid" >
                <div className="row justify-content-between mb-1">
                    <div className="col-6 col-sm-6 " style={{paddingTop: '5px'}}>Showing {filteredHotels.length} of {filteredHotels.length} results
                    </div>
                    <div className="col-6 col-sm-6 ">
                        <Box className="float-end">
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

            {filteredHotels.map((hotels) => {
                return (<Hotel name = {hotels.name} description={hotels.description} rating={hotels.rating} image={hotels.img} id={hotels._id} rooms={hotels.rooms} place={hotels.location} feedback={hotels.reviews}/>);
            })}
        </Paper>}
        </div>
    )
}

export default HotelList