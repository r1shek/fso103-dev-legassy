//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

 /* function greet() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve("hello world");
       }, 2000)
   })
};
greet().then(result => console.log(result))
 */


//TODO:====================02==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

/* function promiseNumber() {
    return new Promise((resolve, reject) => {
        const value = prompt('Paste value');
        if (isNaN(value)) {
            return reject('Hallo');
        } else if (value % 2 === 0) {
            setTimeout(() => {
               return resolve('even')
            }, 1000) 
        } else {
            setTimeout(() => {
               return resolve('odd')
            }, 2000)
        }
    })
};

promiseNumber()
    .then(result => console.log(result))
    .catch(error => console.log(error))
 */




const list = document.querySelector(".js-ul");


function getPhotos() {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const END_POINT = '/photos';
    const params = new URLSearchParams({
        _limit: 20
    })
    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(
     (response) => {
       if (!response.ok) {
         throw new Error(response.status);
       }
       return response.json();
     }
   );
}


function createMarkup(arr) {
    return arr.reduce((html, { url, title }) => {
        return (html += `
        <li>
          <img src="${url}" alt="${title}">
        </li>
        `);
    }, "")
};
console.log('початок завантаження');
    
        getPhotos()
            .then(response => {
               list.insertAdjacentHTML('beforeend', createMarkup(response))
            })
        .catch((error) => console.log(error))
            .finally(() => console.log('Кінець завантаження'))


