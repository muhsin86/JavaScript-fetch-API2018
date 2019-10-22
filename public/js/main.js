"use strict";

function getCourses() {
  fetch("http://studenter.miun.se/~momo1600/writeable/DT173G/PHP-restful-web-services/", {
    method: "GET"
  }).then(function (e) {
    return e.json();
  }).then(function (e) {
    e.forEach(function (e) {
      document.querySelector("tbody").innerHTML += "\n                    <td>".concat(e.course_code, "</td>\n                    <td>").concat(e.course_name, "</td>\n                    <td>").concat(e.course_progression, "</td>\n                    <td><a href=\"").concat(e.course_link, "\" target=\"_blank\">L\xE4nk</a></td>\n                    ");
    });
  }).then(function (e) {
    return console.log(e);
  })["catch"](function (e) {
    return console.log("Error message:", e.statusText);
  });
}

function addCourse(e) {
  e.preventDefault();
  var t = {
    course_code: document.getElementById("code").value,
    course_name: document.getElementById("name").value,
    course_progression: document.getElementById("progression").value,
    course_link: document.getElementById("link").value
  };
  fetch("http://studenter.miun.se/~momo1600/writeable/DT173G/PHP-restful-web-services/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  }).then(function (e) {
    return e.ok ? e.json() : Promise.reject({
      status: e.status,
      statusText: e.statusText
    });
  }).then(function (e) {
    return console.log(e);
  })["catch"](function (e) {
    return console.log("Error message:", e.statusText);
  });
}

document.getElementById("courseform").addEventListener("submit", addCourse), window.addEventListener("load", getCourses);