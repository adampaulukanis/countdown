/* jshint esversion: 6, browser: true */
function returnDate(search) {
  let dateParam = new URLSearchParams(search);
  return dateParam.get('date');
}

(function (root) {
  'use strict';
  const year = new Date().getFullYear();
  const findDate = returnDate(location.search) || '2022-01-01T19:22';
  const chooseDate = new Date(findDate).getTime();

  function padZero(number) {
    let numberString = String(number);
    while (numberString.length < 2) {
      numberString = '0' + numberString;
    }
    return numberString;
  }

  let countdown = setInterval(function () {
    const today = new Date().getTime();
    const diff = chooseDate - today;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 99) {
      days = '99+';
      document.getElementById('countdown').innerHTML =
        '<div class="days"><div class="c-number">' +
        days +
        '</div>dni</div>' +
        '<div class="left">ZOSTAŁO</div></div>';
    } else {
      days = padZero(days);
      hours = padZero(hours);
      minutes = padZero(minutes);
      seconds = padZero(seconds);

      document.getElementById('countdown').innerHTML =
        '<div class="days"><div class="c-number">' +
        days +
        '</div>dni</div>' +
        '<div class="hours"><div class="c-number">' +
        hours +
        '</div>godziny</div>' +
        '<div class="minutes"><div class="c-number">' +
        minutes +
        '</div>minuty</div>' +
        '<div class="seconds"><div class="c-number">' +
        seconds +
        '</div>sekundy</div>' +
        '<div class="left">ZOSTAŁO</div></div>';
    }
  }, 1000);
})(this);

