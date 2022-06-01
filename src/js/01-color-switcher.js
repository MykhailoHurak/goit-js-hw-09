const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

const TIME_DELAY = 1000;
let timerId = null;

stopButton.setAttribute('disabled', 'true');
startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    timerId = setInterval(setBackgroundColor, TIME_DELAY);
    startButton.setAttribute('disabled', 'true');
    stopButton.removeAttribute('disabled');
};

function onStopButtonClick() {
    clearInterval(timerId);
    startButton.removeAttribute('disabled')
    stopButton.setAttribute('disabled', 'true');
};


function setBackgroundColor() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// ===============================
// Завдання 1 - перемикач кольорів

// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. 
// Подивися демо - відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове значення, 
// використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }