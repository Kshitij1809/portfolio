
// menu-icon
let menu = document.querySelector('.menu-icon')

menu.addEventListener('click', () => {
    menu.classList.toggle('move')
    if (document.getElementById('nav-menu-icon').style.display == "block") {
        document.getElementById('nav-menu-icon').style.display = "none"
    }
    else {
        document.getElementById('nav-menu-icon').style.display = "block"
    }
})

// header
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
})

