<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# 'TakeOff'

'TakeOff' is a travel management website which aims on providing the users with a one stop platform for flights, hotels, events and tours booking. The deployed website is currently a semi functional prototype demonstrating each feature of the website and the experience it will provide to the users. The website aims on providing a feedback to the user for all their actions. Every button provides a message to the user enhancing the user experience and usability of the website and also making sure that users are aware what each functionality offers.

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
