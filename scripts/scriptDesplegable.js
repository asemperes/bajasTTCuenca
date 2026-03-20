    // Mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

if (burger) {
    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
}