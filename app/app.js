const hamburgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

// hamburgerBtn.addEventListener("click", function () {
//   if (hamburgerBtn.classList.contains("open")) {
//     hamburgerBtn.classList.remove("open");
//     overlay.style.opacity = 0;
//   } else {
//     hamburgerBtn.classList.add("open");
//     overlay.style.opacity = 1;
//   }
// });

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
  //   if (overlay.style.visi == 0) {
  //     overlay.style.opacity = 1;
  //   } else {
  //     overlay.style.opacity = 0;
  //   }
  if (overlay.classList.contains("fade-in")) {
    body.classList.remove("noscroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
