document.addEventListener("DOMContentLoaded", function () {
    
    $(document).ready(function () {
        $('.footer-scrool').click(function () {
            var target = $(this).data('scroll');

            $('body,html').animate({ scrollTop: target }, 1800);
        });
    });
    var menuNav = document.querySelector('.menu-nav');

    // Ваш обработчик событий для кнопки toggleMenuBtn
    document.getElementById('toggleMenuBtn').addEventListener('click', function (event) {
        event.preventDefault();
        if (menuNav.style.right == '-360px') {
            menuNav.style.right = '0';
        } else {
            menuNav.style.right = '-360px';
        }
    });
    document.getElementById('close').addEventListener('click', function (event) {
        event.preventDefault();

        menuNav.style.right = '-360px';
    });
});
