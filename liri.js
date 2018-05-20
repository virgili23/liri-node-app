// require dotenv
require("dotenv").config();

//Grab data from keys.js
var keys = require("./keys.js");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');

// This variable accesses Spotify keys.
var spotify = new Spotify(keys.spotify);

// This variable accesses the Twitter keys
var client = new Twitter(keys.twitter);


// Global variables

// var command = process.argv[2];

var node = process.argv;

function tweets()  {

    var params = {screen_name: 'All_The_Baez'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
// This is just filler space
    console.log("");
    console.log("Here are your latest tweets:");
    console.log("");
// The tweets are in an array, (0 being the latest tweet). A for loop does this 20 times


    for(var i = 0; i < 5; i++) {

        var date = tweets[i].created_at;

        console.log(tweets[i].text + " tweeted at: " + date.substring(0, 19));
    }

    console.log('');
    console.log("May I assist you with anything else?");
    console.log('');

  }
});
} // end of function

// if process.argv[2] = tweets, run the tweets function
if (command === 'tweets'| command === 'my-tweets') {
    tweets();
} else if (command === 'songify'){
    songify();
}

// end of tweets function

/*-------------------------------------------------------
-------------------------------------------------------
--------------------------------------------------------
---------------------------------------------------*/


// Begin spotify function
var song = node[3];

function songify() {
spotify.search({ type: 'track', query: song }, function(err, data) {

    var songData = data.tracks.items[0];
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log('');
    console.log("Here's what I got on ... ");
    console.log('');
    // artist
    console.log("Artist: " + songData.artists[0].name);
    //song name
    console.log("Song: " + songData.name);
    //spotify preview link
    console.log("Preview URL: " + songData.preview_url);
    //album name
    console.log("Album: " + songData.album.name);
    console.log("");
    console.log("May I assist you with anything else?");
    
  });
}

// songify();




