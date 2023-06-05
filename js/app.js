var windowHeight = window.innerHeight;
var headerHeight = document.querySelector('.header').clientHeight;
var mainSection = document.querySelector('.main_section');

mainSection.style.minHeight = (windowHeight - headerHeight)  + "px";

