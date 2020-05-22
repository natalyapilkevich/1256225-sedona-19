var navMain = document.querySelector(".page-header-nav");
var navToggle = document.querySelector(".page-header-nav__toggle");

navMain.classList.remove("page-header-nav--nojs");
navMain.classList.remove("page-header-nav--opened");
navMain.classList.add("page-header-nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header-nav--closed")) {
    navMain.classList.remove("page-header-nav--closed");
    navMain.classList.add("page-header-nav--opened");
  } else {
    navMain.classList.add("page-header-nav--closed");
    navMain.classList.remove("page-header-nav--opened");
  }
});

var link = document.querySelector(".review__button");
var popupSuccess = document.querySelector(".popup--success");
var popupDenied = document.querySelector(".popup--denied");
var closeSuccess = document.querySelector(".popup__close--success");
var closeDenied = document.querySelector(".popup__close--denied");
var form = document.querySelector("form");

form.addEventListener("submit", function (evt) {
  if (form.checkValidity()) {
    popupSuccess.classList.add("popup__show");
    closeSuccess.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSuccess.classList.remove("popup__show");
    });
  }
  else {
    popupDenied.classList.add("popup__show");
    closeDenied.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupDenied.classList.remove("popup__show");
    });
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSuccess.classList.contains("popup__show") || popupDenied.classList.contains("popup__show")) {
      popupSuccess.classList.remove("popup__show");
      popupDenied.classList.remove("popup__show");
    }
  }
});
