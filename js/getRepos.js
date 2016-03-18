var apiKey = require('./../.env').apiKey;
apiKey = "f73a42fce5f2b99f6d20b15a90b0011bb3ec40b7";
var userInfo = require('./../js/userInfo.js').userInfo;
var userRepo = require('./../js/userRepo.js').userRepo;
var clearInfo = require('./../js/clear-user.js').clearInfo;

exports.getRepos = function(user){
  // var user = $("#userName").val();
  clearInfo();

  $.get('https://api.github.com/users/' + user + "?access_token=" + apiKey).then(function(response){
    userInfo(response);
    // console.log(gitHubUser);
    // console.log(gitHubUser.email);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + user + "?access_token=" + apiKey).then(function(response){
    userRepo(response);
    // console.log(gitHubUser);
    // console.log(gitHubUser.email);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
