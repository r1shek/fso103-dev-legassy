//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

/*const user = {
    name: 'Igor',
    hobby: 'tennis',
    age: 25,
    greet() {
        return `Hallo ${this.name}`;
    }
};
 console.log(user.name);
console.log(user['name']); 
const user1 = Object.create(user);
user1.name = 'Anna';
console.log(user1.greet());
console.log(user.greet());
user.mood = 'happy';
console.log(user);
user.name = 'Sergiy';
console.log(user);*/

//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.
/* const square = {
  width: 100,
  height: 150,
    calculateArea() {
        return this.width * this.height;
  }
};

console.log(square.calculateArea()); */

//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.
/* const market = {
    items: [],
    hasProduct(productName) {
        return this.items.includes(productName);
    },
    addProduct(product) {
        this.items.push(product)
    }
};

console.log(market.addProduct('milk'));
console.log(market.addProduct('beer'));
console.log(market.addProduct('apple'));
console.log(market.items);

console.log(market.hasProduct('tomato')); */

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.
// const card = {
//     goods: [],
//     price: [],
//     calculateTotal() {
//         let totalSum = 0;
//         for (const number of this.price) {
//             totalSum += number;
//         }
//         return totalSum;
//     },
//     addProduct(productName, price) {
//         this.price.push(price)
//         this.goods.push(productName)
//     }
// }
// card.addProduct ("phone", 7000)
// card.addProduct("playStation", 15000)

// console.log(card.calculateTotal ());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-05======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// console.log(Object.keys(obj)) ;
// function getBool (obj, key) {
//     const keysArrey = Object.keys(obj)
//     return keysArrey.includes(key)
// }
// console.log(getBool(obj, "car")); // true

//TODO:============task-06======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function totalSalary(obj) {
//   let sum = 0;
//   const valuesArray = Object.values(obj);
//   for (const salary of valuesArray) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(totalSalary(salaries));
//TODO:============task-07======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-8==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];

//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції.
// Колбек - функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const res = getNewArray(numbers);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
// { name: "John", age: 27 },
// { name: "Jane", age: 31 },
// { name: "Bob", age: 19 },
// ];

// const res = getAge(users);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

//const numbers = [1, 2, 3, 4, 5];

//const res = totalSum(numbers);
//console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

//const arr = [1, 2, 3, 4, 5];

//const res = averageValue(arr);
//console.log(res);
