// over service box slider
let serviceCover = document.querySelector('.service-cover-sl');
let serviceBox = document.querySelectorAll('.service-box');
let index = 0;

let boxWidth = serviceBox[0].offsetWidth - 40; // 30 is the gap in px
console.log(boxWidth);

function rightbtn(){
    index++        
    if(index >= serviceBox.length){
        index = 0;
    }
    updateServiceBox()
}

function leftbtn(){
    index--
    if(index < 0){
        index = serviceBox.length - 1;
    }   
    updateServiceBox()
}

function updateServiceBox(){
    serviceCover.style.transform = `translateX(${-index * boxWidth}px)`;
}