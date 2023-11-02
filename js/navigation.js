const mainMenuWrapper = document.querySelector('.nav');
const openModalMenu = document.querySelector('.open-mobile-menu');
const closeModalMenu = document.querySelector('.close-mobile-menu');
const navItem = document.querySelectorAll('.nav__menu-item');
const body = document.body;

openModalMenu.addEventListener('click', function() {
    mainMenuWrapper.classList.add('nav--show');
    body.classList.add('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            mainMenuWrapper.classList.remove('nav--show');
            body.classList.remove('modal-open');
        });
    });

    closeModalMenu.addEventListener('click', function() {
        mainMenuWrapper.classList.remove('nav--show');
        body.classList.remove('modal-open');
    });
});