// require dotenv
require("dotenv").config();

//Grab data from keys.js
var keys = require("./keys.js");
var request = require('request');
var Twitter = require('twitter');
// var spotify = require('spotify');
var fs = require('fs');

// This variable accesses Spotify keys.
// var spotify = new Spotify(keys.spotify);
// This variable accesses the Twitter keys
//  var client = new Twitter(keys.twitter);

var client = new Twitter(keys.twitter);

var command = process.argv[2];

function tweets()  {

    var params = {screen_name: 'All_The_Baez'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
// This is just filler space
    console.log("--------------------------------------------------");
    console.log("Here are my latest tweets:");
    console.log("");
// The tweets are in an array, (0 being the latest tweet). A for loop does this 20 times
    for(var i = 0; i < 5; i++) {

        var date = tweets[i].created_at;

        console.log(tweets[i].text + " tweeted at: " + date.substring(0, 19));
    }
  }
});
} // end of function

// if process.argv[2] = tweets, run the tweets function
if (command === 'tweets'| command === 'my-tweets') {
    tweets();
}
// end of tweets function





 // console.log(spotify);





