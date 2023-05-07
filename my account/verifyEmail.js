var emails = sessionStorage.getItem("email");
function send_code() {
  https: var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=sendMail&email=" +
      emails,
    true
  );
  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[1] == "Verification code sent") {
        console.log("mailsent");
      } else if (data[1] == "email unavailable") {
        console.log("unavail");
      }
    } else {
      console.log("error");
    }
  };

  request.send();
}
send_code();
function verify_code() {
  var code = document.getElementById("code");

  //script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=verifymail&email=nasserabbas783@gmail.com&code=753317
  https: var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=verifymail&email=" +
      emails +
      "&code=" +
      code.value,
    true
  );
  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      if (data[1] == "verified") {
        sessionStorage.clear();
        window.location.href = "./login.html";
      } else if (data[1] == "account already verified") {
        var er = document.getElementById("error");
        er.textContent = "Account is already verified";
        er.style.display = "block";
        function hide() {
          er.style.display = "none";
        }
        const myTimeout = setTimeout(hide, 5000);
      } else if (data[1] == "false code") {
        var er = document.getElementById("error");
        er.textContent = "Incorrect verification code try again";
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
