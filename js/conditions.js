"use strict";

// ! ======================================== УМОВИ ========================================

/*Напишіть скрипт, який попросить користувача ввести число.

Вивести повідомлення «Бінго!», якщо число більше 90, але менше 110, інакше вивести повідомлення: «Промах». Використовуйте інструкцію if.*/

// let number = +prompt(`Enter a number`, 0);

// if (number > 90 && number < 110) {
//     console.log("Бінго!");
// } else {
//     console.log("Промах");
// }

// -------------------------------------------------------------------------------------------

/*Перепишіть код з попереднього завдання, замінивши if на тернарний умовний оператор. */

// let result = number > 90 && number < 110 ? "Бінго" : "Промах";
// console.log(result);

// -------------------------------------------------------------------------------------------

/*Напишіть просту програму-калькулятор. Попросіть користувача ввести по черзі два числа і символ, що позначає математичну операцію, один з «+», «-», «*», «/». Якщо користувач ввів правильні дані, обчисліть результат і покажіть його користувачеві. Якщо користувач ввів неправильні дані, виведіть повідомлення, яке інформує користувача про те, що сталася помилка.

Пам'ятайте, що значення, яке повертає функція prompt, має тип string. Ви можете використовувати метод Number.isNaN, щоб перевірити, чи отримано правильне число після перетворення. Наприклад, виклик Number.isNaN(10) поверне false, а Number.isNaN(NaN) - true. */

// let number1 = +prompt(`Enter a first number`, 0);
// let number2 = +prompt(`Enter a second number`, 0);
// let operation = prompt(`Choose a symbol`, "«+», «-», «*», «/»");

// if (operation === "+") {
//     console.log(`${number1} + ${number2} = ${number1 + number2}`);
// } else if (operation === "-") {
//     console.log(`${number1} - ${number2} = ${number1 - number2}`);
// } else if (operation === "*") {
//     console.log(`${number1} * ${number2} = ${number1 * number2}`);
// } else {
//     console.log(`${number1} / ${number2} = ${number1 / number2}`);
// }

// ! =================================== ЛАБОРАТОРНА РОБОТА ===================================

/*Сценарій
Під час останньої модифікації програми зі списком контактів ми дозволили користувачеві додати новий контакт з даними, введеними користувачем під час виконання програми. Давайте підемо далі - спробуємо модифікувати програму так, щоб користувач мав вибір, що він хоче зробити зі списком. У нього буде вибір між

показувати перший контакт (перший)
показати останній контакт (last)
додавання нового контакту (new)
При додаванні нового контакту перевірте, чи користувач ввів всі необхідні дані. Якщо хоча б одне з трьох значень відсутнє (ім'я, телефон або електронна пошта), не додавайте контакт. */

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

// let userChoose = prompt(
//     "Choose an action:\n" +
//         "1. Show First Contact\n" +
//         "2. Show Last Contact\n" +
//         "3. Add New Contact\n" +
//         "4. Show All Contacts\n" +
//         "5. Exit"
// );

// if (userChoose === "Show First Contact") {
//     console.table(newContacts[0]);
// } else if (userChoose === "Show Last Contact") {
//     console.table(newContacts[newContacts.length - 1]);
// } else if (userChoose === "Add New Contact") {
//     let contactName = prompt(`Enter a name`, "Sofi Happy");
//     let contactPhone = prompt(`Enter a phone`, "095123888");
//     let contactEmail = prompt(`Enter an email`, "example@poshta.com");

//     if (contactName === "" || contactPhone === "" || contactEmail === "") {
//         console.log("Please enter the data");
//     } else {
//         newContacts.push({
//             name: contactName,
//             phone: contactPhone,
//             email: contactEmail,
//         });
//     }

//     console.log("New contact added:");
//     console.table(newContacts[newContacts.length - 1]);
// } else if (userChoose === "Show All Contacts") {
//     console.table(newContacts);
// } else {
//     console.log("Invalid action. Please choose a valid option.");
// }
