// over service box slider
let serviceCover = document.querySelector('.service-cover-sl');
let serviceBox = document.querySelectorAll('.service-box');
let index = 0;

let boxWidth = serviceBox[0].offsetWidth - 40; // 30 is the gap in px
console.log(boxWidth);

function rightbtn() {
    index++
    if (index >= serviceBox.length) {
        index = 0;
    }
    updateServiceBox()
}

function leftbtn() {
    index--
    if (index < 0) {
        index = serviceBox.length - 1;
    }
    updateServiceBox()
}

setInterval(()=>{
    rightbtn();
},1500);

function updateServiceBox() {
    serviceCover.style.transform = `translateX(${-index * boxWidth}px)`;
}

// swiper silder
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});