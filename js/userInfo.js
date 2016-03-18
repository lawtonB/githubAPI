exports.userInfo = function(response){
  $('#usercontainer').show();
  $('#NameOutput').append(response.name);
  $('#followersCount').append(response.followers);
  $('#followingCount').append(response.following);
  console.log(response);
};
