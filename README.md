<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Group 13 - 'TakeOff'

'TakeOff' is a travel management website which aims on providing the users with a one stop platform for flights, hotels, events and tours booking. The deployed website is currently a semi functional prototype demonstrating each feature of the website and the experience it will provide to the users. The website aims on providing a feedback to the user for all their actions. Every button provides a message to the user enhancing the user experience and usability of the website and also making sure that users are aware what each functionality offers.

## Group Information

- _Group No_: 13
- _Date Created_: July 15, 2022
- _Last Modification Date_: July 18, 2022
- _Website URL_: <https://take-off-fe.herokuapp.com/>
- _Git URL_: <https://git.cs.dal.ca/meghnak/csci-5709-group13/-/tree/main>

## Authors

- [Meghna Kumar](meghna.kumar@dal.ca) - _(Developer)_
- [Bhavesh Lalwani](bhavesh.lalwani@dal.ca) - _(Developer)_
- [Sharad Kumar](sharad.kumar@dal.ca) - _(Developer)_
- [Harshit Lakhani](harshit.lakhani@dal.ca) - _(Developer)_
- [Kalpit Macchi](kalpit.macchi@dal.ca) - _(Developer)_
- [Jayasree Koluthungan](jy525824@dal.ca) - _(Developer)_

## Getting Started

To get this app up and ready in your local, please adhere by the below details.

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins.

```
1. Install npm to run the app

2. Any IDE as per your preference - used Webstorm

3. CSS Library used - react-bootstrap

4. Component Library used - Material UI and Chakra UI
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing
 
A step by step series of examples that tell you how to get a development env running

```
1. Install Node in the System - Download it from <https://nodejs.org/en/download/>

2. Install any IDE of the required preference - example Webstorm from JetBrains

3. Import the project from git into the IDE using the git clone command with 'https://git.cs.dal.ca/meghnak/csci-5709-group13.git'

4. Let the project build and install the node modules

5. If the libraries haven't loaded then install them explicitly - npm install react-bootstrap bootstrap, npm install @mui/material @emotion/react @emotion/styled

6. Run the project from terminal by executing - npm run start

7. This will start the application on localhost:3000

