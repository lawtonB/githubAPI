// var apiKey = require('./../.env').apiKey;
//
// apiKey = "f73a42fce5f2b99f6d20b15a90b0011bb3ec40b7";

var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $("#submitButton").click(function(){
    getRepos($("#userNameInput").val());
  });
});



    // $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
    //   console.log(response);
    // }).fail(function(error){
    //   console.log(error.responseJSON.message);
    // });
