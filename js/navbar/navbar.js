var menuButton = document.querySelector(".navbar__button-menu");
var menuMobile = document.querySelector(".navbar__menu-mobile");
var menuMobileRect = document.querySelectorAll(
  ".button-menu__svg-rect--closing"
);
var menuDesktop = document.querySelector(".navbar__menu-desktop");
var navWidth = document.querySelector("#navbar-width");
const menuItem = document.querySelectorAll(".menu-mobile__item");
const buttonMenuSvgClosing = document.querySelector(
  "#button-menu__svg--closing"
);
const buttonMenuSvgRectClosing = document.querySelectorAll(
  ".button-menu__svg-rect--closing"
);
const buttonMenuSvgOpen = document.querySelector("#button-menu__svg--open");

menuButton.addEventListener("click", function () {
  if (menuMobile.style.display === "block") {
    setTimeout(() => {
      menuMobile.style.display = "none";
    }, 750);
    menuMobile.style.animation = "menu-background-hide 0.8s linear";
    menuMobile.style.width = "0%";
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-out 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    });
    buttonMenuSvgOpen.style.animation =
      "button-menu-open-hide 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    setTimeout(() => {
      buttonMenuSvgOpen.style.display = "none";
    }, 350);
    setTimeout(() => {
      buttonMenuSvgRectClosing.forEach((item) => {
        buttonMenuSvgClosing.style.display = "block";
        item.style.animation = "button-menu-closed-reveal 0.4s linear";
      });
    }, 400);
  } else {
    menuMobile.style.display = "block";
    menuMobile.style.animation = "menu-background-reveal 0.6s linear";
    menuMobile.style.backgroundColor = "#fff";
    menuMobile.style.width = "190px";
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.3s both";
    });
    buttonMenuSvgRectClosing.forEach((item) => {
      item.style.animation = "button-menu-closed-hide 0.4s linear";
      setTimeout(() => {
        buttonMenuSvgClosing.style.display = "none";
      }, 350);
    });
    setTimeout(() => {
      buttonMenuSvgOpen.style.animation =
        "button-menu-open-reveal 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
      buttonMenuSvgOpen.style.display = "block";
    }, 400);
  }
});

function fixMenuMobileDisplay() {
  navWidth = window.innerWidth;
  console.log(typeof navWidth + "\n" + navWidth);
  if (navWidth > 904) {
    menuMobile.style.display = "none";
    buttonMenuSvgClosing.style.display = "block";
    buttonMenuSvgOpen.style.display = "none";
    menuMobileRect.forEach((item) => {
      item.style.animation = "none";
    });
  }
}

window.addEventListener("resize", fixMenuMobileDisplay);
