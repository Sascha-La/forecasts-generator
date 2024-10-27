/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecast = document.querySelector('.current-forecast');
const textOfForecast = document.querySelector('.current-forecast h1');
const textOfProbability = document.querySelector('.current-forecast p');
const button = document.querySelector('.forecast-btn');
const element = document.querySelector('#forecast-item');
const savedPredictions = document.querySelector('.forecasts');

function getRandomInt(min, max) {
    return MathFloor(Math.random() * (max - min)) + min;
};
const randomNumber = getRandomInt(1, 6);

let predictionText = '';
const probability = getRandomInt(0, 101);

button.addEventListener('click', function(event) {

    if (randomNumber == 1) {
        predictionText = "Скоро вы отправитесь в поездку.";
        textOfProbability.textContent = probability;
    } else if (randomNumber == 2) {
        predictionText = "Сегодня чаще смотри по сторонам, рядом кое-что интересное!";
        textOfProbability.textContent = probability;
    } else if (randomNumber == 3) {
        predictionText = "Берегите людей, после встречи с которыми, что-то светлое и радостное поселяется в вашей душе";
        textOfProbability.textContent = probability;
    } else if (randomNumber == 4) {
        predictionText = "Осторожно, впереди волна впечатлений!";
        textOfProbability.textContent = probability;
    } else(randomNumber == 5) {
        predictionText = "Кушай сладости - это к радости!";
        textOfProbability.textContent = probability;
    }
});

function template(predictionText, probability) {
    const newElement = element.content.cloneNode(true);
    newElement.querySelector('h3').textContent = predictionText;
    newElement.querySelector('p').textContent = probability;

    return newElement;

};

const listItem = template();
savedPredictions.prepend(listItem);