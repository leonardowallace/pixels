/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (sectionLink) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionLink.classList.add('active-link');
            } else {
                sectionLink.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== HEADER SCROLL EFFECT ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show-scroll');
    } else {
        scrollUpBtn.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

/*=============== SWIPER MAPAS ===============*/
const swiperMaps = new Swiper('#maps-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: '#maps-swiper .swiper-button-next',
        prevEl: '#maps-swiper .swiper-button-prev',
    },
    pagination: {
        el: '#maps-swiper .swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});

/*=============== SWIPER AGENTES ===============*/
const swiperAgents = new Swiper('#agents-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
        nextEl: '#agents-swiper .swiper-button-next',
        prevEl: '#agents-swiper .swiper-button-prev',
    },
    pagination: {
        el: '#agents-swiper .swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});
