# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)










# City-Explorer(front-end) && City-Explorer-API(back-end)

**Author**: Batool Ayyad
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview



### Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?)


City explorer is a project that do provied a location, image for geographic location, weather for 4days and all the moves that has the same name city that the user search for it.
the web use  the data from [locationiq website](https://locationiq.com/),  [themoviedb.org](https://www.themoviedb.org/settings/api) and  [weatherbit](https://www.weatherbit.io/account/dashboard) and use it inside a react.js code





## Getting Started
 

 ### What are the steps that a user must take in order to build this app on their own machine and get it running?


**LAB 6:**
- follow the lab constraction 
- make sign up to locationiq 
- get the data that I will need from locationiq
- make code that render the information from locationiq
- get the city as an input from user from a form


**LAB 7:**
- make a new repo for the back-end 
- instull the dependences: axios, cros, envdot.
- make a weather.json file to get the weather information from 
- make the front send requests to the end by axios
- deployed the back end on heroku
- deploy the front on netlify 


**LAB 8:**
- sing up to  [themoviedb.org](https://www.themoviedb.org/settings/api) and  [weatherbit](https://www.weatherbit.io/account/dashboard) 
- read the doc and search for your key
- check your link 
- after you make sure the link is working start working on your back-end code.
- work on the front-end to render (the weather for 4days, the location , the map and the movies with the same city name)
- deploy on heroku nad netlify


**LAB 9 & LAB 10:**


- on the back-end make a folder and call it Module
- make a 2 files inside the module folder for the weather and the movie
- and make them as a separated modules.
- **for lab 10** we make an array for the temporary memory for the movie module and make a (if statement ) so in case the city that the the user searching for it already in the memory array the back-end wont hit the thierd API.



## Architecture


### Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information.


Bootstap, Axios, React.js , Node.js, Express, Heroku, Netlify, GitHub, Cros


## Change Log


### Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:


05-23-2021 11:05pm - Application now has a fully-functional express server, with a GET route for the location resource.


## Credit and Collaborations


### Give credit (and a link) to other people or resources that helped you build this application. 


- Heba Eassam & Fatima Alshraa: help with writing the code for lab7 & lab8
- Saeed Awwad: help solve my code problems 
- layana Baba: give me instructions with lab 8 in the back-end how to work
- Yahia Qoous, Hiba Salem: help me in lab 7 to deploy on netlify 
- Rana Abu Samhan: solve my prblem with Heroku 
- Amro Albarham: help me with writing the code for lab 9 & 10

- [LTUC/amman-301d20-react](https://github.com/LTUC/amman-301d20-react/blob/master/class-06/demo/react-axios/src/App.js)
- **stack overflow**


### **LAB 6:**
### Name of feature:

- Display form
- Display a location information

#### Estimate of time needed to complete:
3hours

- Start time: 
2:50pm

- Finish time: 
7pm

- Actual time needed to complete: 
3.5 hours

### **LAB 7:**
### Name of feature:

- Weather (placeholder)
- Display a location information
- Errors (revisited) 

#### Estimate of time needed to complete:
1day

- Start time: 
24-5-2021 (3:00 pm)

- Finish time: 
26-5-2021(9:00 pm)

- Actual time needed to complete: 
2 and half days


### **LAB 8:**
### Name of feature:

- Display Weather (Live)
- Display Movies 
- Publish


#### Estimate of time needed to complete:
1day

- Start time: 
26-5-2021 (11:00 pm)

- Finish time: 
28-5-2021(11:00 pm)

- Actual time needed to complete: 
2 days


### **LAB 9 & 10:**
### Name of feature:

- Refactor: Modularize the back-end codebase.
- Refactor: Componentize the front-end codebase.
- Add memory for the Movie


#### Estimate of time needed to complete:
1day

- Start time: 
28-12-2021 (11:00 pm)

- Finish time: 
28-5-2021(1:00 am)

- Actual time needed to complete: 
2 hours