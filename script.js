"use strict";

// HomeWork-11

const mySlider = new Splide("#mySlider",{
    perPage: 2,
    gap: "30px",
    pagination: false,
    breakpoints: {
        1024: {
            perPage: 1
        },
        768: {
            arrows: false,
            pagination: true
        }
    }
})

mySlider.mount()