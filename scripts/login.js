"use strict";

// slider
$(document).ready(function () {
  $(".login-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  });
});

// inputs float

const allInputs = document.querySelectorAll("input");
if (allInputs) {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("focusout", function () {
      if (allInputs[i].value.length > 0) {
        allInputs[i].classList.add("float");
      } else {
        allInputs[i].classList.remove("float");
      }
    });
  }
}

// add background in header on scroll

let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;

const add_class_on_scroll = function () {
  return header.classList.add("fade-in");
};
const remove_class_on_scroll = function () {
  return header.classList.remove("fade-in");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
