const btnMobile = document.querySelector('.btn-menu-mobile');
let scrollHeight = document.body.scrollHeight;

function menuMobile(event){
  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.header-nav-menu');
  const body = document.body;
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }  
}
btnMobile.addEventListener('click', menuMobile)
btnMobile.addEventListener('touchstart', menuMobile)

const btnMenu = [...document.querySelectorAll('.header-menu-item')];
function selectSection(){
  const nav = document.querySelector('.header-nav-menu');
  nav.classList.remove('active');
}
btnMenu.forEach(btnMenuItem => {
  btnMenuItem.addEventListener('click', selectSection)
})

const btnTop = document.querySelector('.btn-top-box')
window.addEventListener('scroll', function(event){
  if(window.scrollY > 200){
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
})

btnTop.addEventListener('click', function(){
  window.scrollTo(0,0)
})


// Animations //

// Debounce
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const animationItems = [...document.querySelectorAll('[data-animation]')];
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.scrollY + (window.innerHeight * 0.75);
  animationItems.forEach(function(item){
    if((windowTop) > item.offsetTop) {
      item.classList.add(animationClass);
    } else {
      item.classList.remove(animationClass);
    }
    
  })
}

animeScroll();

if(animationItems.length) {
  window.addEventListener('scroll', debounce(function(){
    animeScroll()
    console.log('teste')
  }, 100));  
}


