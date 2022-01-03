// window.alert("Hello")    //Test

/* ======================================================================================================================= */
// start slider Swiper 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false
    // },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
        spaceBetween: 30,
        centeredSlides: true,
    
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
});

// end slider Swiper
/* ======================================================================================================================= */
