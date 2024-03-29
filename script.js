$(document).ready(function() {
  if (localStorage.getItem("mode") == "dark") {
    $("body").addClass("dark");
    let root = document.documentElement;
root.style.setProperty('--cl', "#484c58");
  } else if (localStorage.getItem("mode") == "light") {
    $("body").removeClass("dark");
  }
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (localStorage.getItem("mode") == "light") {
    $("body").removeClass("dark");
  } else if (mq.matches) {
    $("body").addClass("dark");
  }
});

$("#zToggleMode").on("click", function() {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    localStorage.setItem("mode", "light");
  } else {
    $("body").addClass("dark");
    localStorage.setItem("mode", "dark");
  }
});