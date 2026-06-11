const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

function scrollProjects(direction) {
    const slider = document.getElementById('projectSlider');
    const scrollAmount = 330;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
});