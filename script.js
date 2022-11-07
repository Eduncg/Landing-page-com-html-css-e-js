var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

open = document.getElementById('open');
modal_container = document.getElementById('modal_container');
close = document.getElementById('close');

open2 = document.getElementById('open2');
modal_container2 = document.getElementById('modal_container2');
close2 = document.getElementById('close2');

open3 = document.getElementById('open3');
modal_container3 = document.getElementById('modal_container3');
close3 = document.getElementById('close3');

open4 = document.getElementById('open4');
modal_container4 = document.getElementById('modal_container4');
close4 = document.getElementById('close4');

open5 = document.getElementById('open5');
modal_container5 = document.getElementById('modal_container5');
close5 = document.getElementById('close5');

open6 = document.getElementById('open6');
modal_container6 = document.getElementById('modal_container6');
close6 = document.getElementById('close6');


open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


open2.addEventListener('click', () => {
  modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});

open5.addEventListener('click', () => {
  modal_container5.classList.add('show');
});

close5.addEventListener('click', () => {
  modal_container5.classList.remove('show');
});

open6.addEventListener('click', () => {
  modal_container6.classList.add('show');
});

close6.addEventListener('click', () => {
  modal_container6.classList.remove('show');
});