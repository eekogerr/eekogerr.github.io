window.addEventListener('load', function () {
    let preloader = document.querySelector('.preloader');
    window.setTimeout(() => {
        preloader.style.opacity = 0;
    }, 1000)
    window.setTimeout(() => {
        preloader.style.display = 'none';
    }, 3000)
})
ScrollReveal().reveal('.top', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('.bottom', { reset: true, origin: 'bottom', delay: 300, distance: '100px' });
ScrollReveal().reveal('.left', { reset: true, delay: 700, origin: 'left', distance: '150px' });
ScrollReveal().reveal('.right', { reset: true, duration: 1000, interval: 500, origin: 'right', distance: '80px' });