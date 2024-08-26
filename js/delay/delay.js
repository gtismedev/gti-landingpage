document.addEventListener("DOMContentLoaded", function () {
  //Hero
  setTimeout(function () {
    const heroElement = document.getElementById("menu__hero");
    const aboutUsElement = document.getElementById("about-us");

    heroElement.style.opacity = 1;
    heroElement.style.transition = "opacity 2s ease";

    aboutUsElement.style.opacity = 1;
    aboutUsElement.style.transition = "opacity 2s ease";
  }, 500);
});
