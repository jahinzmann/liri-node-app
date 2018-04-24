//import { join } from "path";
//import { parse } from "querystring";

//Dependencies
// var env = require("dotenv").config();
var fs = require('fs') //file system node library allows file-system interactivity
var request = require('request'); //request node library
var LiriTwitterBOT = require("./keys.js"); //store data from keys.js
var twitter = require('twitter'); //twitter node library
var spotify = require('./keys.js');

//log function

var logObject = "";

function writeLog(textLog) {
    fs.appendFile('random.txt', textLog, function(err) {
        if (err) {
            console.log(err);
        };
        console.log('random.txt has been updated!')
    });
}; //end of log function


//Pseudocode
// capture inputs with argv[] and join

var input = process.argv[2];
var query = process.argv.slice(3) + join('+');
// for (i = 3; i < process.argv; i++) {
//     query += process.argv[i];
// }

// create code for the paramters regarding the pulls from each of the API's
// Twitter

var twitterClient = new twitter(LiriTwitterBOT.LiriTwitterBOT);
var twitterParams = {
    screen_name: 'Hinzmannator',
    count: 20
};
//getTweets function
function getTweets() {
    twitterClient.get('statuses/user_timeline', twitterParams, function(error, response) {
        if (error) {
            console.log(err)
        };
        console.log(response);
        console.log("these are my last" + response.length + "tweets.")
        for (var i = 0; i < response.length; i++) {
            console.log('#' + (i + 1) + " = " + response[i].text);
            console.log('posted on: ' + response[i].created_at);
            logObject = task + "" + logObject + "\n";
            writeLog(logObject);
        }
    });
}; //end getTweets

//Spotify


//getSongs function
function getSongs(query) {
    if (!query) {
        query = "what's+my+age+again";
    };
    var queryURL = 'https://api.spotfiy.com/v1/search?q=' + query + '&limit=5&type=track';
    request(queryURL, function(err, response, body) {
        if (err) {
            console.log(err);
        };
        body = JSON.parse(body);
        console.log('tunes for your ears motherfucker');
        for (var i = 0; i < body.tracks.items.length; i++) {
            logObject = input + ", " + query + ", " + body.tracks.items[i].artists[0].name + ", " + body.tracks.items[i].name
            body.tracks.items[i].name + ", " + body.tracks.items[i].preview_url + ", " + body.tracks.items[i].album.name + "\n";
        }; //end of loop
        writeLog(logObject);
    });
}; //End of Spotify

//OMDB

// handle errors

// switch statements

switch (input) {
    case 'twitter':
        getTweets(input);
        break;
    case 'spotify':
        getSongs(input);
        break;
    case 'OMDB':
        break;
    case 'inquiry':
        break;
        // have a default backup response
    default:
        console.log('Somethings broken dumbass');
}; //end of switch case




// GIT requests:

// twitter
// spotify request library json.parse
// OMDB request libaray json.parse 
//http://www.omdbapi.com/?i=tt3896198&apikey=8b4b6ccb

// console.log all these calls in the desired format (create a new line for each item)

// random task inquiry