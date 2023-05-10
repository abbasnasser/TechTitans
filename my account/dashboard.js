var token_validation_session = sessionStorage.getItem("token");

if (token_validation_session == null) {
  window.location.href = "./myaccount.html";
}

var course = [];
var enroller_Course_eligable = [];
var course_card_color = [
  "#0000ff",
  "#00cc00",
  "#ffff00",
  "#cc0066",
  "#6600cc",
  "#00ffff",
  "#ffcc00",
  "#ffcccc",
  "#ff66cc",
];
var lessonsFull = [];
var course_now = [];
var dict = {};
var search_list_spare = [];
var search_lisr_main = [];
var color_theme = "";
var cousses_limit = [];
//================================desktop functions============================

function addCourse(
  title,
  sessionFinished,
  coursestatusInpercent,
  description,

  color
) {
  var card_column = document.getElementById("cards");

  console.log(coursestatusInpercent);

  var oncard = document.createElement("div");
  oncard.classList.add("oncard");
  oncard.style.borderColor = color;
  oncard.id = title;

  var row_card1 = document.createElement("div");
  row_card1.classList.add("row_card1");

  var level_name = document.createElement("div");
  level_name.classList.add("level_name");
  level_name.textContent = title;
  level_name.style.color = color;

  var sessions_number_box = document.createElement("div");
  sessions_number_box.classList.add("sessions_number_box");

  var sessions_finished_number = document.createElement("div");
  sessions_finished_number.style.backgroundColor = color;
  sessions_finished_number.classList.add("sessions_finished_number");
  sessions_finished_number.textContent = sessionFinished;
  //-----------------------------------
  sessions_number_box.appendChild(sessions_finished_number);
  row_card1.appendChild(level_name);
  row_card1.appendChild(sessions_number_box);

  var row_card2 = document.createElement("div");
  row_card2.classList.add("row_card2");
  var description_card = document.createElement("div");
  description_card.classList.add("description_card");
  description_card.textContent = description;
  description_card.style.color = color;
  row_card2.appendChild(description_card);

  var row_card3 = document.createElement("div");
  row_card3.classList.add("row_card3");
  var unfinished_color = document.createElement("div");
  unfinished_color.classList.add("unfinished_color");
  var finished_color = document.createElement("div");
  finished_color.classList.add("finished_color");
  finished_color.style.width = coursestatusInpercent + "%";
  finished_color.style.backgroundColor = color;

  row_card3.appendChild(unfinished_color);
  row_card3.appendChild(finished_color);

  oncard.appendChild(row_card1);
  oncard.appendChild(row_card2);
  oncard.appendChild(row_card3);

  card_column.appendChild(oncard);
  // carddss.appendChild(oncard);
}

function addlesson_designOne(title, DA, UA, DL, color) {
  var lesson_comntainer = document.getElementById("lessons_container");
  lesson_comntainer.classList.add("lessons_container");

  var lesson_one_card = document.createElement("div");
  lesson_one_card.classList.add("lesson_one_card");
  lesson_one_card.style.backgroundColor = color;

  var lessontitle = document.createElement("div");
  lessontitle.classList.add("lessontitle");
  lessontitle.textContent = title;

  var btns = document.createElement("div");
  btns.classList.add("btns");
  var linkDA = document.createElement("a");
  linkDA.id = title + "DA";
  linkDA.style.textDecoration = "none";
  linkDA.href = DA;
  var linkUA = document.createElement("a");
  linkUA.id = title + "UA";
  linkUA.style.textDecoration = "none";
  linkUA.href = UA;

  var linkDL = document.createElement("a");
  linkDL.id = title + "DL";
  linkDL.style.textDecoration = "none";
  linkDL.href = DL;

  var download_assignment = document.createElement("div");
  download_assignment.classList.add("download_assignment");
  download_assignment.textContent = "DA";
  download_assignment.style.color = color;
  var upload_assignment = document.createElement("div");
  upload_assignment.classList.add("upload_assignment");
  upload_assignment.textContent = "UA";
  upload_assignment.style.color = color;
  var download_lesson = document.createElement("div");
  download_lesson.classList.add("download_lesson");
  download_lesson.textContent = "DL";
  download_lesson.style.color = color;
  linkDA.appendChild(download_assignment);
  linkUA.appendChild(upload_assignment);
  linkDL.appendChild(download_lesson);
  btns.appendChild(linkDA);
  btns.appendChild(linkUA);
  btns.appendChild(linkDL);
  lesson_one_card.appendChild(lessontitle);
  //   lesson_one_card.appendChild(linkpoint);
  lesson_one_card.appendChild(btns);
  lesson_comntainer.appendChild(lesson_one_card);
}

