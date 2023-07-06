var menu_btn = document.getElementById("menu");
var menu_items = document.getElementById("menu_items");
var intro_section = document.getElementById("intro_section");
var contmax = document.getElementById("contmax");
var login = document.getElementById("login");
var products_section = document.getElementById("products_section");
var getstartedsection = document.getElementById("getstartedsection");

//----------------------------------------------------
intro_section.addEventListener("click", function () {
  menu_items.style.display = "none";
});

products_section.addEventListener("click", function () {
  menu_items.style.display = "none";
});

getstartedsection.addEventListener("click", function () {
  menu_items.style.display = "none";
});
//----------------------------------------------------
contmax.addEventListener("click", function () {
  menu_items.style.display = "none";
});
menu_btn.addEventListener("click", function () {
  menu_items.style.display = "block";
});

function myFunction(x) {
  if (!x.matches) {
    menu_items.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 720px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

function sub() {
  location.href = "https://wa.me/96171589944";
}

// This variable will save the event for later use.

let installPrompt = null;
var installButton = document.getElementById("install");

installButton.addEventListener("click", async () => {
  console.log("hello");

  if (!installPrompt) {
    console.log("sd");
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

// var tt = document.getElementById("cl");
// tt.addEventListener("click", function () {
//   Notification.requestPermission().then((perm) => {
//     if (perm === "granted") {
//       new Notification("test");
//     }
//   });
// });
