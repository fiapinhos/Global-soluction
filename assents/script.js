var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.style.backgroundColor = '#F29F05';
  } else {
    nav.style.backgroundColor = '';
  }
});