function addlesson_designTwo(title, DA, UA, DL, color) {
  var lesson_comntainer = document.getElementById("lessons_container");
  lesson_comntainer.classList.add("lessons_container");

  var lesson_one_card = document.createElement("div");
  lesson_one_card.classList.add("lesson_two_card");
  lesson_one_card.style.borderColor = color;
  var lessontitle = document.createElement("div");
  lessontitle.classList.add("lessontitle_card2");
  lessontitle.textContent = title;
  lessontitle.style.color = color;

  var btns = document.createElement("div");
  btns.classList.add("btns_card2");
  var linkDA = document.createElement("a");
  linkDA.id = title + "DA";
  linkDA.style.textDecoration = "none";
  linkDA.href = DA;
  var linkUA = document.createElement("a");
  linkUA.id = title + "UA";
  linkUA.style.textDecoration = "none";
  linkUA.href = UA;

  var linkDL = document.createElement("a");
  linkDL.id = title + "DL";
  linkDL.style.textDecoration = "none";
  linkDL.href = DL;

  var download_assignment = document.createElement("div");
  download_assignment.classList.add("download_assignment_card2");
  download_assignment.textContent = "DA";
  download_assignment.style.backgroundColor = color;
  var upload_assignment = document.createElement("div");
  upload_assignment.classList.add("upload_assignment_card2");
  upload_assignment.textContent = "UA";
  upload_assignment.style.backgroundColor = color;
  var download_lesson = document.createElement("div");
  download_lesson.classList.add("download_lesson_card2");
  download_lesson.textContent = "DL";
  download_lesson.style.backgroundColor = color;
  linkDA.appendChild(download_assignment);
  linkUA.appendChild(upload_assignment);
  linkDL.appendChild(download_lesson);
  btns.appendChild(linkDA);
  btns.appendChild(linkUA);
  btns.appendChild(linkDL);
  lesson_one_card.appendChild(lessontitle);
  //   lesson_one_card.appendChild(linkpoint);
  lesson_one_card.appendChild(btns);
  lesson_comntainer.appendChild(lesson_one_card);
}

function addCourse_desktop() {
  for (i in course) {
    var percaentage = Math.floor(
      (parseInt(course[i][1]) / parseInt(course[i][4])) * 100
    );

    addCourse(
      course[i][0],
      course[i][1],
      percaentage,
      course[i][3],
      course_card_color[i]
    );

    dict[course[i][0]] = [course_card_color[i]];

    var lister = document.getElementById(course[i][0]);
    var course_name_text = document.getElementById(
      "choose_course_to_view_lessons"
    );

    var choose_course_to_view_lessons_desktop = document.getElementById(
      "choose_course_to_view_lessons_desktop"
    );
    if (course[i][0] == "Beginner Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Beginner Mobile"];

        search_lisr_main = list;
        search_list_spare = list;
        addLessons(search_list_spare);
        addLessons_mobiel(search_list_spare);
        course_name_text.textContent = "#Beginner Mobile";
        choose_course_to_view_lessons_desktop.textContent = "#Beginner Mobile";
      });
    } else if (course[i][0] == "Intermediate Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Intermediate Mobile"];
        search_lisr_main = list;
        search_list_spare = list;
        addLessons(search_list_spare);
        addLessons_mobiel(search_list_spare);
        course_name_text.textContent = "#Intermediate Mobile";
        choose_course_to_view_lessons_desktop.textContent =
          "#Intermediate Mobile";
      });
    } else if (course[i][0] == "Advanced Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Advanced Mobile"];

        search_lisr_main = list;
        search_list_spare = list;
        addLessons(search_list_spare);
        addLessons_mobiel(search_list_spare);
        course_name_text.textContent = "#Advanced Mobile";
        choose_course_to_view_lessons_desktop.textContent = "#Advanced Mobile";
      });
    }
  }
}

