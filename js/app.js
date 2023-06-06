var windowHeight = window.innerHeight;
var headerHeight = document.querySelector('.header').clientHeight;
var mainSection = document.querySelector('.main_section');

mainSection.style.minHeight = (windowHeight - headerHeight)  + "px";

// const webcamElement = document.getElementById('webcam');
// const canvasElement = document.getElementById('canvas');
// const webcam = new Webcam(webcamElement, 'user', canvasElement);

// webcam.start()
//    .then(result =>{
//       console.log("webcam started");
//    })
//    .catch(err => {
//        console.log(err);
//    });