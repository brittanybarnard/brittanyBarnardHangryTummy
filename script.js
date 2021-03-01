//hamburger menu

function toggleClass() {
    const menu = document.querySelector('.navList');
    menu.classList.toggle('toggleCls');
}

const hamburgerMenu = document.querySelector('.hamburgerMenuIcon');

hamburgerMenu.addEventListener('click', toggleClass);
