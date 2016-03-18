// var apiKey = require('./../.env').apiKey;
//
// apiKey = "f73a42fce5f2b99f6d20b15a90b0011bb3ec40b7";

var getRepos = require('./../js/github-interface.js').getRepos;

$(document).ready(function() {
  $("#getUser").click(function(){

    var user = $("#userName").val();
    $(".showUser").text("the users name is " + user + ".");
    getRepos();
    console.log(response);



    // $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
    //   console.log(response);
    // }).fail(function(error){
    //   console.log(error.responseJSON.message);
    // });
  });
});
