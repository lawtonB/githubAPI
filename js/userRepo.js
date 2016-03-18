exports.userRepo = function(response){
  for(var i = 0; i < response.length; i++){
    $("#project").append("<li>" + gitHubUser.name + "/li>" + "<ul>" +
      "<li>description:" + gitHubUser[i].description + "</li>" +
      "</ul>");
      console.log(response);
  }
};
