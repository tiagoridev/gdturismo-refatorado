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


