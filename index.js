function toggleMobileNav() {
    var navMobile = document.querySelector('.nav-mobile');
    navMobile.classList.toggle('open');
}

function closeMobileNav() {
    var navMobile = document.getElementById('.nav-mobile');
    navMobile.classList.remove('open');
}