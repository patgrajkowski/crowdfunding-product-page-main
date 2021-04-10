const hamburgerButton = document.getElementById('hamburger-button');
const wrapper = document.getElementsByClassName('wrapper')[0];
const hamburgerMenu = document.getElementById('menu');
const bookmarkButton = document.getElementById('bookmark-button');
let bookmarked = false;
let hamburgerMenuActive = false;
const bookmarkImg = document.getElementById('bookmark-img');
let mobileView;
const closeMenu = (event) => {
    if(event.target === hamburgerMenu){
        hamburgerMenu.style.display = 'none';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'
    }
};
const toggleMenu = () => {
    if(!hamburgerMenuActive){
        hamburgerMenuActive = true;
        hamburgerMenu.style.display = 'flex';
        wrapper.style.position = 'fixed';
        hamburgerButton.src = './images/icon-close-menu.svg'

    }else{
        hamburgerMenuActive = false;
        hamburgerMenu.style.display = '';
        wrapper.style.position = '';
        hamburgerButton.src = './images/icon-hamburger.svg'
    }
};
const toggleBookmark = () => {
    if(!bookmarked){
        if(!mobileView){
            document.getElementById('bookmark-text').innerText = 'Bookmarked';
            document.getElementById('bookmark-text').classList.add('bookmarked-color');
            bookmarkButton.classList.add('bookmarked');
        }
        document.getElementById('bookmark-img').src = './images/icon-bookmarked.svg';
        bookmarked = true;
    }else{
        bookmarkButton.classList.remove('bookmarked');
        document.getElementById('bookmark-img').src = './images/icon-bookmark.svg';
        document.getElementById('bookmark-text').style.color = ''
        document.getElementById('bookmark-text').innerText = 'Bookmark'
        bookmarked = false;
    }
}
const changeView = () => {
    mobileView = window.matchMedia("(max-width: 600px)").matches ? true : false;
    if(mobileView && bookmarked){
        document.getElementById('bookmark-text').innerText = '';
    }
    if(!mobileView && bookmarked){
        document.getElementById('bookmark-text').innerText = 'Bookmarked';
        bookmarkButton.classList.add('bookmarked');
    }
    if(!mobileView && hamburgerMenuActive ){
        toggleMenu();
    }
}
changeView();
window.matchMedia("(max-width: 600px)").addEventListener('change',changeView);
hamburgerButton.addEventListener('click',toggleMenu);
window.addEventListener('click', closeMenu);
bookmarkButton.addEventListener('click', toggleBookmark);