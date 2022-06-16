import React from 'react';
import {Grid, InputBase, Paper} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

/*Add code reference*/

const SearchBar = () => {
    return (
        <Grid container
             direction="row"
             justifyContent="center"
             alignItems="center"
        >
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            className="col-8 col-sm-5 col-md-4 col-lg-3 m-2"
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        </Grid>
    )
}
export default SearchBar



