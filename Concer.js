const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('active');
    navbar.classList.toggle('active');
}