function addLessons(lessons) {
  var lesson_cont = document.getElementById("lessons_container");
  var enroll_box = document.getElementById("enroll_box");

  lesson_cont.classList.remove("show");

  lesson_cont.classList.add("hide");
  enroll_box.classList.remove("show");
  enroll_box.classList.add("hide");

  function hide() {
    lesson_cont.innerHTML = "";
    for (var i = 1, len = lessons.length; i < len; i++) {
      if (i % 2 == 0) {
        addlesson_designTwo(
          lessons[i][2],
          lessons[i][3],
          lessons[i][4],
          lessons[i][5],
          lessons[0]
        );
      } else {
        addlesson_designOne(
          lessons[i][2],
          lessons[i][3],
          lessons[i][4],
          lessons[i][5],
          lessons[0]
        );
      }
    }
    enroll_box.style.backgroundColor = lessons[0];
    lesson_cont.classList.remove("hide");
    lesson_cont.classList.add("show");
    enroll_box.classList.remove("hide");
    enroll_box.classList.add("add");
  }
  setTimeout(hide, 400);
}

function add_loop_lessons() {
  for (i in lessonsFull) {
    var temp = [];
    if (lessonsFull[i][1] == "Beginner Mobile") {
      var tt = dict["Beginner Mobile"];

      tt.push(lessonsFull[i]);
      dict["Beginner Mobile"] = tt;
    } else if (lessonsFull[i][1] == "Intermediate Mobile") {
      var tt = dict["Intermediate Mobile"];
      tt.push(lessonsFull[i]);
      dict["Intermediate Mobile"] = tt;
    } else if (lessonsFull[i][1] == "Advanced Mobile") {
      var tt = dict["Advanced Mobile"];
      tt.push(lessonsFull[i]);
      dict["Advanced Mobile"] = tt;
    }
  }
}

function search() {
  var search = document.getElementById("search");

  search.addEventListener("input", (event) => {
    filterList = search_lisr_main.filter((element) =>
      element[2].toLowerCase().includes(search.value.toLowerCase())
    );

    if (course_card_color.includes(filterList[0])) {
      // check and remiove inculdes the color in the filtered list
      filterList.shift();
    }

    if (search.value == "") {
      search_list_spare = search_lisr_main;
    } else {
      search_list_spare = filterList;

      search_list_spare.unshift(search_lisr_main[0]);
    }

    addLessons_mobiel(search_list_spare);
    addLessons(search_list_spare);
  });
}

