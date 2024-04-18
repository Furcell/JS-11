"use strict";

// HomeWork-11

const mySlider = new Splide("#mySlider",{
    perPage: 3,
    gap: "30px",
    breakpoints: {
        1024: {
            perPage: 1
        },
        768: {
            arrows: false,
        }
    }
})

mySlider.mount()