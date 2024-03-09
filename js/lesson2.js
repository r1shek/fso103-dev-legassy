//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const str = "abcde";

// if (str[0] === "a") {
// console.log ("yes")
// } else {
//     console.log ("not")
// }

// const srt1 = str[0]=== "a" ? console.log("yes") : console.log("not")
// str.startsWith("c") ? console.log("yes") : console.log("not")

//TODO: 2 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const value = 73;

// if (value >= 55 && value <= 99) {
//     console.log("Число потрапляє в діапазон");
// }else {
//     console.log("Число не потрапляє в діапазон");
// }

// value >= 55 && value <= 99 ? console.log("Число потрапляє в діапазон") : console.log("Число не потрапляє в діапазон")

//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = -155;

// if (ageMaxim >= 0 && ageMaxim <= 16) {
//   console.log('Child');
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log('Adult');
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log(' Old people');
// } else {
//   console.log(' Not a human');
// }

//TODO: 4 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.
// const drink = prompt(
//   'Which drink choose client:tea, juice, coffe'
// ).toLowerCase();

// function orderDrink(drink) {
//   let price = 0;
//   switch (drink) {
//     case 'coffe':
//       price = 50;
//       break;

//     case 'juice':
//       price = 40;
//       break;

//     case 'tea':
//       price = 30;
//       break;

//     default:
//       alert('error');
//       break;
//   }
//   alert(`Your order ${price}`);
// }
// orderDrink(drink);

// TODO: 5 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// const num = 1000;
// let count = 0;
// while (num >= count) {
//   console.log(count);
//   count += 1;
// }

// let num = Number.parseFloat(prompt('Input number over 100'));

// while (num < 100) {
//   num = Number.parseFloat(prompt('Input number over 100'));
// }

//TODO: 6 ===================================
// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

/* for (let index = 1; index <= 100; index++) {
    if (index === 49) {
        console.log(index); 
        break;
    }
   console.log(index);
}; */

/* for (let index = 1; index <= 100; index++) {
    console.log(index);
    if (index !== 49) {
       
        continue;
    } else {
        console.log(index);
    }   
};*/

// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

/* const styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-рол');
console.log(styles);

/* for (let i = 0; i < styles.length; i += 1) {
    if (styles[i] === 'Блюз') {
        styles[i] = "Класика";
    }
};*/
/* styles.unshift('rep'); */
/*const index = styles.indexOf('Блюз');
styles[index] = 'Класика';
console.log(styles); 

const firstElement = styles.shift();
console.log(firstElement);
console.log(styles); */

//TODO:=============task-02=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

/* const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumArray(array) {
    const newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i] + array[i + 1]);
    }
    return newArray;
};
console.log(sumArray(someArr));
 */

//TODO:=============task-3=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

/* const str = "This is a new line";
 
function countVowels(str) {
     let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
     for (let index = 0; index < str.length; index++) {
         const letter = str[index];
         if (vowels.includes(letter)) {
             count += 1;
         }
        
    }
    return `Містить ${count} голосних`;
};

console.log(countVowels(str)); */

//TODO:=========task-5=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.

// const wordsArray = ['JavaScript', 'HTML', 'CSS'];

// function updArray(array, item) {
//   const index = array.indexOf(item);

//   index === -1 ? wordsArray.push(item) : wordsArray.splice(index, 1);
//   return wordsArray;
// }
// console.log(updArray(wordsArray, 'React'));

//! HW
//TODO:============task-01==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//TODO:=========task-02=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

//TODO:=========task-03=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11

//TODO: 1 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

//TODO: 2 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz
