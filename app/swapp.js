self.addEventListener("periodicsync", function (event) {
  if (event.tag == "myFirstSync") {
    event.waitUntil(doSomeStuff());
  }
});
function doSomeStuff() {
  self.registration.showNotification("done");
}
