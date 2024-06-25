/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        navClose.style.display = 'block'
        navToggle.style.display = 'none'
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navClose.style.display = 'none'
        navToggle.style.display = 'block'
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link:not(.dropdown-toggle)')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link that is not a dropdown, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navClose.style.display = 'none'
    navToggle.style.display = 'block'
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownToggle = document.querySelectorAll('.dropdown-toggle')

dropdownToggle.forEach(dt => {
    dt.addEventListener('click', function (event) {
        event.stopPropagation() // Prevent closing the main menu
        const dropdownMenu = this.nextElementSibling
        dropdownMenu.classList.toggle('show-dropdown')

        // Close other open dropdowns
        document.querySelectorAll('.nav__dropdown').forEach(dm => {
            if (dm !== dropdownMenu) {
                dm.classList.remove('show-dropdown')
            }
        })
    })
})

/* Close dropdown menu when a dropdown link is clicked */
const dropdownLinks = document.querySelectorAll('.nav__dropdown-link')

dropdownLinks.forEach(dl => {
    dl.addEventListener('click', function () {
        const dropdownMenu = this.closest('.nav__dropdown')
        dropdownMenu.classList.remove('show-dropdown')

        // Optionally close the main menu if desired when clicking a dropdown link
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
        navClose.style.display = 'none'
        navToggle.style.display = 'block'
    })
})

/* Close dropdown menu when clicking outside */
document.addEventListener('click', function (event) {
    const isClickInside = navMenu.contains(event.target) || event.target.matches('.dropdown-toggle')
    if (!isClickInside) {
        document.querySelectorAll('.nav__dropdown').forEach(dm => {
            dm.classList.remove('show-dropdown')
        })
    }
})

/* Prevent closing dropdown on scroll */
document.querySelectorAll('.nav__dropdown').forEach(dd => {
    dd.addEventListener('scroll', function (event) {
        event.stopPropagation()
    })
})



/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== SWIPER MAPAS ===============*/
let swiperMaps = new Swiper('.maps__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto',
        },
        768:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
  });