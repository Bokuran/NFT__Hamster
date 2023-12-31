var swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: false,/* Бесконечная прокрутка слайдера */
    slidesPerView: 1,/* Какое кол-во показывать слайдеров на экране */
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
});
var swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,/* Бесконечная прокрутка слайдера */
    slidesPerView: 1,/* Какое кол-во показывать слайдеров на экране */
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
});
var swiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: false,/* Бесконечная прокрутка слайдера */
    slidesPerView: 1,/* Какое кол-во показывать слайдеров на экране */
    navigation: {
        nextEl: '.swiper3.swiper-button-next',
        prevEl: '.swiper3.swiper-button-prev',
    },
});