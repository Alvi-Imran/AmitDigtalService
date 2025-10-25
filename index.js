// over service box slider
let serviceCover = document.querySelector('.service-cover-sl');
let serviceBox = document.querySelectorAll('.service-box');
let index = 0;

let boxWidth = serviceBox[0].offsetWidth - 40; // 30 is the gap in px

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

setInterval(() => {
    rightbtn();
}, 1500);

function updateServiceBox() {
    serviceCover.style.transform = `translateX(${-index * boxWidth}px)`;
}

// swiper libaery for silder
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // When screen width is >= 320px (Mobile)
        0: {
            slidesPerView: 1,
        },
        // When screen width is >= 640px (Tablet)
        640: {
            slidesPerView: 2,
        },
        // When screen width is >= 1024px (Laptop/Desktop)
        1024: {
            slidesPerView: 3,
        },
        // When screen width is >= 1440px (Large screen)
        1440: {
            slidesPerView: 4,
        }
    }
});



// nav toggle animation
let navToggle = document.querySelector('.menu-toggle');
let navLi = document.querySelectorAll('.nav-links ul li');

navToggle.addEventListener('click', () => {
    console.log("clicked")
    let navshow = document.querySelector('.nav-links');
    if (navshow.style.display === "none" || navshow.style.display === "") {
        navshow.style.display = "flex";
        navAnimation();
    } else {
        navshow.style.display = "none";
        navLi.forEach((li, idx) => {
            li.style.transform = `translateX(-100%)`;
            li.style.transition = `all 0.5s ease`;
        });
    }
});

function navAnimation() {
    navLi.forEach((li, idx) => {
        setTimeout(() => {
            li.style.transform = `translateX(0px)`;
            li.style.transition = `all 0.5s ease`;
        }, idx * 200);
    });
}
// navAnimation();
