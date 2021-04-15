const navBar = () => {
  const iconMenu = document.querySelector('.header-burger');
  const cartIcon = document.querySelector('.header-cart');
  const menuBody = document.querySelector('.menu-body');
  if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      cartIcon.classList.toggle('_passive');
    });
    
  }
}

navBar();

