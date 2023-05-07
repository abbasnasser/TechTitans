var username = document.getElementById("username");
var password = document.getElementById("password");
function login() {
  var request = new XMLHttpRequest();
  //script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=login&email=nasserabbas783@gmail.com&password=abbas
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

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[1] == "newpassword sent to your mail") {
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
