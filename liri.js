//import { join } from "path";
//import { parse } from "querystring";

//Dependencies
require("dotenv").config();
var fs = require('fs') //file system node library allows file-system interactivity
var request = require('request'); //request node library
var LiriTwitterBOT = require("./keys.js") //store data from keys.js
var twitter = require('twitter'); //twitter node library

//console.log(LiriTwitterBOT);


//Pseudocode
// capture inputs with argv[] and join

var input = process.argv[2];
var query 
    for (i = 3; i < process.argv; i++) {
    query += process.argv[i];
    }

// create code for the paramters regarding the pulls from each of the API's

var params = {screen_name: 'Hinzmannator'};
var client = new twitter(LiriTwitterBOT);
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
});

// fs.appendFile to write results of API calls to the console log
fs.appendFile(random.txt)

// handle errors

// switch statements

// have a default backup response

// GIT requests:

// twitter
// spotify request library json.parse
// OMDB request libaray json.parse 
    //http://www.omdbapi.com/?i=tt3896198&apikey=8b4b6ccb

// console.log all these calls in the desired format (create a new line for each item)

// random task inquiry