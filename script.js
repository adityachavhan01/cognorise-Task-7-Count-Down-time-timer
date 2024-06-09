let countdown;
const startButton = document.getElementById('startButton');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopupButton');

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    countdown = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            showPopup();
        }
    }, 1000);
}

function showPopup() {
    popup.style.display = "flex";
}

function hidePopup() {
    popup.style.display = "none";
}

startButton.addEventListener('click', () => {
    clearInterval(countdown);
    const inputMin = parseInt(inputMinutes.value, 10);
    const inputSec = parseInt(inputSeconds.value, 10);
    const timeInSeconds = (inputMin * 60) + inputSec;
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }
    hidePopup();  // Hide popup in case it was shown before
    startCountdown(timeInSeconds);
});

closePopupButton.addEventListener('click', hidePopup);
