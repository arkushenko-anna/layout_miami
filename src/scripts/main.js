'use strict';

const pageReload = document.querySelector('#submitButton');

pageReload.addEventListener('submit', function formReload(event) {
  event.preventDefault();

  pageReload.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});