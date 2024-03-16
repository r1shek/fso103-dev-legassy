//! HW
//TODO:============task-01==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Please, you write number";
//   } else if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(3, 8));

//TODO:=========task-02=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage() {
  let sum = 0;
  let count = 0;
  for (let index = 0; index < arguments.length; index++) {
    if (typeof arguments[index] === "number") {
      sum += arguments[index];
      count++;
    } else {
      return "You must write number";
    }
  }
  return sum / count;
}

//TODO:=========task-03=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11

const numbers = [5, 11, 21, 8, 7, 15, 11];
let result;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 10 || numbers[i] % 2 !== 0) {
    continue; // переходимо до наступної ітерації циклу, якщо число менше або дорівнює 10 або є непарним
  } else {
    result = numbers[i]; // якщо число більше 10 та парне, зберігаємо його та завершуємо цикл
    break;
  }
}

console.log(result); // виводимо результат
//TODO: 1 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
const max = 10;
const min = 1;
let sumPaired = 0;
for (let index = max; index >= min; index--) {
  if (index % 2 === 0) {
    sumPaired += index;
  }
  console.log(sumPaired);
}

//TODO: 2 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

function numb(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuss";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buss";
  } else {
    return number;
  }
}

console.log(numb(5));
