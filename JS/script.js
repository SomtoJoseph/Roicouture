const navbarToggle = document.querySelector('.navbar-toggle')
const navBar = document.querySelector('.navbar')

navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navBar.classList.toggle('active');
})

window.addEventListener('scroll', () =>{
    navbarToggle.classList.remove('active');
    navBar.classList.remove('active');
})