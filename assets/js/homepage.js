var getUserRepos = function (user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};
getUserRepos("facebook");
