const mainHeader = document.querySelectorAll('#main-header');
const topNav = mainHeader[0].firstElementChild;

window.onscroll = function () {
    if (this.scrollY >= 10 && this.scrollY < 555) {
        topNav.style.visibility = 'hidden';
        topNav.style.opacity = '0';
    } else if (this.scrollY >= 555) {
        topNav.style.visibility = 'visible';
        topNav.style.opacity = '1';
        topNav.style.backgroundColor = '#fff';
        topNav.style.color = '#000';
        topNav.style.borderBottom = '2px solid gray';
    } else {
        topNav.style.visibility = 'visible';
        topNav.style.opacity = '1';
        topNav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        topNav.style.color = '#000';
        topNav.style.borderBottom = '0';
    }
}
