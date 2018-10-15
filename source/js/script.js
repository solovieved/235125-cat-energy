var navMain = document.querySelector('.mainNav');
var navToggle = document.querySelector('.mainNav__toggle');

navMain.classList.remove('mainNav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('mainNav--closed')) {
    navMain.classList.remove('mainNav--closed');
    navMain.classList.add('mainNav--opened');
  } else {
    navMain.classList.add('mainNav--closed');
    navMain.classList.remove('mainNav--opened');
  }
});