//================================mobile======================
function add_course_selection_box() {
  var card_column = document.getElementById("course_selection_box");

  card_column.innerHTML = "";
  for (i in course) {
    var percaentage = Math.floor(
      (parseInt(course[i][1]) / parseInt(course[i][4])) * 100
    );
    add_courseto_one_by_one_selection_box(
      course[i][0],
      course[i][1],
      percaentage,
      course[i][3],
      course_card_color[i]
    );

    dict[course[i][0]] = [course_card_color[i]];

    var lister = document.getElementById(course[i][0] + "m");
    var course_name_text = document.getElementById(
      "choose_course_to_view_lessons"
    );

    var choose_course_to_view_lessons_desktop = document.getElementById(
      "choose_course_to_view_lessons_desktop"
    );

    if (course[i][0] == "Beginner Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Beginner Mobile"];
        search_lisr_main = list;
        search_list_spare = list;
        addLessons_mobiel(search_list_spare);
        addLessons(search_list_spare);
        course_selection_box.style.display = "none";
        course_name_text.textContent = "#Beginner Mobile";
        choose_course_to_view_lessons_desktop.textContent = "#Beginner Mobile";
      });
    } else if (course[i][0] == "Intermediate Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Intermediate Mobile"];

        search_lisr_main = list;
        search_list_spare = list;
        addLessons_mobiel(search_list_spare);
        addLessons(search_list_spare);
        course_name_text.textContent = "#Intermediate Mobile";
        choose_course_to_view_lessons_desktop.textContent =
          "#Intermediate Mobile";

        course_selection_box.style.display = "none";
      });
    } else if (course[i][0] == "Advanced Mobile") {
      lister.addEventListener("click", function () {
        var list = dict["Advanced Mobile"];

        search_lisr_main = list;
        search_list_spare = list;
        addLessons_mobiel(search_list_spare);
        addLessons(search_list_spare);
        course_name_text.textContent = "#Advanced Mobile";
        choose_course_to_view_lessons_desktop.textContent = "#Advanced Mobile";
        course_selection_box.style.display = "none";
      });
    }
  }
}
function add_courseto_one_by_one_selection_box(
  title,
  sessionFinished,
  coursestatusInpercent,
  description,

  color
) {
  var card_column = document.getElementById("course_selection_box");
  // var carddss = document.getElementById("cardss");

  var oncard = document.createElement("div");
  oncard.classList.add("oncard");
  oncard.style.borderColor = color;
  oncard.id = title + "m";

  var row_card1 = document.createElement("div");
  row_card1.classList.add("row_card1");

  var level_name = document.createElement("div");
  level_name.classList.add("level_name");
  level_name.textContent = title;
  level_name.style.color = color;

  var sessions_number_box = document.createElement("div");
  sessions_number_box.classList.add("sessions_number_box");

  var sessions_finished_number = document.createElement("div");
  sessions_finished_number.style.backgroundColor = color;
  sessions_finished_number.classList.add("sessions_finished_number");
  sessions_finished_number.textContent = sessionFinished;
  //-----------------------------------
  sessions_number_box.appendChild(sessions_finished_number);
  row_card1.appendChild(level_name);
  row_card1.appendChild(sessions_number_box);

  var row_card2 = document.createElement("div");
  row_card2.classList.add("row_card2");
  var description_card = document.createElement("div");
  description_card.classList.add("description_card");
  description_card.textContent = description;
  description_card.style.color = color;
  row_card2.appendChild(description_card);

  var row_card3 = document.createElement("div");
  row_card3.classList.add("row_card3");
  var unfinished_color = document.createElement("div");
  unfinished_color.classList.add("unfinished_color");
  var finished_color = document.createElement("div");
  finished_color.classList.add("finished_color");
  finished_color.style.width = coursestatusInpercent + "%";
  finished_color.style.backgroundColor = color;

  row_card3.appendChild(unfinished_color);
  row_card3.appendChild(finished_color);

  oncard.appendChild(row_card1);
  oncard.appendChild(row_card2);
  oncard.appendChild(row_card3);

  card_column.appendChild(oncard);
  // carddss.appendChild(oncard);
}

