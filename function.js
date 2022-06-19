/* jshint esversion: 6, browser: true */
function returnDate(search) {
    let dateParam = new URLSearchParams(search);
    return dateParam.get('date');
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
    const h1a = document.querySelector('h1 a');
    const year = new Date().getFullYear();
    const findDate = returnDate(location.search) || h1a.innerText;
    const chooseDate = new Date(findDate).getTime();
    console.log(location.search, findDate);

    let href = findDate;
    h1a.setAttribute('href', '/?date=' + href);
    h1a.innerText = href;

    let countdown = setInterval(function () {
        const today = new Date().getTime();
        const diff = chooseDate - today;

        let days    = Math.floor(diff / (1000 * 60 * 60 * 24));

        console.log(`days=${days}`);
        if (isNaN(days)) return;

        if (days > 99 || days < -90) {
            document.getElementById('countdown').innerHTML =
            '<div class="days"><div class="c-number">' +
                days +
                '</div>dni</div>' +
                '<div class="left">ZOSTAŁO</div></div>';
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

