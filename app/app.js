const hamburgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

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
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