function addLessons_mobiel(lessons) {
  var lesson_cont = document.getElementById("lessons_card_mobile");

  lesson_cont.classList.remove("show");

  lesson_cont.classList.add("hide");
  enroll_box.classList.remove("show");
  enroll_box.classList.add("hide");

  function hide() {
    lesson_cont.innerHTML = "";
    for (var i = 1, len = lessons.length; i < len; i++) {
      if (i % 2 == 0) {
        add_lessons_lessons_card_mobile_des1(
          lessons[i][2],
          lessons[i][3],
          lessons[i][4],
          lessons[i][5],
          lessons[0]
        );
      } else {
        add_lessons_lessons_card_mobile_des1(
          lessons[i][2],
          lessons[i][3],
          lessons[i][4],
          lessons[i][5],
          lessons[0]
        );
      }
    }

    lesson_cont.classList.remove("hide");
    lesson_cont.classList.add("show");
  }
  setTimeout(hide, 400);
}
function add_lessons_lessons_card_mobile_des1(title, DA, UA, DL, color) {
  var lesson_comntainer = document.getElementById("lessons_card_mobile");
  lesson_comntainer.classList.add("lessons_container");

  var lesson_one_card = document.createElement("div");
  lesson_one_card.classList.add("lesson_one_card");
  lesson_one_card.style.backgroundColor = color;

  var lessontitle = document.createElement("div");
  lessontitle.classList.add("lessontitle");
  lessontitle.textContent = title;

  var btns = document.createElement("div");
  btns.classList.add("btns");
  var linkDA = document.createElement("a");
  linkDA.id = title + "DA";
  linkDA.style.textDecoration = "none";
  linkDA.href = DA;
  var linkUA = document.createElement("a");
  linkUA.id = title + "UA";
  linkUA.style.textDecoration = "none";
  linkUA.href = UA;

  var linkDL = document.createElement("a");
  linkDL.id = title + "DL";
  linkDL.style.textDecoration = "none";
  linkDL.href = DL;

  var download_assignment = document.createElement("div");
  download_assignment.classList.add("download_assignment");
  download_assignment.textContent = "DA";
  download_assignment.style.color = color;
  var upload_assignment = document.createElement("div");
  upload_assignment.classList.add("upload_assignment");
  upload_assignment.textContent = "UA";
  upload_assignment.style.color = color;
  var download_lesson = document.createElement("div");
  download_lesson.classList.add("download_lesson");
  download_lesson.textContent = "DL";
  download_lesson.style.color = color;
  linkDA.appendChild(download_assignment);
  linkUA.appendChild(upload_assignment);
  linkDL.appendChild(download_lesson);
  btns.appendChild(linkDA);
  btns.appendChild(linkUA);
  btns.appendChild(linkDL);
  lesson_one_card.appendChild(lessontitle);
  //   lesson_one_card.appendChild(linkpoint);
  lesson_one_card.appendChild(btns);
  lesson_comntainer.appendChild(lesson_one_card);
}
function add_lessons_lessons_card_mobile_des2(title, DA, UA, DL, color) {
  var lesson_comntainer = document.getElementById("lessons_card_mobile");
  lesson_comntainer.classList.add("lessons_container");

  var lesson_one_card = document.createElement("div");
  lesson_one_card.classList.add("lesson_two_card");
  lesson_one_card.style.borderColor = color;
  var lessontitle = document.createElement("div");
  lessontitle.classList.add("lessontitle_card2");
  lessontitle.textContent = title;
  lessontitle.style.color = color;

  var btns = document.createElement("div");
  btns.classList.add("btns_card2");
  var linkDA = document.createElement("a");
  linkDA.id = title + "DA";
  linkDA.style.textDecoration = "none";
  linkDA.href = DA;
  var linkUA = document.createElement("a");
  linkUA.id = title + "UA";
  linkUA.style.textDecoration = "none";
  linkUA.href = UA;

  var linkDL = document.createElement("a");
  linkDL.id = title + "DL";
  linkDL.style.textDecoration = "none";
  linkDL.href = DL;

  var download_assignment = document.createElement("div");
  download_assignment.classList.add("download_assignment_card2");
  download_assignment.textContent = "DA";
  download_assignment.style.backgroundColor = color;
  var upload_assignment = document.createElement("div");
  upload_assignment.classList.add("upload_assignment_card2");
  upload_assignment.textContent = "UA";
  upload_assignment.style.backgroundColor = color;
  var download_lesson = document.createElement("div");
  download_lesson.classList.add("download_lesson_card2");
  download_lesson.textContent = "DL";
  download_lesson.style.backgroundColor = color;
  linkDA.appendChild(download_assignment);
  linkUA.appendChild(upload_assignment);
  linkDL.appendChild(download_lesson);
  btns.appendChild(linkDA);
  btns.appendChild(linkUA);
  btns.appendChild(linkDL);
  lesson_one_card.appendChild(lessontitle);
  //   lesson_one_card.appendChild(linkpoint);
  lesson_one_card.appendChild(btns);
  lesson_comntainer.appendChild(lesson_one_card);
}

