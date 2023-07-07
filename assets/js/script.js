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


