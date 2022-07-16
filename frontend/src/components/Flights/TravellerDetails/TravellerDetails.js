import React from 'react';
import './TravellerDetails.scss';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Card, CardContent} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbox from '../../common/Snackbox/Snackbox';
import { Box, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { createFlightBooking } from "./../../../services/flightBookingService";
import {addCartItem} from "../../../services/cartServices";
import {countries} from './../countries';

//references
//https://mui.com/material-ui/

const TravellerDetails = ({flightObj}) => {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState();
  const [snackBox, showSnackBox] = React.useState();
  const [travelerAdded, isTravelerAdded] = React.useState();
  const [travelerCount, setTravelerCount] = React.useState(0);
  const [lastNameError, setLastNameError] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [cartBox, showCartBox] = React.useState();
  const [travelerDetails, setTravelerDetails] = React.useState([]);


  const addToCart = () => {
    if (!travelerCount) {
      isTravelerAdded(true);
      setTimeout(() => {
        isTravelerAdded(false);
      }, 3000);
    } else {
      let travelerObj = flightObj;
      travelerObj.userId = 1;
      travelerObj.travelerDetails = travelerDetails;
      travelerObj.status = "pending";
      createFlightBooking(travelerObj).then(result => {
        console.log(result);
        if (result.status === 200) {
          const bookingId = result.data._id
          const cartItem = {
            type: "flight",
            userId: "user1",
            itemId: bookingId,
            price: travelerObj.price
          }
          addCartItem(cartItem).then(result => {
            showCartBox(true);
            setTimeout(() => {
              showCartBox(false);
            }, 3000);
          })
        }
      }).catch(err => {
        console.error(err);
      });
    }
  }

  
  const [fareType, setFareType] = React.useState('economy');
  const handleFareChange = (event) => {
    setFareType(event.target.value);
  };

  let todaysDate = new Date();
  let maxDate = todaysDate.getFullYear() - 16;
  let maxAllowedDate = new Date();
  maxAllowedDate.setFullYear(maxDate);
  const [dateOfBirth, setDateOfBirth] = React.useState(maxAllowedDate);
  const handleFirstNameChange = (event) => {
    const { target: { value } } = event;
    setErrors({ firstName: '' })
    setFirstName(value);
    let reg = /^[a-zA-Z]+$/.test(value)
    if (!reg) {
      setErrors({ firstName: 'Only letters are allowed' });
    }
  }

  const handleLastNameChange = (event) => {
    const { target: { value } } = event;
    setLastNameError({ lastName: '' })
    setLastName(value);
    let reg = /^[a-zA-Z]+$/.test(value)
    if (!reg) {
      setLastNameError({ lastName: 'Only letters are allowed' });
    }
  }

  const handleEmailChange = (event) => {
    const { target: { value } } = event;
    setEmailError({ email: '' })
    setEmail(value);
    let reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)
    if (!reg) {
      setEmailError({ email: 'Please enter valid email' });
    }
  }

  const addTraveller = () => {
    setTravelerCount(travelerCount+1);
    let obj = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      email: email,
      country: "CA",
      fareType: fareType,  
    };
    console.log(obj);
    if(travelerDetails.length == 0) {
      setTravelerDetails([obj]);
    } else {
      setTravelerDetails(travelerDetails => [...travelerDetails, obj]);
    }
  console.log("travellers array", travelerDetails);
    showSnackBox(true);
    setTimeout(() => {
      showSnackBox(false);
    }, 3000);
  }



  return (
    <div className="TravellerDetails col-md-6 col-12">
      {/* <h3>Traveller details</h3> */}
      <div class="h3 center">Traveler details</div>
      <Card className="m-tp-16 col-sm-12" style={{ fontSize: "12px" }}>
        <CardContent>
          <div className="row container-box">
            <div className="m-tb-8 col-6">
              <TextField
                required
                fullWidth
                autoComplete="off"
                id="outlined-number"
                value={firstName}
                label="First Name"
                onChange={handleFirstNameChange}
                error={Boolean(errors?.firstName)}
                helperText={(errors?.firstName)}
              />
            </div>
            <div className="m-tb-8 col-6">
              <TextField
                required
                fullWidth
                autoComplete="off"
                id="outlined-number"
                value={lastName}
                label="Last Name"
                onChange={handleLastNameChange}
                error={Boolean(lastNameError?.lastName)}
                helperText={(lastNameError?.lastName)}
              />
            </div>
            <div className="m-tb-8 col-6">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  fullWidth
                  label="Date of Birth"
                  value={dateOfBirth}
                  disableFuture
                  closeOnSelect
                  onChange={(newValue) => {
                    setDateOfBirth(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="m-tb-8 col-6">
              <TextField
                required
                fullWidth
                autoComplete="off"
                id="outlined-number"
                value={email}
                label="Email"
                type="email"
                onChange={handleEmailChange}
                error={Boolean(emailError?.email)}
                helperText={(emailError?.email)}
              />
            </div>
            <div className="m-tb-8 col-6">
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    {...props}
                  >
                    {option.label} ({option.code})
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>
            <div className="m-tb-8 col-6">
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="fare-type-label">Fare type</InputLabel>
                  <Select
                    labelId="fare-type-label"
                    value={fareType}
                    label="Fare type"
                    onChange={handleFareChange}
                  >
                    <MenuItem value={"standart"}>Standard</MenuItem>
                    <MenuItem value={"comfort"}>Comfort</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="row justify-content-center ">
            <Button className="col-md-8"
              disabled={!firstName || !lastName || !email || Boolean(errors?.firstName) ||
                Boolean(lastNameError?.lastName) || Boolean(emailError?.email)}
              type="button" variant="outlined" onClick={() => {
                addTraveller()
              }
              }>
              Add traveller
            </Button>
            </div>
            <div className='row justify-content-center add-to-cart'>
              <Button className="col-md-6 col-12"
                type="button" variant="contained" onClick={() => { addToCart() }
                }>
                Add to cart
              </Button>
            </div>
            {snackBox ?
              <Snackbox message="Traveler added succesfully" severity="success" /> : null
            }
            {cartBox && travelerCount > 0 ?
              <Snackbox message="Booking added succesfully to the cart" severity="success" /> : null
            }
            {(travelerAdded && travelerCount == 0) ?
              <Snackbox message="Please add traveler detail before proceeding" severity="error" /> : null
            }
          </div>
        </CardContent>
      </Card>
      
    </div>
  )
};

export default TravellerDetails;
