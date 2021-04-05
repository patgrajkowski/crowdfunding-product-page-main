const hamburgerButton = document.getElementById('hamburger-button');
const wrapper = document.getElementsByClassName('wrapper')[0];
const hamburgerMenu = document.getElementById('menu');
const bookmarkButton = document.getElementById('bookmark-button');
let bookmarked = false;
const bookmarkImg = document.getElementById('bookmark-img');
const closeMenu = (event) => {
    if(event.target === hamburgerMenu){
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'
    }
};
const toggleMenu = () => {
    if(hamburgerMenu.style.display === ''){
        hamburgerMenu.style.toggle = 'flex';
        wrapper.style.position = 'fixed';
        hamburgerButton.src = './images/icon-close-menu.svg'

    }else{
        hamburgerMenu.style.display = '';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'

    }
};
const toggleBookmark = () => {
    console.log('xd');
    if(!bookmarked){
        bookmarkButton.classList.add('bookmarked');
        bookmarkButton.innerHTML = '<img src="./images/icon-bookmarked.svg" alt="icon-bookmark" id="bookmarked-img">Bookmarked';
        bookmarkButton.style.paddingRight = '1.5rem';
        bookmarked = true;
    }else{
        bookmarkButton.classList.remove('bookmarked');
        bookmarkButton.innerHTML = '<img src="./images/icon-bookmark.svg" alt="icon-bookmark" id="bookmark-img">Bookmark'
        bookmarkButton.style.paddingRight = '';
        bookmarked = false;
    }
}
hamburgerButton.addEventListener('click',toggleMenu);
window.addEventListener('click', closeMenu);
bookmarkButton.addEventListener('click', toggleBookmark);