const hamburgerButton = document.getElementById('hamburger-button');
const wrapper = document.getElementsByClassName('wrapper')[0];
const hamburgerMenu = document.getElementById('menu');
const closeMenu = (event) => {
    if(event.target === hamburgerMenu){
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'
    }
};
const toggleMenu = () => {
    if(hamburgerMenu.style.display === '' || hamburgerMenu.style.display === 'none'){
        hamburgerMenu.style.display = 'flex';
        wrapper.style.position = 'fixed';
        hamburgerButton.src = './images/icon-close-menu.svg'
    }else{
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'

    }
};
hamburgerButton.addEventListener('click',toggleMenu);
window.addEventListener('click', closeMenu);