8. The application will be up and running on the browser
```

The application when running will render the home page of the website displaying all the options the website offers. All the options are accessible via routing and each feature can be accessed by the user with proper feedbacks added to help user understand the functionality.

It is a completely responsive website, hence all the components on the pages adjusts on the screen irrespective of the device.

## Deployment

This project is deployed on Heroku.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

- [React](https://reactjs.org/) - Frontend library

- [Node](https://nodejs.org/en/download/) - Backend Javascript runtime

- [NPM](https://www.npmjs.com/) - Package Manager

- [Webstorm](https://www.jetbrains.com/webstorm/) - IDE

- [Heroku](https://id.heroku.com/login) - Deployment Platform

- [Material UI](https://mui.com/) - React Component Based library

- [Chakra UI](https://chakra-ui.com/) - React Component Based library

- [react-bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/) - CSS React library  

- [Google Chrome](https://www.google.com/chrome/?brand=YTUH&gclsrc=aw.ds&gclid=Cj0KCQjwheyUBhD-ARIsAHJNM-M6CqP2YuWDYt-kUixqdZh3aJZmmYidnlKteQBojtpHPIToxTL5ZlYaAtzXEALw_wcB) - Browser used for testing

## Work Division

#### Sharad Kumar
## Features:

1.  User Management

Task Of the Above feature

- The login of users .

- Registration of new users.

- Profile page.

- Logout page.

- Session management

- User authentication

2. Notification

- Login notification
- Signup notification
- Login failed notification
- OTP notification


**File Names:**

**1. Frontend Files and their routes which are developed**

-src/App.jsx

-src/services/userService.js

-src/context/userContext.js

-src/components/Registration/Login.js

-src/components/Registration/Logout.js

-src/components/Registration/SignUp.js

-src/components/Profile/Profile.js




**2. Backend Files developed**

- backend/controller/user.js

- backend/models/userModel.js

- backend/routes/userRoute.js

- backend/server.js

 
#### Meghna Kumar

Feature developed:

-  **Hotel Management**

- Display list of hotels
- Display details about each hotel
- Create a booking and add it to cart
- Display list of upcoming and previous bookings
- Modify an existing booking
- Cancel an existing booking

- **Review and Feedback**
- Add a review for hotel
- Display the reviews for hotel
- Sort the reviews by rating

  
**Front-end Files**

1. _frontend/src/components/Hotels/Bookings/Bookings.js - This page contains all the hotel booking history for the user. It displays the bookings sorted with dates. Upcoming bookings are displayed first and completed bookings later. For upcoming bookings two options are provided modify and cancel the booking.
2. _frontend/src/components/Hotels/HotelDetail/HotelDetail.js - This page contains the details about a specific hotel including the type of rooms available and their prices. Each room card opens a booking form using which user can create a booking which gets added to the cart.
3. _frontend/src/components/Hotels/Dashboard.js - This is tha landing page for hotel. It displays the list of hotels for the location selected from the dropdown.
4. _frontend/src/components/Hotels/Hotel.js - This component has the code for the hotel card that gets rendered on the hotel landing page.
5. _frontend/src/components/Hotels/HotelList.js - This component contains the logic of calling the Hotel component in loop for rendering the hotel cards based on number of hotels fetched from DB.
6. _frontend/src/components/Hotels/SearchBar.js - It provides the functionality to search for a specific hotel from the list of hotels on the hotel landing page.
7. _frontend/src/services/hotelServices.js - Creates a connection with the backend and makes the API call.
8. _frontend/src/components/Hotels/Reviews/ReadReviews.js - This component is used to display the list of reviews available for a hotel.

**Back-end Files**

1. _backend/controller/hotelAndReviews.js - It contains the logic for retrieving the list of hotels, modifying existing booking, cancelling a booking and creating a booking. It further provides a logic for updating the status of a booking after successful payment.
2. _backend/models/hotelBookings.js - This is a model class for storing all the attributes for hotel booking corresponding to hotelbooking collectio mongoDB.
3. _backend/models/hotelList.js - This is a model class for storing all the attributes for list of hotels corresponsing to hotels collection in mongoDB.
4. _backend/routes/hotelRoute.js - This file contains all the routes for each logic provided in hotelAndReviews controller class.
5. _backend/server.js (partially)

  
  
#### Bhavesh Lalwani
Feature developed:
**Transport Management**
- Searching for flights
- Displaying the list of flights
- Booking flights  
- Modify an existing flight booking
- Cancel an existing flight booking

**Trip Management**
- Display trip history

**Front-end Files**
1. frontend\src\services\flightBookingService.js - Creates a connection with the backend and makes the API call for all methods required for flight booking.
2. frontend\src\services\flightServices.js - Creates a connection with the backend and makes the API call for all flight related API calls.
3. frontend\src\components\Flights\FlightBookingList\FlightBookingList.js - This component shows the list of flight bookings created by user
4. frontend\src\components\Flights\FlightBookingList\FlightBookingList.scss - This component constains styling for flight booking cards
5. frontend\src\components\Flights\FlightBookings\FlightBookings.js - This component is landing page for flight bookings and it is also parent component of flight booking list.
6. frontend\src\components\Flights\FlightBookings\FlightBookings.scss - It contains styling for flight bookings page
7. frontend\src\components\Flights\FlightDetails\FlightDetails.js - This component shows the details of the flight selected by the user 
8. frontend\src\components\Flights\FlightDetails\FlightDetails.scss - This file has contains the styling for flight details page
9. frontend\src\components\Flights\FlightList\FlightList.js - This component contains the code for displaying the available flights
10. frontend\src\components\Flights\FlightList\FlightList.scss - This file contains the styling for flight cards page
11. frontend\src\components\Flights\SearchFlights\SearchFlights.js - This component contains form which allows users to look for their required flights
12. frontend\src\components\Flights\SearchFlights\SearchFlights.scss - This file contains styling for search flight component
13. frontend\src\components\Flights\TravellerDetails\TravellerDetails.js - This component has a form for adding traveler details and adding flight booking to the cart
14. frontend\src\components\Flights\TravellerDetails\TravellerDetails.scss- this file contains styling for traveler details form
15. frontend\src\components\Flights\countries.js - This file contains the countries list
16. frontend\src\components\Flights\Flights.js - This component in landing page for flights page. It is the parent component for search flight and flight list components.
17. frontend\src\components\Flights\Flights.scss - This file has code for Navbar styling
18. frontend\src\components\common\Header\Header.js - This file has code for the navbar and logic for dynamically updating the links before and after login/logout 
19. frontend\src\components\common\Header\Header.scss - This file has code for Navbar styling


**Back-end Files**
1. backend\server.js (partially)
2. backend\routes\FlightRoute.js - It contains all the routes for the flight landing page
3. backend\routes\FlightBookingRoute.js - It contains all the routes for the flight booking page
4. backend\models\flightBookings.js - It contathe ins the model schema for flight bookings
5. backend\models\flightList.js - It contains the model schema for flight lists
6. backend\controller\flightBookings.js - It contains logic for getting the flight bookings, adding, modifying, and canceling the flight bookings
7. backend\controller\flights.js - It contains logic for getting the list of available flights

#### Jayasree Kulothungan

Feature developed:

**Event Management**
- Display list of events
- Display details about each event
- Create a booking and add it to cart
- Modify an existing booking
- Cancel an existing booking

**Tour Management**
- Display list of tour packages
- Display details about each tour packages
- Create a booking and add it to cart
- Modify an existing booking
- Cancel an existing booking

**Front-end Files**
1. frontend/src/components/Events/eventList/Events.jsx - The events.jsx file contains the code to display all the event cards and the filtering function to display cards based on the city and date
2. frontend/src/components/Events/BookingEvents/BookingEvents - The BookingEvents.jsx file contains the code to enter booking information and modal to display the booking summary.
3. frontend/src/components/TourPackages/TourPackages.jsx - The TourPackages.jsx file contains the code to display all the tour cards and the filtering function to display cards based on the city and date
4. frontend/src/components/TourPackages/BookingTour.jsx - The BookingTour.jsx  file contains the code to enter booking information and modal to display the booking summary.

**Back-end Files**
1. backend/models/eventModel.js - Contains the mongoDB model for events table
2. backend/models/bookingEvents.js - Contains the mongoDB model for eventBookings table.
3. backend/controller/event.js - Contains the logics for getting data from mongoDB evnts table.
4. backend/controller/eventBooking.js - Contains the logic for creating, updating and getting booking information.
5. backend/routes/eventRoute.js - Contains the API end point route for getting events.
6. backend/routes/eventBookingRoute.js - Contains the API endpoint routes for creating, updating and getting booking information.
7. backend/models/tourPackageModel.js - Contains the mongoDB model for tour package table.
8. backend/models/tourBookingModel.js - Contains the mongoDB model for tourPackageBookings  table.
9. backend/controller/tourPackage.js -  Contains the logics for getting data from mongoDB tour package table.
10. backend/controller/tourBooking.js - Contains the logic for creating, updating and getting booking information. 
11. backend/routes/tourBookingRoute.js - Contains the API endpoint routes for creating, updating and getting booking information.
12. backend/routes/tourPackageRoute.js - Contains the API end point route for getting tour packages.


#### Kalpit Machhi

Feature developed:

- **Cart Management**
- Adding items to cart
- Calculating cart total
- Removing items from cart
- Displaying cart items

- **Wallet Management**
- Adding items to cart
- Calculating cart total
- Removing items from cart
- Displaying cart items


**Front-end Files**


1.  _frontend\src\components\Cart\Cart.js_: It is the parent component for the cart feature. It displays the cart page for users.

2.  _frontend\src\components\Cart\CartHeader\CartHeader.js_: It is child component for displaying the header for the cart page.

3.  _frontend\src\components\Cart\CartList\CartList.js_: It makes a get request to fetch all the cart items for the user. Then, it displays the list of items. It also provides a button to delete a cart item which makes a delete request. It removes the item from the database.

4.  _frontend\src\components\Cart\CartTotal\CartTotal.js_: It is responsible for getting the item data from the database and calculating the total amount for the cart items.

5.  _frontend\src\components\Wallet\Wallet.js_: It is the parent component for the wallet feature.

6.  _frontend\src\components\Wallet\WalletHistory\WalletHistory.js_: It makes a get request to fetch the wallet history from the database and displays the wallet transactions.

7.  _frontend\src\components\Wallet\WalletBalance\WalletBalance.js_: It is responsible for dispaying the current wallet balance to the user.

  

**Back-end Files**

  

1.  _backend\routes\cartRoute.js_: It includes all the routes for the cart feature.

2.  _backend\controller\cart.js_: It includes the controller logic for adding item to the cart, deleting item from the cart, and getting cart items from the database.

3.  _backend\models\cartModel.js_: It contains the model schema for the cart table.

4.  _backend\routes\walletRoute.js_: It includes all the routes for the wallet feature.

5.  _backend\controller\wallet.js_: It contains controller logic for adding money to wallet, getting wallet balance, and fetching wallet history.

6.  _backend\models\walletModel.js_: It contains the model schema for the wallet table.

<br/>

#### Harshit Lakhani

Feature developed:

- **Offers Management**
- Creatig interesting offers for customers.
- Shows details of offers
- Copy offer codes on clipboard
- Offer check on payments page
- Minimum amount, maximum amount, type based offer validation 

- **Payment Management**
- Transaction management
- Credit/Debit card saving for quick checkout
- Add wallet balance using cards
- Apply offers on final payable Amount
- Final payment using wallet balance


**Front-end Files**

1.  _frontend/src/components/Payment/Payment.js_: It's main parent component for whole payment's page.
2. _frontend/src/components/Payment/Card/Card.js_: It's design layout for the debit/credit card.
3. _frontend/src/components/Payment/Card/CardList.js_: It's design for card list.
4. _frontend/src/components/Payment/Cart/Cart.js_: It's design for cart balance and promo validation
5. _frontend/src/components/WalletaCard/WalletCard.js_: It's design for wallet balance, pay now and add money feature.
6. _frontend/src/components/Offers/Offers.js_: It's a design for main offers page.
7. _frontend/src/components/Header/OffersHead.js_: It's a design for offers page's head.
8. _frontend/src/components/Grid/OfferGrid.js_: It's a design for all the offer's grid.
9. _frontend/src/components/Home/Home.js_: Design for landing page.

**Backend Files**

1. _backend/controller/offers.js_: It's a cotroller for offers feature.
2. _backend/controller/payment.js_: It's a controller for payment feature.
3. _backend/models/offers.js_: It's a database schema for offers feature.
4. _backend/models/payment.js_: It's a database schema for payment feature.
5. _backend/routes/offersRoute.js_: It's a routes page for offers feature.
6. _backend/routes/paymentRoute.js_: It's a routes page for payments feature.


## Sources Used

The following sources were used in understanding some parts of this tutorial

1. https://mui.com/material-ui/react-card/
Referred to understand how the Card component of Material UI works and how it can be used in the website. Most of the pages like - Hotel detail page, flight detail page, flight bookings page have used it.

2. https://mui.com/material-ui/react-grid/
Referred to understand how to align card components in the form of grid. The files using card components have mostly used mui grid to align the cards.

3. https://mui.com/material-ui/react-snackbar/
Used Material UI's snackbar component to pop a toast message on click of certain user actions.

4. https://mui.com/material-ui/react-dialog/
User Material UI's dialog component to have booking form and modified it as per the requirement of the website.

5. https://stackoverflow.com/questions/41058681/sort-array-by-dates-in-react-js
Referred to the sorting array by dates explanation here to have the sort by functionality enabled and working on hotel listing page and reviews page.

6. https://mui.com/material-ui/api/text-field/
Referred to access text field and its properties while building signup form

7. https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
Referred to access regex expression for email validation

8. https://mui.com/material-ui/material-icons/?query=account
Referred to access account icons to be places in profile screen

## Group Project Team - Group 13

### Team Members

- Bhavesh Lalwani

- Harshit Lakhani

- Kalpit Macchi

- Sharad Kumar

- Jayasree Koluthungan

- Meghna Kumar

## Acknowledgments

- IDE Reference: https://www.jetbrains.com/webstorm/

- Deployment Reference: https://id.heroku.com/login

- Software Reference: https://nodejs.org/en/download/

- Frontend Library Reference: https://reactjs.org/

- CSS Reference: https://react-bootstrap.netlify.app/getting-started/introduction/

- Color combination Reference: https://material.io/design/color/the-color-system.html

- Component library Reference: https://mui.com/ and https://chakra-ui.com/

### Image/Icon Reference

- Application Logo Reference : https://www.flaticon.com/premium-icon/flight_4283062?term=flight&related_id=4283062

- Skyline hotel listing background Image - https://search.openverse.engineering/image/fe4fae86-acf6-46bb-8345-2f5423ff9a61 , "File:Kaohsiung Skyline 2020.jpg" by 毛貓大少爺 is licensed under CC BY-SA 2.0."

- Hotel Card Image Reference: https://unsplash.com/photos/jmkMl20jNS0

- Hotel Card My bookings page References: https://search.openverse.engineering/image/b1d8eef1-5ef9-411a-804d-e4148ef297eb
https://search.openverse.engineering/image/7f80a973-574e-4c5c-9a57-fa14502a29eb
https://search.openverse.engineering/image/afb60f89-c00c-45e7-863c-745fb22dbb45
https://search.openverse.engineering/image/e061dc6e-1806-4cec-9441-1b4420ef11fb
https://search.openverse.engineering/image/772ea16d-0a82-48df-97ee-e6fa7beea510

- Hotel detail room type image Reference: https://search.openverse.engineering/image/b3bbb3d2-b758-40f6-83c2-33bb3dd4d6aa
https://search.openverse.engineering/image/b1277ef8-ce4d-4725-ac01-d50db359494f
https://search.openverse.engineering/image/275e55c6-73fb-4197-bead-41e800b3724f
https://search.openverse.engineering/image/302dc0c5-d728-4bcc-bb23-f4f9d0481b15

- User Icon: https://mui.com/material-ui/material-icons/?query=user&theme=Outlined&selected=AccountCircleOutlined

## References

[1] Mui.com. 2022. _React Card component - Material UI_. [online] Available at: <https://mui.com/material-ui/react-card/> [Accessed 11 July 2022].

[2] Mui.com. 2022. _React Grid component - Material UI_. [online] Available at: <https://mui.com/material-ui/react-grid/> [Accessed 4 July 2022].

[3] Mui.com. 2022. _React Snackbar component - Material UI_. [online] Available at: <https://mui.com/material-ui/react-snackbar/> [Accessed 29 June 2022].

[4] Mui.com. 2022. _React Dialog component - Material UI_. [online] Available at: <https://mui.com/material-ui/react-dialog/> [Accessed 2 July 2022].

[5] JS, S., Balan, P., Louis, V. and Shukla, M., 2022. _Sort array by dates in React JS_. [online] Stack Overflow. Available at: <https://stackoverflow.com/questions/41058681/sort-array-by-dates-in-react-js> [Accessed 16 July 2022].

[6] Creative Commons. 2022. _When we share, everyone wins - Creative Commons_. [online] Available at: <https://creativecommons.org/> [Accessed 1 July 2022].
