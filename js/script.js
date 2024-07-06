var menuButton = document.querySelector(".navbar__button-menu");
var menu = document.querySelector(".navbar__menu");
const menuItem = document.querySelectorAll(".navbar__menu-item");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "block") {
    setTimeout(() => {
      console.log("on setTimeout");
      menu.style.display = "none";
    }, 750);
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-out 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    });
  } else {
    menu.style.display = "block";
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-in 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 100ms both";
    });
  }
});
