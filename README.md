# Social Engineering Quiz

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Tools and Technologies](#tools-and-technologies)
- [Authors](#authors)
- [License](#license)
  

## Description
Social Engineering Quiz is an application made with `React` that test your ability to recognize and avoid scam/phishing messages. This quiz has been done as a Final Project for CPSC329 FALL 2021 Course.

### Here is a brief walkthrough of the quiz:
https://user-images.githubusercontent.com/66049909/144729855-80fe4a1a-0276-424f-ae7b-145b5b7eafc3.mp4

### Click here to go to the quiz: [Social-Engineering-Quiz-Website](https://emiravc.github.io/Social-Engineering-Quiz/) 

### **<span style="color:red;">!!! Note !!!</span>** 
- **Our web application is only compatible with computers.**  
- **We currently do not support mobile devices.**

The user will be provided two types of questions:
1. Given two images, choose which one is the phising message and which is the legitimate message
2. Given one image, choose whether it is a phising or a legitimate message

Hints are provided for each question that are meant to assist the user in answering the qustions.\
A result page will appear after the completion of the test, in which the test results are displayed.

If you would like to see our repository for the live website please check: [Live-Page](https://github.com/emiravc/Social-Engineering-Quiz/tree/gh-pages)

# Tools and Technologies
The following technologies and tools were used to build our project:
- ReactJS (JavaScript)
- Node.js
- CSS
- HTML

# Installation
### **<span style="color:red;">!!! Note !!!</span>** 
- **This section is only necessary if you want to download the source code and run in it at localhost in your local device.**
- **Otherwise, you can just go to the website provided here: [Social-Engineering-Quiz-Website](https://emiravc.github.io/Social-Engineering-Quiz/)**

## Step 1: Node.js
In order to launch our project, you need to download [Node.js](https://nodejs.org/en/download/) (LTS version is recommended for most users)
\
After that, open up your terminal and check if `Node` is installed:
```
$ node -v
v16.13.0
```
Also, check if `npm` is installed, which comes with `Node`
```
$ npm -v
8.1.0
```

## Step 2: Clone GitHub Repository
On your terminal, do the following to clone the repository:
```
$ git clone https://github.com/Joey-mi/social-engineering-quiz/tree/main-page
```

## Step 3: Check JSON File
Go to the ```package.json``` file in your local machine and make sure you have the following script properties:
```javascript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Step 4: Install Dependencies
Execute the following commands in your terminal before starting our project :

```
$ npm install
```
This will download all the dependencies defined in the ```package.json``` file and into a ```node_modules``` folder.\
This folder will created in the root directory of the ```social-engineering-quiz``` folder in your local machine

## Step 5: External Libaries

If you have never used material-ui, execute the following commands in your terminal before starting our project :

```
npm install @material-ui/core
npm install @material-ui/core @materiait-ui/icons
npm install @emotion/react
```

## Step 6: Starting the App
Go to the root directory of the project and then start the app:
```
$ cd social-engineering-quiz    // first, go to root directory of the project...
$ npm start                     // then, start the app in the root directory
```

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Other Available Scripts

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

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Authors
This project was made by Computer Science Undergraduate students from the University of Calgary
as a final project for the CPSC 329 course. \
List of authors and their GitHub accounts:

- [Roberto Zaghini](https://github.com/RobertZ225)
- [Emir Avci](https://github.com/emiravc)
- [Joanne Millard](https://github.com/Joey-mi)
- [Amirreza Pazira](https://github.com/areza244)
- [Anish Pokhrel](https://github.com/apokhrel7)

# License 
[MIT](https://github.com/Joey-mi/Social-Engineering-Quiz/blob/main/LICENSE)
