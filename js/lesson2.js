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
