const btnMenu = document.querySelector('.btn-nav'),
      menuWrapper = document.querySelector('.navigation-menu');
      bodyoverflow = document.querySelector('body');
      
btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    btnMenu.classList.toggle('active');
    menuWrapper.classList.toggle('active');
    bodyoverflow.classList.toggle('overflov');
});
