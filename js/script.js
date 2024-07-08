var menuButton = document.querySelector(".navbar__button-menu");
var menu = document.querySelector(".navbar__menu");
const menuItem = document.querySelectorAll(".navbar__menu-item");
const buttonMenuSvgClosing = document.querySelector("#navbar__button-menu-svg--closing")
const buttonMenuSvgRectClosing = document.querySelectorAll(".navbar__button-menu-svg-rect--closing")
const buttonMenuSvgOpen = document.querySelector("#navbar__button-menu-svg--open")

//Função responsavel por abrir e fechar o menu-burguer
menuButton.addEventListener("click", function () {
  if (menu.style.display === "block") {
    setTimeout(() => {
      menu.style.display = "none";
    }, 750);
    //Mostra os itens do menu
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-out 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    });
    //Altera a imagem no botao para esconder o "X"
    buttonMenuSvgOpen.style.animation = "button-menu-open-hide 0.4s linear"
    setTimeout(() => {
      buttonMenuSvgOpen.style.display = "none"
    },350)
    //Altera a imagem no botao para revelar as barras
    setTimeout(() => {
      buttonMenuSvgRectClosing.forEach((item) => {
        buttonMenuSvgClosing.style.display = "block"
        item.style.animation =
          "button-menu-closed-reveal 0.4s linear";
      });
    }, 400)
  } else {
    menu.style.display = "block";
    //Recolhe os itens do menu
    menuItem.forEach((item) => {
      item.style.animation =
        "menu-item-tracking-in 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 100ms both";
    });
    //Altera a imagem no botao para esconder as barras
    buttonMenuSvgRectClosing.forEach((item) => {
      item.style.animation =
        "button-menu-closed-hide 0.4s linear";
        setTimeout(() => {
          buttonMenuSvgClosing.style.display = "none"
        },350)
    });
    //Altera a imagem no botao para revelar o "X"
    setTimeout(() => {
      buttonMenuSvgOpen.style.animation = "button-menu-open-reveal 0.4s linear"
      buttonMenuSvgOpen.style.display = "block"
    },400)
  }
});
