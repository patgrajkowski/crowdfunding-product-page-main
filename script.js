const hamburgerButton = document.getElementById('hamburger-button');
const wrapper = document.getElementsByClassName('wrapper')[0];
const hamburgerMenu = document.getElementById('menu');
const closeMenu = (event) => {
    if(event.target === hamburgerMenu){
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
    }
};
const toggleMenu = () => {
    if(hamburgerMenu.style.display === '' || hamburgerMenu.style.display === 'none'){
        hamburgerMenu.style.display = 'flex';
        wrapper.style.position = 'fixed';
    }else{
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
    }
};
hamburgerButton.addEventListener('click',toggleMenu);
window.addEventListener('click', closeMenu);