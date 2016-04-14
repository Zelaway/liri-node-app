var keys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require("spotify");
var omdb = require ("omdb");
var fs = require("fs");
var request = require('request');
var params = process.argv.slice(2);
//note to 

// function request(){
// request = request("http://www.omdbapi.com/?t=" + input[1] + "&y=&plot=short&tomatoes=true&r=json", function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//    var result =  JSON.parse(body);
//    console.log(result.imdbRating);
//     }
//   }
// }

//  request();

 

function spotifyIt() {
 spotify.search({ type: 'track', query: params[1] }, function(err, data) {
   if ( err ) {
       console.log('Error occurred: ' + err);
       return;  //from spotify npm docs
   }
   else{
   var songInfo = data.tracks.items[0];
   console.log("the artist is", songInfo.artists[0].name);
   // console.log("the song name is", songInfo.name);
   // console.log("the album is called", songInfo.album.name);
   // console.log("here is a preview link", songInfo.preview_url);
   
   };
 });
}

spotifyIt();

var getTweets = function(){
    var client = new Twitter(keys.twitterKeys);
    var params = {screen_name: 'zelaway'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
             if (!error) {
                 console.log("these are my tweets");
               console.log(tweets);
 }
             
});
}
getTweets();


// function tweets () {
// var client = new Twitter
// params = {Zelawy: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }
// })
// }

// tweets();
// switch(action){
//    case "my-tweets":
//        Twitter();
//        break;
//    case "spotify-this-song":
//        case "spotify-this-song":
// 		if(params[1]){  
// 		   spotifyIt();
// 		 } else  {  //if blank call it blink 182's "whats my age again"
// 		   spotifyIt(params[1] = "Whats my age again");
// 		 }
// 		   break;
//    case "movie-this":
//        omdb();
//        break;

// }
