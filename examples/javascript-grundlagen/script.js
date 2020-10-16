let width = 0;
let height = 0;

function getWindowSize() {
    width = window.innerWidth;
    height = window.innerHeight;

    console.log('Breite: ' + width);
    console.log('Höhe: ' + height);

    const widthElement = document.getElementById('window-width');
    const heightElement = document.getElementById('window-height');

    if (widthElement && heightElement) {
        widthElement.innerHTML = width;
        heightElement.innerHTML = height;
    }
}

function getTime() {
    const d = new Date();
    const timeElement = document.getElementById('clock');

    if (timeElement) {
        let seconds = d.getSeconds();
        let minutes = d.getMinutes();
        let hours = d.getHours();

        function setTime() {
            timeElement.innerHTML = hours + ':' + minutes + ':' + seconds;
        }

        setInterval(function () {
            setTime();

            seconds = seconds + 1;
            if (seconds >= 60) {
                seconds = 0;
                minutes = minutes + 1;
            }

            if (minutes >= 60) {
                minutes = '00';
                hours = hours + 1;
            }

            if (hours >= 24) {
                hours = 0;
            }
        }, 1000);

    }
}

function initFunctions() {
    getWindowSize();
    getTime();
}


window.onload = initFunctions();