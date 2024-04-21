//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divContainer = document.createElement('div');
divContainer.classList.add('number-container');
const boxes = 100;
for (let index = 0; index < boxes; index++) {
  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = randomNumber();
  if (div.textContent % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd');
  }
  divContainer.appendChild(div);
}
// console.log(divContainer);
const body = document.querySelector('body');
const boxesHtml = document.querySelector('.boxes');
// body.append(divContainer);
body.prepend(divContainer);

//boxesHtml.insertAdjacentHTML('afterbegin', '<p>Hello</p>');

//TODO:=========task-02=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const watchedFilms = ['film_2', 'film_4', 'film_5'];

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

const listElem = document.querySelector('.js-fil-list');

function createMarkup(films) {
  return films
    .map(
      ({ id, imgUrl, title }) => `
  <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li>
    `
    )
    .join('');
}
listElem.insertAdjacentHTML('afterbegin', createMarkup(films));
// listElem.innerHTML = createMarkup(films);

watchedFilms.forEach((id) => {
  const film = listElem.querySelector(`#${id}`);
  console.log(film);
  if (film) {
    film.style.opacity = 0.5;
  }
});

//TODO:=========task-03=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */
const input = document.querySelector('.js-username-input')
// input.addEventListener('input', onInput)
// function onInput(event ) {
// console.log(event.currentTarget.value);
// if (event.currentTarget.value.length > 6) {
//   event.currentTarget.classList.add('succes')
//   event.currentTarget.classList.remove('error')
// }
// else {
//   event.currentTarget.classList.add('error')
//   event.currentTarget.classList.remove('succes')
// }
// }
// input.addEventListener('focus', onFocus)
//  function onFocus(event){
//   console.log(event);
//   if (event.target.value.trim() === "") {
//     event.target.classList.add('error')
//     event.target.classList.remove('succes')
//   }
//   else {event.target.classList.add('succes')
//   event.target.classList.remove('error')
// }
//  }
// input.addEventListener('blur', onFocus)
//  function onFocus(event){
//   console.log(event);
//   if (event.target.value.trim() === "") {
//     event.target.classList.add('error')
//     event.target.classList.remove('succes')
//   }
//   else {event.target.classList.add('succes')
//   event.target.classList.remove('error')
// }
//  }
const form = document.querySelector('.js-contact-form')
form.addEventListener('submit', onSubmit)
function onSubmit(event) {
  event.preventDefault()
 const input = event.currentTarget.elements.userName.value.trim()
 const checkBox = event.currentTarget.elements.accept.checked 
 if (!input || !checkBox ) {
  return alert ('error') 
 }
 
 const userData = {
  userName: input 
 }
 console.log(userData);
 event.currentTarget.reset() 
//  console.log(checkBox);
}

//TODO:=========task-04=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */
