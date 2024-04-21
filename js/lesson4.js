// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

const user = {
    name: 'Sergey',
    lastName: 'Vitkovskyi',
    age: 25,
    email: 'hdgcdhj@khmail.com',

    info() {
        console.log(this);
    },
    modify(key, value) {
        if (key !== 'name' && key !== 'lastName') {
             alert('key is not valid');
        }else if(value.length > 3 && value[0] === value[0].toUpperCase()) {
        this[key] = value; 
        } else {
             alert('value is not valid')
        }
    }
};

/* user.modify('name', 'Igor');
console.log(user); */

 

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// user.modify('firstName', 'Vlad');

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

function addProperty(key, value) {
    this[key] = value;
}
user.addProperty = addProperty;
user.addProperty('friends', [
   {
     firstName: 'Mary',
     lastName: 'Smith',
     age: 32,
     email: 'marysmith@hotmail.com',
   },
  {
    firstName: 'Alex',
     lastName: 'Johnson',
     age: 45,
     email: 'alex.johnson@yahoo.com',
   },
   {
     firstName: 'Emily',
     lastName: 'Davis',
     age: 19,
     email: 'emilydavis@gmail.com',
   },
 ]);

/* console.log(user); */




//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

 const obj = {
   name: 'Bob',
   lastName: 'Lasso',
   age: 50,
   email: 'BodLasso@gmail.com',
 };
/* user.info.call(obj); */


//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

function showFullName(msg) {
    console.log(`${msg}, ${this.name}`);
}
/* showFullName.call(user, 'Hallo');
showFullName.call(obj, 'Buy-Buy'); 
showFullName.apply(obj, ['I am'])*/


//TODO:=========task-06=================
// Виправте помилки, щоб код працював

 /* const product = {
   price: 5000,

   showPrice() {
     console.log(this.price);
   },
 };

 function callAction(callback, context) {
   callback.call(context);
 }

callAction(product.showPrice, product); */

/* const product = {
  price: 5000,

  showPrice() {
    console.log(this.price);
  },
};

function callAction(callback) {
  callback();
}

callAction(product.showPrice.bind(product)); */

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.
class Order {
  #tableNumber;
  #items;
  #isPaid;

  constructor(tableNumber) {
    this.#tableNumber = tableNumber;
    this.#items = [];
    this.#isPaid = false;
  }

  calculateTotal() {
    return this.#items.reduce((acc, element) => (acc += element.price), 0);
  }

  markAsPaid() {
    this.#isPaid = true;
  }

  addItem(product) {
    this.#items.push(product);
  }

    removeItem(productName) {
        this.#items = this.#items.filter(element => element.name !== productName);
  }

    get isPaid() {
        return this.#isPaid;
    }

    get tableNumber() {
         return this.#tableNumber;
   }

    
}

class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Create menu items
 const item1 = new MenuItem('Burger', 10);
const item2 = new MenuItem('Fries', 5);
const item3 = new MenuItem('Drink', 2);

// Create an order
const order = new Order(1);

// Add items to the order
order.addItem(item1);
order.addItem(item2);
order.addItem(item3);

// Calculate the total and mark the order as paid
const total = order.calculateTotal();
order.markAsPaid();

console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
console.log(`Is paid: ${order.isPaid}`);

const order2 = new Order(2);
order2.addItem(item3);
order2.addItem(item1);

order2.removeItem('Drink');

const total1 = order2.calculateTotal();
order2.markAsPaid();
console.log(`Order for table ${order2.tableNumber} - Total: $${total1}`);
console.log(`Is paid: ${order2.isPaid}`);
