// Student ID: 22001414

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "flex";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector("#popup-cta").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
