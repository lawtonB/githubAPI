exports.userInfo = function(response){
  $('#usercontainer').show();
  $('#avatarContainer').append("<img src=" + response.avatar_url + ">");
  $('#NameOutput').append(response.name);
  $('#followersCount').append(response.followers);
  $('#followingCount').append(response.following);
  $('#repoCount').append(response.public_repos);
  console.log(response);
};