function getAll() {
  https: var token = sessionStorage.getItem("token");
  var course_list = [];
  var material = [];

  var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=getCourseOnesss&token=" +
      token,
    true
  );

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      for (var i = 0, len = data[1].length; i < len; i++) {
        var temp_list = [];
        temp_list.push(data[1][i][1]);
        temp_list.push(data[1][i][2]);
        temp_list.push(data[1][i][3]);
        temp_list.push(data[1][i][4]);
        temp_list.push(data[1][i][5]);
        course_list.push(temp_list);
        cousses_limit.push(data[1][i][1]);
      }
      for (el in data[2]) {
        for (el2 in data[2][el]) {
          material.push(data[2][el][el2]);
        }
      }

      course = course_list;

      addCourse_desktop();

      lessonsFull = material;

      add_loop_lessons();

      enroll();
      enroll_d();
    }
  };

  request.send();
}

function enroll() {
  https: var token = sessionStorage.getItem("token");
  var description = "asdasdasdad";
  var new_array_cousre_enroller = [
    "Beginner Mobile",
    "Intermediate Mobile",
    "Advanced Mobile",
    "Beginner Web",
    "Intermediate Web",
    "Advanced Web",
    "Beginner Desktop",
    "Intermediate Desktop",
    "Advanced Desktop",
  ];

  for (elementIndex in new_array_cousre_enroller) {
    if (cousses_limit.includes(new_array_cousre_enroller[elementIndex])) {
    } else {
      enroller_Course_eligable.push(new_array_cousre_enroller[elementIndex]);
    }
  }

  for (el in enroller_Course_eligable) {
    if (enroller_Course_eligable[el] == "Beginner Mobile") {
      add_enroll_btn("Beginner Mobile", token, description);
      var listenTo = document.getElementById("Beginner Mobile");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Mobile");
        enrollInCourseFunc(token, "Beginner Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Mobile") {
      add_enroll_btn("Intermediate Mobile", token, description);
      var listenTo = document.getElementById("Intermediate Mobile");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Mobile");
        enrollInCourseFunc(token, "Intermediate Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Mobile") {
      add_enroll_btn("Advanced Mobile", token, description);
      var listenTo = document.getElementById("Advanced Mobile");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Mobile");
        enrollInCourseFunc(token, "Advanced Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Beginner Web") {
      add_enroll_btn("Beginner Web", token, description);
      var listenTo = document.getElementById("Beginner Web");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Web");
        enrollInCourseFunc(token, "Beginner Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Web") {
      add_enroll_btn("Intermediate Web", token, description);
      var listenTo = document.getElementById("Intermediate Web");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Web");
        enrollInCourseFunc(token, "Intermediate Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Web") {
      add_enroll_btn("Advanced Web", token, description);
      var listenTo = document.getElementById("Advanced Web");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Web");
        enrollInCourseFunc(token, "Advanced Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Beginner Desktop") {
      add_enroll_btn("Beginner Desktop", token, description);
      var listenTo = document.getElementById("Beginner Desktop");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Desktop");
        enrollInCourseFunc(token, "Beginner Desktop", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Desktop") {
      add_enroll_btn("Intermediate Desktop", token, description);
      var listenTo = document.getElementById("Intermediate Desktop");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Desktop");
        enrollInCourseFunc(token, "Intermediate Desktop", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Desktop") {
      add_enroll_btn("Advanced Desktop", token, description);
      var listenTo = document.getElementById("Advanced Desktop");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Desktop");
        enrollInCourseFunc(token, "Advanced Desktop", "describe");
      });
    }
  }
}

function enroll_d() {
  https: var token = sessionStorage.getItem("token");
  var description = "asdasdasdad";
  var new_array_cousre_enroller = [
    "Beginner Mobile",
    "Intermediate Mobile",
    "Advanced Mobile",
    "Beginner Web",
    "Intermediate Web",
    "Advanced Web",
    "Beginner Desktop",
    "Intermediate Desktop",
    "Advanced Desktop",
  ];

  for (el in enroller_Course_eligable) {
    if (enroller_Course_eligable[el] == "Beginner Mobile") {
      add_enroll_btn_d("Beginner Mobile_m", "Beginner Mobile");
      var listenTo = document.getElementById("Beginner Mobile_m");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Mobile_m");
        enrollInCourseFunc(token, "Beginner Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Mobile") {
      add_enroll_btn_d("Intermediate Mobile_m", "Intermediate Mobile");
      var listenTo = document.getElementById("Intermediate Mobile_m");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Mobile");
        enrollInCourseFunc(token, "Intermediate Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Mobile") {
      add_enroll_btn_d("Advanced Mobile_m", "Advanced Mobile");
      var listenTo = document.getElementById("Advanced Mobile_m");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Mobile");
        enrollInCourseFunc(token, "Advanced Mobile", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Beginner Web") {
      add_enroll_btn_d("Beginner Web_m", "Beginner Web");
      var listenTo = document.getElementById("Beginner Web_m");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Web");
        enrollInCourseFunc(token, "Beginner Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Web") {
      add_enroll_btn_d("Intermediate Web_m", "Intermediate Web");
      var listenTo = document.getElementById("Intermediate Web_m");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Web");
        enrollInCourseFunc(token, "Intermediate Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Web") {
      add_enroll_btn_d("Advanced Web_m", "Advanced Web");
      var listenTo = document.getElementById("Advanced Web_m");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Web");
        enrollInCourseFunc(token, "Advanced Web", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Beginner Desktop") {
      add_enroll_btn_d("Beginner Desktop_m", "Beginner Desktop");
      var listenTo = document.getElementById("Beginner Desktop_m");
      listenTo.addEventListener("click", function () {
        console.log("Beginner Desktop");
        enrollInCourseFunc(token, "Beginner Desktop", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Intermediate Desktop") {
      add_enroll_btn_d("Intermediate Desktop_m", "Intermediate Desktop");
      var listenTo = document.getElementById("Intermediate Desktop_m");
      listenTo.addEventListener("click", function () {
        console.log("Intermediate Desktop");
        enrollInCourseFunc(token, "Intermediate Desktop", "describe");
      });
    } else if (enroller_Course_eligable[el] == "Advanced Desktop") {
      add_enroll_btn_d("Advanced Desktop_m", "Advanced Desktop");
      var listenTo = document.getElementById("Advanced Desktop_m");
      listenTo.addEventListener("click", function () {
        console.log("Advanced Desktop");
        enrollInCourseFunc(token, "Advanced Desktop", "describe");
      });
    }
  }
}

function enrollInCourseFunc(token, courseName, describe) {
  var request = new XMLHttpRequest();
  https: request.open(
    "GET",
    "https://script.google.com/macros/s/AKfycbzeh1gURixUuHLB8o1KrfAP_IR6aoP9F5u4YAnJSgumF3UfF8qshTCvDBIhwu7fxxvZ/exec?function=enroll&token=" +
      token +
      "&enrolledCourse=" +
      courseName +
      "&description=" +
      describe,
    true
  );

  https: request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      location.reload();
    }
  };

  request.send();
}

//----------------------main--------------------------

function main() {
  getAll();
  search();

  var body = document.getElementById("b");
  var course_selecter_item = document.getElementById("course_selecter_item");
  var Advanced_Web = document.getElementById("Advanced Web");
  var Beginner_Web = document.getElementById("Beginner Web");
  var course_selection_box = document.getElementById("course_selection_box");
  var enrollment_box = document.getElementById("enrollment_box");
  var user_menu_mobile = document.getElementById("user_menu_mobile");

  var logout = document.getElementById("logout");
  var enroll_box = document.getElementById("enroll_box");
  var add_Course = document.getElementById("add_Course");

  window.addEventListener("click", function (e) {
    if (document.getElementById("account_btn").contains(e.target)) {
      user_menu_mobile.style.display = "flex";
      // Clicked in box
    } else {
      user_menu_mobile.style.display = "none";
    }
  });

  window.addEventListener("click", function (e) {
    if (document.getElementById("choose_btn").contains(e.target)) {
      course_selecter_item.style.display = "block";
      course_selection_box.style.display = "flex";
      enrollment_box.style.display = "none";
      add_course_selection_box();
      add_loop_lessons();
    } else if (document.getElementById("add_enroll").contains(e.target)) {
      course_selecter_item.style.display = "block";
      enrollment_box.style.display = "flex";
      course_selection_box.style.display = "none";
    } else if (document.getElementById("enroll_box").contains(e.target)) {
      add_Course.style.display = "block";
    } else {
      course_selecter_item.style.display = "none";
      course_selection_box.style.display = "none";
      enrollment_box.style.display = "none";
      add_Course.style.display = "none";
      add_course_selection_box();
      add_loop_lessons();
    }
  });

  logout.addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    sessionStorage.removeItem("token");
    window.location.href = "../index.html";
  });
}

main();

function add_enroll_btn(text, token, description) {
  var enrollment_box = document.getElementById("enrollment_box");

  var enrollment_box_d = document.getElementById("add_Course");

  var btn = document.createElement("div");
  btn.classList.add("course_enroller");
  btn.textContent = text;
  var id = "";

  if (text == "Beginner Mobile") {
    id = "Beginner Mobile";
  } else if (text == "Intermediate Mobile") {
    id = "Intermediate Mobile";
  } else if (text == "Advanced Mobile") {
    id = "Advanced Mobile";
  } else if (text == "Beginner Web") {
    id = "Beginner Web";
  } else if (text == "Intermediate Web") {
    id = "Intermediate Web";
  } else if (text == "Advanced Web") {
    id = "Advanced Web";
  } else if (text == "Beginner Desktop") {
    id = "Beginner Desktop";
  } else if (text == "Intermediate Desktop") {
    id = "Intermediate Desktop";
  } else if (text == "Advanced Desktop") {
    id = "Advanced Desktop";
  }

  btn.id = id;
  enrollment_box.appendChild(btn);
  // enrollment_box_d.appendChild(btn);
}

function add_enroll_btn_d(text, name) {
  var enrollment_box_d = document.getElementById("add_Course");

  var btn = document.createElement("div");
  btn.classList.add("course_enroller");
  btn.textContent = name;
  var id = "";

  if (text == "Beginner Mobile_m") {
    id = "Beginner Mobile_m";
  } else if (text == "Intermediate Mobile_m") {
    id = "Intermediate Mobile_m";
  } else if (text == "Advanced Mobile_m") {
    id = "Advanced Mobile_m";
  } else if (text == "Beginner Web_m") {
    id = "Beginner Web_m";
  } else if (text == "Intermediate Web_m") {
    id = "Intermediate Web_m";
  } else if (text == "Advanced Web_m") {
    id = "Advanced Web_m";
  } else if (text == "Beginner Desktop_m") {
    id = "Beginner Desktop_m";
  } else if (text == "Intermediate Desktop_m") {
    id = "Intermediate Desktop_m";
  } else if (text == "Advanced Desktop_m") {
    id = "Advanced Desktop_m";
  }

  btn.id = id;
  enrollment_box_d.appendChild(btn);
}
