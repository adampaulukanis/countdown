/* jshint esversion: 6, browser: true */
function returnParam(param) {
    const theParam = new URL(window.location.href).searchParams.get(param);

    console.log(param, theParam);

    return theParam;
}

function padZero(number) {
    let numberString = String(number);
    while (numberString.length < 2) {
        numberString = '0' + numberString;
    }
    return numberString;
}

(function (_) {
    'use strict';
    const year = new Date().getFullYear();
    const findDate = returnParam('date') || '2023-12-25';
    const chooseDate = new Date(findDate).getTime();

    let countdown = setInterval(function () {
        const today = new Date().getTime();
        const diff = chooseDate - today;

        let days    = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (isNaN(days)) return;

        if (days > 99 || days < -90) {
            document.getElementById('countdown').innerHTML =
                '<div class="days"><div class="c-number">' +
                days +
                '</div>days</div>' +
                '<div class="left">left</div></div>';
        } else {
            let hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            days = padZero(days);
            hours = padZero(hours);
            minutes = padZero(minutes);
            seconds = padZero(seconds);

            document.getElementById('countdown').innerHTML =
                '<div class="days"><div class="c-number">' +
                days +
                '</div>days</div>' +
                '<div class="hours"><div class="c-number">' +
                hours +
                '</div>hours</div>' +
                '<div class="minutes"><div class="c-number">' +
                minutes +
                '</div>minutes</div>' +
                '<div class="seconds"><div class="c-number">' +
                seconds +
                '</div>seconds</div>' +
                '<div class="left">left</div></div>';
        }
    }, 1000);
})(this);

