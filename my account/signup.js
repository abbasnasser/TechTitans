// https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=signup&email=nasserabbas783@gmail.com&password=toor&phone=71589944&username=abbas nasser

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phone = document.getElementById("number");

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function Signup() {
  var check_mail_validity = ValidateEmail(email.value);
  if (check_mail_validity == false) {
    var erBox = document.getElementById("erora");
    erBox.textContent = "Email invalid";
    erBox.style.display = "block";
    function hide() {
      erBox.style.display = "none";
    }
    const myTimeout = setTimeout(hide, 5000);
  } else {
    var request = new XMLHttpRequest();

    https: request.open(
      "GET",

      "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=signup&email=" +
        email.value +
        "&password=" +
        password.value +
        "&username=" +
        username.value +
        "&phone=" +
        phone.value,
      true
    );

    https: request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);

      if (request.status >= 200 && request.status < 400) {
        if (data[0] == "True") {
          sessionStorage.setItem("email", email.value);
          window.location.href = "./verifyEmail.html";
        } else {
          if (data[1] == "emailexist") {
            var erBox = document.getElementById("erora");
            erBox.textContent = "Account already exists";
            erBox.style.display = "block";
            function hide() {
              erBox.style.display = "none";
            }
            const myTimeout = setTimeout(hide, 5000);
          }
        }
      }
    };

    request.send();
  }
}

function verify_code(code, emails) {
  //script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=verifymail&email=nasserabbas783@gmail.com&code=753317
  https: var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=verifymail&email=" +
      emails +
      "&code=" +
      code,
    true
  );
  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[1] == "verified") {
        console.log(data);

        window.location.href = "./login.html";
      } else if (data[1] == "account already verified") {
        var er = document.getElementById("error");
        error.textContent = "account is already verified";
        er.style.display = "block";
        function hide() {
          er.style.display = "none";
        }
        const myTimeout = setTimeout(hide, 5000);
      } else if (data[1] == "false code") {
        var er = document.getElementById("error");
        error.textContent = "incorrect verification code try again";
        er.style.display = "block";
        function hide() {
          er.style.display = "none";
        }
        const myTimeout = setTimeout(hide, 5000);
      }
    } else {
      console.log("error");
    }
  };

  request.send();
}
