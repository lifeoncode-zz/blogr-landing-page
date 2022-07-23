
// header changes background on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollPosition = this.pageYOffset;
    if (scrollPosition >= 520) {
        header.classList.add('background');
    } else {
        header.classList.remove('background');
    }
})


// desktop menu toggle
const navBtns = header.querySelectorAll('span');

navBtns.forEach(btn => {
    btn.addEventListener('click', drop);    
})

// mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', openMenu);


function openMenu(e) {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('src', './images/icon-close.svg')
    hamburger.removeEventListener('click', openMenu);
    hamburger.addEventListener('click', closeMenu);
}


function closeMenu(e) {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('src', './images/icon-hamburger.svg')
    hamburger.removeEventListener('click', closeMenu);
    hamburger.addEventListener('click', openMenu);
}


// menu dropdowns
const dropDownBtns = mobileMenu.querySelectorAll('.dropdown span');
const dropDownLinks = mobileMenu.querySelectorAll('a');

dropDownLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
})

dropDownBtns.forEach(btn => {
    btn.addEventListener('click', drop);
});


function drop() {
    this.lastElementChild.className = 'fas fa-angle-up';
    this.nextElementSibling.classList.add('drop');
    this.removeEventListener('click', drop)
    this.addEventListener('click', fold);
}


function fold() {
    this.lastElementChild.className = 'fas fa-angle-down';
    this.nextElementSibling.classList.remove('drop');
    this.removeEventListener('click', fold)
    this.addEventListener('click', drop);
}



