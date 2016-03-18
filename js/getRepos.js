var apiKey = require('./../.env').apiKey;

var userInfo = require('./../js/userInfo.js').userInfo;
var userRepo = require('./../js/userRepo.js').userRepo;
var clearInfo = require('./../js/clear-user.js').clearInfo;

exports.getRepos = function(user){

  clearInfo();

  $.get('https://api.github.com/users/' + user + "?access_token=" + apiKey).then(function(response){
    userInfo(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + user + "/repos?access_token" + + apiKey + "&per_page=1000" ).then(function(response){
    userRepo(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
