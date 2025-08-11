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







