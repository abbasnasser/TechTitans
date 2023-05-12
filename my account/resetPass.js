var menu = document.getElementById("mnu");
var email = localStorage.getItem("username");
var logo = document.getElementById("logo");
var trans = document.getElementById("trans");
var nav_bar = document.getElementById("nav_bar");

if (email == null) {
  window.location.href = "../index.html";
}

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

function reset() {
  var oldpass = document.getElementById("oldpass");
  var newpass = document.getElementById("newpass");
  var error = document.getElementById("error");

  trans.style.display = "none";
  logo.style.display = "flex";
  nav_bar.style.display = "none";
  var request = new XMLHttpRequest();

  https: request.open(
    "GET",

    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=changepass&email=" +
      email +
      "&oldpassword=" +
      oldpass.value +
      "&password=" +
      newpass.value,

    true
  );

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[0] == "True") {
        localStorage.setItem("change_pass", "true");
        window.location.href = "./login.html";
      } else {
        trans.style.display = "block";
        logo.style.display = "none";
        nav_bar.style.display = "block";
        error.textContent = "Old Password Incorrect";
        error.style.display = "block";
      }
    }
  };

  request.send();
}
