var logo = document.getElementById("logo");
var trans = document.getElementById("container");
var nav_bar = document.getElementById("nav_bar");

if (
  localStorage.getItem("username") != null &&
  sessionStorage.getItem("token") != null
) {
  trans.style.display = "none";
  logo.style.display = "flex";
  nav_bar.style.display = "none";
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

var menu = document.getElementById("mnu");

function myFunction() {
  var x = document.getElementById("menus");
  var b = document.getElementById("b");

  if (x.style.display === "block") {
    x.style.animation = "animatemenuout 0.5s";
    setTimeout(hide, 400);
    function hide() {
      x.style.display = "none";
    }
  } else {
    x.style.animation = "animatemenuin 0.5s";
    // b.classList.add("add_blur_effect_menu");
    x.style.display = "block";
  }
}

var x = document.getElementById("mnu");
var x2 = document.getElementById("menus");
x.addEventListener("click", myFunction);

window.addEventListener("mouseup", function (event) {
  if (event.target != x2) {
    var b = document.getElementById("cor1");

    // b.classList.remove("add_blur_effect_menu");

    x2.style.display = "none";
  }
});
