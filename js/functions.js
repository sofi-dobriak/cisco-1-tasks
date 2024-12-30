"use strict";

// ! ======================================== ФУНКЦІЙЇ ========================================

/*Масиви в JavaScript мають метод sort, який, як ви можете здогадатися, дозволяє сортувати його елементи. Цей метод приймає в якості аргументу функцію, яка буде порівнювати два елементи масиву. Функція повинна повернути нуль, якщо ми вважаємо, що аргументи однакові, значення менше нуля, якщо ми вважаємо, що перший елемент менший за другий, і значення більше нуля в іншому випадку. Погляньте на приклад:


function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
      retVal = -1;
     } else if(a > b) {
      retVal = 1;
     }
     return retVal;
}

let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]*/

// ----------------------------------------------------------------------------------------------

/*Спробуйте змінити наведений вище фрагмент коду так, щоб він був якомога коротшим */

// let numbers = [50, 10, 40, 30, 20];

// let resultASC = numbers.toSorted((a, b) => a - b);
// let resultDESC = numbers.toSorted((b, a) => a - b);

// console.log(resultASC);
// console.log(resultDESC);
// ----------------------------------------------------------------------------------------------

/*Напишіть функції за допомогою стрілочного функціонального виразу, намагаючись записати їх у найкоротшій формі.*/

// const add = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 + num2 : NaN;
// const sub = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 + num2 : NaN;
// const mult = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 * num2 : NaN;

// console.log(add(12, 10)); // -> 22
// console.log(mult(12, 10.1)); // -> NaN

// ----------------------------------------------------------------------------------------------

/*Напишіть функцію дії, яка отримує функцію зворотного виклику як перший аргумент, а інші два аргументи - як числа. Як функцію зворотного виклику ви зможете передати одну з трьох функцій з попередньої задачі. Функція дії викличе передану їй функцію зворотного виклику і поверне отриманий результат. Функція зворотного виклику прийме другий і третій аргументи з виклику дії.*/

// const add = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 + num2 : NaN;
// const sub = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 - num2 : NaN;
// const mult = (num1, num2) =>
//     Number.isInteger(num1) && Number.isInteger(num2) ? num1 * num2 : NaN;

// const action = (callbac, num1, num2) => {
//     return callbac(num1, num2);
// };

// console.log(action(add, 12, 10)); // -> 22
// console.log(action(sub, 12, 10)); // -> 2
// console.log(action(mult, 10, 10.1)); // -> NaN

// ----------------------------------------------------------------------------------------------

/*Напишіть програму, яка буде виводити на консоль послідовні цілі числа 10 разів з інтервалом у дві секунди (починаючи з числа 1). Використовуйте функції setInterval, clearInterval та setTimeout.*/

// let count = 1;

// let intervalId = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 10) {
//         clearInterval(intervalId);
//     }
// }, 2000);

// ! ======================================== ЛАБОРАТОРНА РОБОТА #1 ========================================

/*Сценарій
Наша програма досить сильно розрослася, що робить її трохи важкою для читання. Особливо це помітно в інструкції switch, де міститься більша частина логіки. Спробуйте організувати код програми за допомогою функцій. Опишіть і викличте три функції у відповідних місцях:

showContact: функція повинна приймати два аргументи, перший - список контактів, другий - індекс контакту, який потрібно відобразити; всередині функції перевірте, чи передаються коректні аргументи, тобто чи є контакти масивом (для цього використовуйте конструкцію instanceofArray);
showAllContacts: функція повинна отримувати один аргумент - список контактів; всередині функції перевірте, чи є переданий аргумент масивом;
addNewContact: функція отримує чотири аргументи - список контактів і дані нового контакту, тобто ім'я, телефон і номер; перед додаванням нового контакту перевірте, чи є переданий аргумент масивом і чи мають дані нового контакту якесь значення.

Дайте користувачеві можливість вибрати дію сортування зі списку. Коли користувач обирає цю опцію, він повинен мати можливість вказати, чи хоче він сортувати контакти за іменем, телефоном або електронною поштою.*/

// const newContacts = [
//     {
//         name: "Maxwell Wright",
//         phone: "(0191) 719 6495",
//         email: "Curabitur.egestas.nunc@nonummuyac.co.uk",
//     },

//     {
//         name: "Rija Vilarreal",
//         phone: "0866 398 2895",
//         email: "posuere.vulputate@sed.com",
//     },

//     {
//         name: "Helen Richards",
//         phone: "0800 1111",
//         email: "libero@convallis.com",
//     },
// ];

// function isArrayValid(contacts) {
//     return contacts instanceof Array;
// }

// function showContact(contact, index) {
//     if (!isArrayValid(contact) || index < 0 || index > contact.length) {
//         console.log("Invalid contacts list or index.");
//     }

//     console.table(contact[index]);
// }

// function showAllContacts(contacts) {
//     if (!isArrayValid(contacts)) {
//         console.log("Invalid contacts list.");
//         return;
//     }

//     console.table(contacts);
// }

// function addNewContact(contacts, name, phone, email) {
//     if (!isArrayValid(contacts)) {
//         console.log("Invalid contacts list.");
//         return;
//     }

//     if (!name || !phone || !email) {
//         console.log("Please provide valid name, phone, and email.");
//         return;
//     }

//     contacts.push({ name, phone, email });

//     console.log("New contact added:");
//     console.table(contacts[contacts.length - 1]);
// }

// function sortContact(contacts, parameter) {
//     if (!isArrayValid(contacts)) {
//         console.log("Invalid contacts list");
//         return;
//     }

//     if (!["name", "phone", "email"].includes(parameter)) {
//         console.log("Invalid parameter. Choose 'name', 'phone', or 'email'.");
//         return;
//     }

//     const sortedContacts = contacts.toSorted((a, b) =>
//         a[parameter].localeCompare(b[parameter])
//     );

//     console.log(`Contacts sorted by ${parameter}:`);
//     console.log(sortedContacts);
// }

// while (true) {
//     const userChoose = prompt(
//         "Choose an action:\n" +
//             "1. Show First Contact\n" +
//             "2. Show Last Contact\n" +
//             "3. Add New Contact\n" +
//             "4. Show All Contacts\n" +
//             "5. Sort Contacts\n" +
//             "6. Exit"
//     );

//     if (userChoose === "6" || userChoose === null) {
//         console.log("Exiting...");
//         break;
//     }

//     switch (userChoose) {
//         case "1":
//             showContact(newContacts, 0);
//             break;
//         case "2":
//             showContact(newContacts, newContacts.length - 1);
//             break;
//         case "3":
//             const name = prompt("Enter name");
//             const phone = prompt("Enter phone");
//             const email = prompt("Enter email");
//             addNewContact(newContacts, name, phone, email);
//             break;
//         case "4":
//             showAllContacts(newContacts);
//             break;
//         case "5":
//             const parameter = prompt(
//                 "Enter parameter to sort by: 'name', 'phone', or 'email'."
//             );
//             sortContact(newContacts, parameter);
//             break;
//         default:
//             console.log("Invalid option. Please choose a valid action.");
//     }
// }
