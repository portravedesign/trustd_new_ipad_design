

window.addEventListener("DOMContentLoaded", function(){
    // var windowHeight = window.innerHeight;
    // var headerHeight = document.querySelector('.header').clientHeight;
    // var mainSection = document.querySelector('.main_section');
    // mainSection.style.minHeight = (windowHeight - headerHeight)  + "px";

    var width = (window.innerWidth)
    var vidContainer = document.querySelector(".video_container");
    var overlayImage = document.querySelector(".overlay_image");
    var overlayRest = document.querySelector(".overlay_rest");
       var vidContainerHeight = vidContainer.clientHeight;
       var overlayImageHeight = overlayImage.clientHeight;
       if(width<991){
        overlayRest.style.height = (vidContainerHeight - overlayImageHeight) + "px";
       }
       




})



