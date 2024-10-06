/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

const prediction1 = "Скоро вы отправитесь в поездку.";
const prediction2 = "Сегодня чаще смотри по сторонам, рядом кое-что интересное!";
const prediction3 = "Берегите людей, после встречи с которыми, что-то светлое и радостное поселяется в вашей душе";
const prediction4 = "Осторожно, впереди волна впечатлений!";
const prediction5 = "Кушай сладости - это к радости!";

const forecast = document.querySelector('.current-forecast');
const button = document.querySelector('.forecast-btn');

button.addEventListener('click', function(event) {

    if (getRandomInt = 1) {
        forecast.append(prediction1);
    } else if (getRandomInt = 2) {
        forecast.append(prediction2);
    } else if (getRandomInt = 3) {
        forecast.append(prediction3);
    } else if (getRandomInt = 4) {
        forecast.append(prediction4);
    } else if (getRandomInt = 5) {
        forecast.append(prediction5);
    }
});

function getRandomInt(min, max) {
    return MathFloor(Math.random() * (max - min)) + min;
};

console.log(getRandomInt(1, 6));

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */