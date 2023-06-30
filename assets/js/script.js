const btnMobile = document.querySelector('.btn-menu-mobile');
let scrollHeight = document.body.scrollHeight;



function menuMobile(){
  const nav = document.querySelector('.header-nav-menu');
  const body = document.body;
  nav.classList.toggle('active');
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


