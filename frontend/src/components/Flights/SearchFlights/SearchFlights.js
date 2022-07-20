/**
 * @author ${Bhavesh Lalwani}
 */

import React, { useEffect } from 'react';
import './SearchFlights.scss';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { format } from 'date-fns';

const SearchFlights = ({setIsButtonClicked, setReqFlights}) => {
  const [depatureValue, setDepartureValue] = React.useState(
    new Date()
  );
  const [numberOfTravellers, setNumberOfTravellers] = React.useState("1");
  const[errors, setErrors] = React.useState();
  const [fromLocation, setFromLocation] = React.useState();
  const [toLocation, setToLocation] = React.useState();
  let [fromLocationList, setFromLocationList] = React.useState([]);
  let [toLocationList, setToLocationList] = React.useState([]);
const flightSource = [
  { title: 'Toronto', place: 'Toronto, Canada', code: "YYZ" },
  { title: 'Halifax', place: 'Halifax, Canada', code: "YHZ" },
  { title: 'Moncton', place: 'Moncton, Canada', code: "YSJ" },
  { title: 'Montreal', place: 'Montreal, Canada', code: "YHZ" }];
  useEffect(() => {
    setFromLocationList(flightSource);
    setToLocationList(flightSource);
  }, [])
  
  //references
//https://mui.com/material-ui/

  const [returnValue, returnSetValue] = React.useState(null);
  const [travelClass, setTravelClass] = React.useState('economy');

  const handleChange = (event) => {
    setTravelClass(event.target.value);
  };

  const handleNoOfTravellerChange = (event) => {
    const { target: { value }  } = event;
    setErrors({numberOfTravellers: ''})
    setNumberOfTravellers(value);
    let reg = /^\d+$/.test(value)
    if(!reg) {
      setErrors({numberOfTravellers: 'Only numbers are permitted'});
    }else if(+value > 10) {
      setErrors({numberOfTravellers: 'Maximum 10 travellers are allowed'});
    }else if(+value == 0) {
      setErrors({numberOfTravellers: 'Minimum 1 traveller is required'});
    }
  }

  const handleFromLocation = (value) => {
    setFromLocation(value);
    const filteredLocations = flightSource.filter((item) => item.title !== value);
    setToLocationList(filteredLocations);
  }

  const handleToLocation = (value) => {
    setToLocation(value);
    const filteredLocations = flightSource.filter((item) => item.title !== value);
    setFromLocationList(filteredLocations);
  }

  const searchSubmit = () => {
    let departureDate = format(depatureValue, 'yyyy-MM-dd');
    let arrivalDate = returnValue ? format(returnValue, 'yyyy-MM-dd') : "";
    let obj = {
      travelersCount: numberOfTravellers,
      fromLocation: fromLocation,
      toLocation: toLocation,
      departureDate: departureDate,
      arrivalDate: arrivalDate,
      class: travelClass
    }
    setIsButtonClicked(true);
    setReqFlights(obj);
  }

  return (
  <div className={"SearchFlights"}>
    <div className="container res-p border">
      <div className='h4 b-title row justify-content-center'>Book International and Domestic flights</div>
      <form>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-2 m-top-16 ">
            <Stack spacing={2} >
              <Autocomplete
                onChange={(event, value) => handleFromLocation(value)}
                id="from-location"
                freeSolo
                options={fromLocationList.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
            </Stack>
          </div>
          <div className="col-6 col-md-4 col-lg-2 m-top-16">
            <Stack spacing={2} >
              <Autocomplete
                onChange={(event, value) => handleToLocation(value)}
                id="to-location"
                freeSolo
                options={toLocationList.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="To" />}
              />
            </Stack>
          </div>
          <div className="col-6 col-md-4 col-lg-2 m-top-16">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Departure"
                value={depatureValue}
                disablePast
                closeOnSelect
                inputFormat="yyyy-MM-dd"
                onChange={(newValue) => {
                  setDepartureValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="col-6 col-md-4 col-lg-2 m-top-16">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Return"
                value={returnValue}
                disablePast
                closeOnSelect
                inputFormat="yyyy-MM-dd"
                minDate={depatureValue}
                onChange={(newValue) => {
                  returnSetValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          {/* Number of travlers */}
          {/* <div className="col-6 col-md-4 col-lg-2 m-top-16">
            <TextField
              required
              autoComplete="off"
              id="outlined-number"
              value={numberOfTravellers}
              label="No of Travellers"
              inputProps={{ maxLength: 10 }}
              onChange={handleNoOfTravellerChange}
              error={Boolean(errors?.numberOfTravellers)}
              helperText={(errors?.numberOfTravellers)}
            />
          </div> */}
          <div className="col-6 col-md-4 col-lg-2 m-top-16">
            <Box>
              <FormControl fullWidth>
                <InputLabel id="travel-class-label">Class</InputLabel>
                <Select
                  labelId="travel-class-label"
                  id="demo-simple-select"
                  value={travelClass}
                  label="Travel Class"
                  onChange={handleChange}
                >
                  <MenuItem value={"economy"}>Economy</MenuItem>
                  <MenuItem value={"premiumEconomy"}>Premium Economy</MenuItem>
                  <MenuItem value={"business"}>Business</MenuItem>
                  <MenuItem value={"firstClass"}>First class</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

        </div>

        <div className="row">
          <div className="search-btn">
            <Button disabled={!toLocation || !fromLocation || !depatureValue  || Boolean(errors?.numberOfTravellers)} type="button" variant="contained" endIcon={<SearchIcon />}
              onClick={() => searchSubmit()}>
              Search
            </Button>
          </div>

        </div>
      </form>
    </div>
  </div>
)};

SearchFlights.propTypes = {};

SearchFlights.defaultProps = {};

export default SearchFlights;
