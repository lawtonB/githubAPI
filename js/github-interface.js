var apiKey = require('./../.env').apiKey;

apiKey = "f73a42fce5f2b99f6d20b15a90b0011bb3ec40b7";

exports.getRepos = function(){
  var user = $("#userName").val();
  $.get('https://api.github.com/users/' + user + "?access_token=" + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    return response
  });
};
