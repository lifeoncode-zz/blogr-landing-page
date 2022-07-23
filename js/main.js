const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollPosition = this.pageYOffset;
    if (scrollPosition >= 520) {
        header.classList.add('background');
    } else {
        header.classList.remove('background');
    }
})