document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.header-toggle-btn');
    const closeBtn = document.querySelector('.close-menu-button');
    const nav = document.querySelector('.header-nav');

    if (toggleBtn && closeBtn && nav) {
        toggleBtn.addEventListener('click', function () {
            nav.classList.add('active');
        });

        closeBtn.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    }
});







$(document).ready(function () {
    $('.pick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, // tablet
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576, // mobile
                settings: { slidesToShow: 1 }
            }
        ]
    });
});
