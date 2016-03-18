var apiKey = require('./../.env').apiKey;

apiKey = "f73a42fce5f2b99f6d20b15a90b0011bb3ec40b7";

// var initMap = require('./../js/initMap-interface.js').initMap;

$(document).ready(function() {
  $("#getUser").click(function(){
    var user = $("#userName").val();
    $(".showUser").text("the users name is " + user + ".");
  });
});


  exports.getRepos = function(){
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
