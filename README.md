# Assignment 2 - Web API.

Name: Kevin Grimes
ID: 20089581

## Overview

(Note: Missing a good chunk of commit history - I had created a repo in a parent folder which contained my assignment 2 base folder but included folders with pieces of each lab's work as well as the pulled examples and had been making commits from there. It only dawned when testing assignment upload that pushing from there would upload loads of pointless files. Made a new repo in correct folder to prevent pushing unnecessary files.)

This API application provides backend functionality for the Movies App react project, which allows users to browse a database of new and old movies, mark favourites and read and write reviews posted to the database. The API is used to feed movie data to the main react app, it also provides authentication functinality to protect the app from unauthorized acccess and allow users with valid credentials to login and browse the database. The API stores and encrypts user credentials and provides JSON Web Tokens (JWTs) which are used to aid the authentication process. 

## Installation Requirements

In order to run the application installation of Node and Node Package Manager (npm) is required (https://nodejs.org/en/download/).

App was developed using:
Node v12.14.1
npm  v6.13.4

Either download the app using the ZIP download button above and unzip the file in a location of your choice; Or to install using git, open a terminal window in the folder you would lke to install the application within and run the following command:

```bat
git clone https://github.com/kevingrimestramore/ewd2020assignment2.git
```
Once npm is initialised within the app the already populated package.json file's dependencies will be used, so no further installation is required.

## API Configuration
Create a .env file in the source folder for the app and copy in the below variables inserting the revelant personal items. You will need to create a Movie DB account (https://www.themoviedb.org/) and acquire an authentication key to access the TMDB API. You will also need to create  MongoDB Cluster and insert the cluster URL.

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
SWAGGER_DOC=../movie-api-yaml/swagger.yaml
TMDB_KEY=[INSERT_TMDB_KEY_HERE]
mongoDB=[INSERT_MONGODB_CLUSTER_URL_HERE]
seedDb=true
secret=ilikecake
```

## Startup
Open a terminal window within the root directory of the application and run the following two commands in order:

```bat
npm install
npm start
```
This starts the application, which can be restarted manually at any time by typing 'rs' in the running terminal window and pressing enter; The application can also be stopped by presing 'ctrl+C'.
As stated previously, the app dependecies are included in the package.json file so further installation should not be necessary beyond npm install/start.

## API Design
[SwaggerHub Doc](https://app.swaggerhub.com/apis/kevingrimestramore/Movie/initial)

## Security and Authentication
Authentication is handled using JWTs. Once login has been completed users are granted an authorization token which is held in local storage on the front end. If requests are made to a protected route without possession of a valid token, users are redirected to a login page where they can login with valid credentials or sign up for access by providing a username and password after which they will be assigned an authorization token.

For development purposes there are 2 hardcoded users seeded into the API from launch with username - password credentials:

user1 - test1 <br>
user2 - test2

(There is no persistence so once the application has been reset, any created login credentials are reset.)

## Testing
Testing can be performed by entering the following commands in the root directory of the express application:

```bat
npm run unit-test
```
^ To run unit tests (Ensuring small individual components of the application are functioning as intended)

```bat
npm run test
```
^ To run integration tests (Ensuring combined components of the application are functioning and interacting as intended)

Mochawesome is a dependency installed in the package.json file which acts as a reporter for completed tests. Once tests have been initiated and completed, mochawesome will generate a HTML file at './mochawesome-report' which provides the test results in a presentable and easy to read format aside from the results in the terminal window.

## Integrating with React App

React app repo: https://github.com/kevingrimestramore/ewd2020assignment1

Once the custom Web API is started, the 'npm start' command can be entered in the root directory for the React app. The React app is initialised on port 3000, however requests are proxied to port 3030, which allows API calls from the React app to be received by the custom API.

For example: 

~~~Javascript
export const login = (username, password) => {
 return fetch('/api/users', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    method: 'post',
    body:  JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};
~~~
