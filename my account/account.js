if (localStorage.getItem("username") != null) {
  console.log("data exist");
  var container = document.getElementById("container");
  container.innerHTML = "";
  container.style.backgroundColor = "black";
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  console.log(username);

  login(username, password);
} else {
}

function login(username, password) {
  var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=login&email=" +
      username +
      "&password=" +
      password,
    true
  );

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[0] == "True") {
        sessionStorage.setItem("token", data[1]);

        window.location.href = "./dashboard.html";
      } else {
        console.log("false");
      }
    } else {
      console.log("error");
    }
  };

  request.send();
}
