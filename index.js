function myFunction() {
  var x = document.getElementById("menus");
  var b = document.getElementById("cor1");

  if (x.style.display === "block") {
    x.style.animation = "animatemenuout 0.5s";
    setTimeout(hide, 400);
    function hide() {
      x.style.display = "none";
    }
  } else {
    x.style.animation = "animatemenuin 0.5s";
    b.classList.add("add_blur_effect_menu");
    x.style.display = "block";
  }
}

var x = document.getElementById("mnu");
var x2 = document.getElementById("menus");
x.addEventListener("click", myFunction);

window.addEventListener("mouseup", function (event) {
  if (event.target != x2) {
    var b = document.getElementById("cor1");

    b.classList.remove("add_blur_effect_menu");

    x2.style.display = "none";
  }
});
