// import '../../node_modules/jquery';

// Импортируем Popper
//= ../../node_modules/popper.js/dist/umd/popper.js

// Импортируем необходимые js-файлы Bootstrap 4
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/alert.js
//= ../../node_modules/bootstrap/js/dist/button.js
//= ../../node_modules/bootstrap/js/dist/carousel.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/modal.js
//= ../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../node_modules/bootstrap/js/dist/popover.js
//= ../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../node_modules/bootstrap/js/dist/tab.js
//= ../../node_modules/bootstrap/js/dist/toast.js

// Импортируем другие js-файлы
// import 'my.js';
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {  anchor.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'none';

  const blockID = anchor.getAttribute('href').substr(1);
  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})}

$(".js-range-slider").ionRangeSlider({
  min: 0,
  max: 10,
  from: 9,
});

const burger = document.querySelector('.header__mobile');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

burger.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
