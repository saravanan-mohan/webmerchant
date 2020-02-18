var navEl = document.getElementById('navContainer');
var carouselEl = document.getElementsByClassName('carousel-item')
function expand() {
    var expandEl = document.getElementById('expandBtn');
    expandEl.classList.toggle('expanded');
    navEl.classList.toggle('show');
}

function moveleft(n) {
    carouselEl[n].classList.remove('show');
    if(n <= 0) {
        n = carouselEl.length
    }
    carouselEl[n-1].classList.add('show');
}

function moveright(n) {
    carouselEl[n].classList.remove('show');
    if(n >= carouselEl.length-1) {
        n = -1
    }
    carouselEl[n+1].classList.add('show');
}