const sliderWrap = document.querySelector(".slider-wrap");
const sliderImg = document.querySelector(".slider-img");
const slider = document.querySelectorAll(".slider");

let currentIndex = 0;                // currest first image
let sliderCount = slider.length;     // number of pictures

setInterval(function(){
    let nextIndex = (currentIndex + 1) % sliderCount;

    // slider[currentIndex].style.display = "none"; // test code
    // slider[nextIndex].style.display = "block";

    slider[currentIndex].style.opacity = "0";
    slider[nextIndex].style.opacity = "1";

    currentIndex = nextIndex;
}, 2000);
