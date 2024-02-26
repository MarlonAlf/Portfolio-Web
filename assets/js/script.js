
// SIDE BAR
var root = document.querySelector(':root');
var HTML_font = document.querySelector('html');
const bar_menu = document.querySelector('.menu__toggle');
const slide_menu = document.querySelector('.nav-bar__menu');
const reduce_main = document.querySelector('main');
const bars_x = document.querySelector('.fa-bars');
const x_bars = document.querySelector('.fa-xmark');
// console.log(root.style.fontSize);

var a = '30%';
var b = '20%';

var font = root.style.fontSize;

bar_menu.addEventListener('click', function() {
   
    if (HTML_font.style.fontSize != '18%') {

        root.style.fontSize = '18%';
   
    } else if (HTML_font.style.fontSize = '18%') { 

        root.style.fontSize = '30%';
    };

  

    slide_menu.classList.toggle('nav-bar__menu--active');
    reduce_main.classList.toggle('main--active');
    bars_x.classList.toggle('toggle--no-active');
    x_bars.classList.toggle('toggle--no-active');
    bar_menu.classList.toggle('menu__toggle--active');
    

});

// FLOATING ICON MENU
const nav_bar = document.querySelector('.nav-bar__menu');
const menu_icon = document.querySelectorAll('.menu__icon');
const menu_overlay = document.querySelectorAll('.menu__overlay');


window.addEventListener('scroll', () => {

    var scrolled = window.scrollY;
    if (scrolled >= 108) {
        nav_bar.classList.add('nav-bar__menu--floating');

        menu_icon.forEach(function(menu__icon) {
            menu__icon.classList.add('menu__icon--floating')
        });

        menu_overlay.forEach(function(menu__overlay) {
            menu__overlay.classList.add('menu__overlay--floating')
        }) ;

    } else {
        nav_bar.classList.remove('nav-bar__menu--floating');

        menu_icon.forEach(function(menu__icon) {
            menu__icon.classList.remove('menu__icon--floating')
        }) ;

        menu_overlay.forEach(function(menu__overlay) {
            menu__overlay.classList.remove('menu__overlay--floating')
        }) ;
    }
});

// CLICK TO SCROLL TO A SECTION

var click_home = document.querySelector('.menu__option__home');
var click_portfolio = document.querySelector('.menu__option__portfolio');

click_home.addEventListener('click', function() {
    alert('home');
    scroll = 220;
}
);

click_portfolio.addEventListener('click', function() {
    alert('portfolio');
    window.scrollTo(500, 0);
}
);
// actualizado
marrano


