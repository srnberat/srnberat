document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');

            document.querySelector('.wrapper').classList.add('swipe-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Durée de l'animation
        });
    });
});

window.addEventListener('load', () => {
    document.body.classList.remove('initial-load');
    document.querySelector('.wrapper').classList.add('swipe-in');
});
