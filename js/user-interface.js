var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $("#submitButton").click(function(){
    getRepos($("#userNameInput").val());
  });
});
