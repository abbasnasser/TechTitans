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
var couse_learnmore = document.getElementById("learn_more_link");

course_image.src = "./assets/desktop.png";
Course_description.textContent =
  "build desktop application for linux mac and windows using futter technology...";
couse_learnmore.href = "./desktop/desktop.html";

d_nav.classList.add("highlight_item");

d_nav.addEventListener("click", function () {
  d_nav.classList.add("highlight_item");
  m_nav.classList.remove("highlight_item");
  w_nav.classList.remove("highlight_item");
  course_image.src = "./assets/desktop.png";
  Course_description.textContent =
    " build desktop application for linux mac and windows using futter technology...";
  couse_learnmore.href = "./desktop/desktop.html";

  // course_image.style.paddingTop=''
});
m_nav.addEventListener("click", function () {
  m_nav.classList.add("highlight_item");
  d_nav.classList.remove("highlight_item");
  w_nav.classList.remove("highlight_item");
  course_image.src = "./assets/mobile.png";
  Course_description.textContent =
    "build mobile application for android and ios using futter technology...";
  couse_learnmore.href = "./mobile/mobile.html";
});
w_nav.addEventListener("click", function () {
  w_nav.classList.add("highlight_item");
  m_nav.classList.remove("highlight_item");
  d_nav.classList.remove("highlight_item");
  course_image.src = "./assets/web.png";
  Course_description.textContent =
    " build websites and web application responsive for all devices with html css js...";
  couse_learnmore.href = "./web/web.html";
});

var choose_course_Q = document.getElementById("choose_course_Q");
var choose_course_Q_dialog = document.getElementById(
  "faq_dilaog_choose_course_Q"
);
// -----------------------------------------------
var back_front_Q = document.getElementById("back_front_Q");
var back_front_Q_dialog = document.getElementById("faq_dilaog_back_end_front");
// ---------------------------------------------------------
var type_of_dev_Q = document.getElementById("type_of_dev_Q");
var type_of_dev_Q_dialog = document.getElementById("faq_dilaog_type_of_dev_Q");
// ---------------------------------------------------------
var flutter_Q = document.getElementById("flutter_Q");
var faq_dilaog_flutter_Q = document.getElementById("faq_dilaog_flutter_Q");

//if mobile detecetd
if (/Android|iPhone/i.test(navigator.userAgent)) {
  choose_course_Q.addEventListener("click", function () {
    choose_course_Q_dialog.style.display = "block";

    back_front_Q_dialog.style.display = "none";
    type_of_dev_Q_dialog.style.display = "none";
    faq_dilaog_flutter_Q.style.display = "none";
  });

  // ---------------------------------------------------------

  back_front_Q.addEventListener("click", function () {
    back_front_Q_dialog.style.display = "block";
    choose_course_Q_dialog.style.display = "none";
    type_of_dev_Q_dialog.style.display = "none";
    faq_dilaog_flutter_Q.style.display = "none";
  });

  // ---------------------------------------------------------

  type_of_dev_Q.addEventListener("click", function () {
    type_of_dev_Q_dialog.style.display = "block";
    choose_course_Q_dialog.style.display = "none";
    back_front_Q_dialog.style.display = "none";
    faq_dilaog_flutter_Q.style.display = "none";
  });

  // ---------------------------------------------------------

  flutter_Q.addEventListener("click", function () {
    faq_dilaog_flutter_Q.style.display = "block";
    choose_course_Q_dialog.style.display = "none";
    back_front_Q_dialog.style.display = "none";
    type_of_dev_Q_dialog.style.display = "none";
  });

  //if desktop browser detected
} else {
  choose_course_Q.addEventListener("mouseenter", function () {
    choose_course_Q_dialog.style.display = "block";
  });

  // ---------------------------------------------------------

  back_front_Q.addEventListener("mouseenter", function () {
    back_front_Q_dialog.style.display = "block";
  });

  // ---------------------------------------------------------

  type_of_dev_Q.addEventListener("mouseenter", function () {
    type_of_dev_Q_dialog.style.display = "block";
  });

  // ---------------------------------------------------------

  flutter_Q.addEventListener("mouseenter", function () {
    faq_dilaog_flutter_Q.style.display = "block";
  });
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var body = document.getElementById("b");
  body.addEventListener("mouseover", function () {
    choose_course_Q_dialog.style.display = "none";
    back_front_Q_dialog.style.display = "none";
    type_of_dev_Q_dialog.style.display = "none";
    faq_dilaog_flutter_Q.style.display = "none";
  });
}
