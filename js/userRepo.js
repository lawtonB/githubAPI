exports.userRepo = function(response){
  for(var i = 0; i < response.length; i++){
    $("#projectList").append("<li>" + response[i].name + "<ul>" +
      "<li>description:" + response[i].description + "</li>" +
      "</ul>");
      console.log(response);
  }
};
