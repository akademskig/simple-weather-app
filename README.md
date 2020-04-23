
# README

## What is this repository for?

This repo is solely for the interview purpose to give candidates a well established task for their expertise and ability evaluation. 

It is a fork of a original repository which contains a coding exercise explained later. You have writing permissions to it, so you can push to it whatever you like regarding this task, and we would be happy if you did.

## The task

We want you to create a simple, but functional interface in React that displays the weather. It should be created from “scratch”, potentially using some bootstrap functionality you are comfortable with. In this interface it should be possible to select between three different cities (Oslo, Zagreb, Los Angeles) and you should be able to see the weather in real time, updating every 10 seconds, implement this in a way you see fit.

If the temperature is significantly cooler or warmer than normal for the selected city, there should be an indication somewhere on the page. The historical weather data doesn’t need to be acquired in real-time or from an external API.

Feel free to improvise wherever you feel like the task is unclear, we’re primarily interested in the way you approach a problem. Keep it simple when possible.

## Technology

Feel free to use auto-generated boilerplate code. It needs to be written in React and make use of Redux. If you copy code (for example from stackoverflow) this needs to be clearly marked. It needs to run on a Windows 10 desktop computer or on a webpage.

## Requirements

- JavaScript
- React
- Redux
- Electron (optional)

*An example weather API you can use: https://api.met.no/*

## Nice to have

- Usage of a distributed system for version control (preferably this one).
- Unit and/or UI tests covering at least some part of the logic or interface created during the assignment.

## Who do I talk to?

Please, do not hessitate to reach out to your point of contact if in a need of assistastance or would like a clarification on anything related to what is written here.

__________

# Instructions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Local Deployment

To deploy the production build locally, in the project root directory, run: 
`npm run build && npx serve build`