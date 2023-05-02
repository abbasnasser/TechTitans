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

var d_nav = document.getElementById("desktop_nav");
var m_nav = document.getElementById("mobile_nav");
var w_nav = document.getElementById("web_nav");
var course_image = document.getElementById("image_Course");
var Course_description = document.getElementById("Course_description");

course_image.src = "./assets/desktop.png";
Course_description.textContent =
  "build desktop application for linux mac and windows using futter technology...";

d_nav.classList.add("highlight_item");

d_nav.addEventListener("click", function () {
  d_nav.classList.add("highlight_item");
  m_nav.classList.remove("highlight_item");
  w_nav.classList.remove("highlight_item");
  course_image.src = "./assets/desktop.png";
  Course_description.textContent =
    " build desktop application for linux mac and windows using futter technology...";

  // course_image.style.paddingTop=''
});
m_nav.addEventListener("click", function () {
  m_nav.classList.add("highlight_item");
  d_nav.classList.remove("highlight_item");
  w_nav.classList.remove("highlight_item");
  course_image.src = "./assets/mobile.png";
  Course_description.textContent =
    "build mobile application for android and ios using futter technology...";
});
w_nav.addEventListener("click", function () {
  w_nav.classList.add("highlight_item");
  m_nav.classList.remove("highlight_item");
  d_nav.classList.remove("highlight_item");
  course_image.src = "./assets/web.png";
  Course_description.textContent =
    " build websites and web application responsive for all devices with html css js...";
});
