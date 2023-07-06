const ASSETS = [
  "/app/index.html",
  "/app/styles/login.css",
  "/app/index.js",
  "/phps/login.php",
  "/app/swapp.js",
];
let cache_name = "SimiCart"; // The string used to identify our cache

self.addEventListener("install", (event) => {
  console.log("installing...");
  event.waitUntil(
    caches
      .open(cache_name)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
      .catch((err) => console.log(err))
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        // const notification = new Notification("hello abbas");
        // self.Notification("asdasdas");
        return response;
      }
      return fetch(event.request);
    })
  );
});

setInterval(myTimer, 5000);

function myTimer() {
  fetch(
    "https://script.google.com/macros/s/AKfycbxZujwt027gKTndU9UEBQ1-dUEHL9HaJhSLW1vJVEq87cdkdC-qO0YGaR_NX2OskHyf/exec",
    {
      method: "GET",
    }
  )
    .then(function (response) {
      return response
        .json()
        .then((data) => {
          console.log(data);

          return data;
        })
        .catch((err) => {
          console.log(err);
        });
      // success
    })
    .catch(function (err) {
      // something went wrong
    });
}
