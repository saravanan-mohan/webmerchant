var navEl = document.getElementById('navContainer');
function expand() {
    var expandEl = document.getElementById('expandBtn');
    expandEl.classList.toggle('expanded');
    navEl.classList.toggle('show');
}