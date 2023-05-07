var token = document.getElementById("token");
const tek = sessionStorage.getItem("token");
token.textContent = tek;
var logout_btn = document.getElementById("logout");

function logout() {
  localStorage.clear();
  window.location.href = "./myaccount.html";
}

logout_btn.addEventListener("click", function () {
  logout();
});
