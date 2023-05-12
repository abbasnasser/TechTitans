var username = document.getElementById("username");
var password = document.getElementById("password");
var logo = document.getElementById("logo");
var trans = document.getElementById("trans");
var nav_bar = document.getElementById("nav_bar");
var local_pass_change = localStorage.getItem("change_pass");
if (local_pass_change == "true") {
  window.alert("Password Changed");
  localStorage.removeItem("change_pass");
}

function login() {
  trans.style.display = "none";
  logo.style.display = "flex";
  nav_bar.style.display = "none";
  var request = new XMLHttpRequest();

  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=login&email=" +
      username.value +
      "&password=" +
      password.value,
    true
  );

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[0] == "True") {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        sessionStorage.setItem("token", data[1]);

        window.location.href = "./dashboard.html";
      } else if (data[1] == "credentialserror") {
        logo.style.display = "none";
        trans.style.display = "block";
        nav_bar.style.display = "block";
        var atrlinl = document.getElementById("linker");

        atrlinl.href = "";
        atrlinl.removeAttribute("href");
        var er_box = document.getElementById("error");
        er_box.textContent = "Incorrect username or password";
        er_box.style.display = "block";

        function hide() {
          er_box.style.display = "none";
        }
        const myTimeout = setTimeout(hide, 3000);
      } else if (data[1] == "verifyemail") {
        logo.style.display = "none";
        trans.style.display = "block";
        nav_bar.style.display = "block";
        var er_box = document.getElementById("error");
        er_box.textContent = "Your email is not verified";
        er_box.style.display = "block";
        function hide() {
          var atrlinl = document.getElementById("linker");
          atrlinl.href = "./verifyEmail.html";
          er_box.style.display = "none";
          er_box.textContent = "Verify now >>";

          er_box.style.display = "block";
          sessionStorage.setItem("email", username.value);
        }
        const myTimeout = setTimeout(hide, 3000);
      }
    } else {
      console.log("error");
    }
  };

  request.send();
}

var for_btn = document.getElementById("forget");
for_btn.addEventListener("click", function () {
  var atrlinl = document.getElementById("linker");

  atrlinl.href = "";
  atrlinl.removeAttribute("href");
  var er_box = document.getElementById("error");
  if (username.value == "") {
    er_box.textContent = "Type your email first ";
    er_box.style.display = "block";

    function hide() {
      er_box.style.display = "none";
    }
    const myTimeout = setTimeout(hide, 3000);
  } else {
    sendNewPass();
  }
});

function sendNewPass() {
  var request = new XMLHttpRequest();
  // https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=resetPassword&email=nasserabbas783@gmail.com
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=resetPassword&email=" +
      username.value,
    true
  );
  trans.style.display = "none";
  logo.style.display = "flex";

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[1] == "newpassword sent to your mail") {
        trans.style.display = "block";
        logo.style.display = "none";
        var atrlinl = document.getElementById("linker");

        atrlinl.href = "";
        atrlinl.removeAttribute("href");
        var er_box = document.getElementById("error");
        er_box.textContent = "New password is sent to your email ";

        er_box.style.display = "block";

        function hide() {
          er_box.style.display = "none";
        }
        const myTimeout = setTimeout(hide, 3000);
      }
    } else if (data[1] == "email doesnt exist") {
      var atrlinl = document.getElementById("linker");
      trans.style.display = "block";
      logo.style.display = "none";

      atrlinl.href = "";
      atrlinl.removeAttribute("href");
      var er_box = document.getElementById("error");
      er_box.textContent = "Email doesnt exist ";

      er_box.style.display = "block";

      function hide() {
        er_box.style.display = "none";
      }
      const myTimeout = setTimeout(hide, 3000);
    }
  };

  request.send();
}

function myFunction() {
  var x = document.getElementById("menus");

  if (x.style.display === "block") {
    x.style.animation = "animatemenuout 0.5s";
    setTimeout(hide, 400);
    function hide() {
      x.style.display = "none";
    }
  } else {
    x.style.animation = "animatemenuin 0.5s";
    x.style.display = "block";
  }
}

var x = document.getElementById("mnu");
var x2 = document.getElementById("menus");
x.addEventListener("click", myFunction);

window.addEventListener("mouseup", function (event) {
  if (event.target != x2) {
    var b = document.getElementById("cor1");

    x2.style.display = "none";
  }
});
