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
  // if(nav.classList.contains('active')){
  //   document.querySelector('main').style.visibility = 'hidden';
  // } else {
  //   document.querySelector('main').style.visibility = 'visible';
  // }
  
  // if(nav.classList.contains('active')){
  //   document.querySelector('.header-menu-list').style.height = scrollHeight + 'px';
  // }
  // if(nav.classList.contains('active')){
  //   body.style.overflow = 'hidden'; 
  // } else {
  //   body.style.overflow = 'visible';
  // }
}

btnMobile.addEventListener('click', menuMobile)
btnMobile.addEventListener('touchstart', menuMobile)

const btnHistoria = document.querySelector('.btn-historia');
const sectionHistoria = document.querySelector('.nossa-historia');
let header = document.querySelector('header')


function showHistoria() {
  sectionHistoria.style.offsetHeight = header.offsetHeight + 200;
}
btnHistoria.addEventListener('click', showHistoria)



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