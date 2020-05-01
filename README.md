# Assignment 2 - Web API.

Name: Kevin Grimes
(Note: Missing a good chunk of commit history - I had created a repo in a parent folder which contained my assignment 2 base folder but included folders with pieces of each lab's work as well as the pulled examples and had been making commits from there. It only dawned on me when testing assignment upload that pushing from there would upload loads of pointless files. Made a new repo in correct folder to prevent pushing unnecessary files.)

## Overview

Give a brief overview of the Web API functionality.

## Installation Requirements

In order to run the application installation of Node and Node Package Manager (npm) is required (https://nodejs.org/en/download/).
App was developed using:
Node v12.14.1
npm  v6.13.4

Either download app using the ZIP download button above and unzip the file in a location of your choice; Or to install using git, open a terminal window in the folder you would lke to install the application within and run the command the command:

```bat
git clone https://github.com/kevingrimestramore/ewd2020assignment2.git
```
The rest of the dependences should be installed automatically later.

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
Open a terminal window within the root directory of the application and run the command:

```bat
npm start
```
This starts the application, which can be restarted manually at any time by typing 'rs' in the running terminal window and pressing enter; The application can also be stopped by presing 'ctrl+C'.
Describe how to start/stop the API. You could go though the ``scripts:`` property of the *package.json* file.

## API Design
Give an overview of your web API design. If you don't have a Swagger description, you could describe similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

[SwaggerHub Doc](https://app.swaggerhub.com/apis/kevingrimestramore/Movie/initial)


## Security and Authentication
. Give details of any authentication/ security implemented on the API. Indicate which routes are protected.

## Testing
. Briefly explain any testing strategy that accompanies the project, including and example report if you have one...
![][image1]

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  


[image1]: ./testing.png
