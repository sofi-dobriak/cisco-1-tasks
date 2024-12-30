"use strict";

// ! ======================================== ЦИКЛИ ========================================

/*Напишіть код, який буде виводити на консоль числа від 100 до 0, але з кроком 10, тобто 100, 90, 80... і т.д.*/

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// ----------------------------------------------------------------------------------------------

/*Модифікуйте попередню програму так, щоб вона запитувала у користувача перше і останнє число замість 100 і 0 (підказка: використовуйте діалогове вікно підказки). Перевірте правильність введених значень (чи є початкове значення більшим за кінцеве).*/

// let firstNumber = +prompt("Введіть перше число", 100);
// let secondNumber = +prompt("Введіть друге число", 5);

// for (let i = firstNumber; i >= secondNumber; i -= 5) {
//     if (firstNumber > secondNumber) {
//         console.log(i);
//     } else {
//         alert("Перше число повинно бути більшим за друге");
//     }
// }

// ----------------------------------------------------------------------------------------------

/*У наступному масиві чисел задано десять різних чисел. Напишіть програму, яка спочатку виведе на консоль усі ці числа, потім лише парні (підказка: остача від ділення парного числа на 2 дорівнює 0), потім лише ті, що більші за 10 і водночас менші за 60.*/

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// console.log("Усі числа");
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log("Парні числа");
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// console.log("Більше 10 і менші 60");
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10 && numbers[i] < 60) {
//         console.log(numbers[i]);
//     }
// }

// ----------------------------------------------------------------------------------------------

/*Напишіть програму з використанням циклу, яка буде запитувати у користувача назву фільму (перше запитання) та його рейтинг з сайту www.imdb.com (друге запитання). Програма дозволить вам ввести необмежену кількість фільмів у масив movies. Кожен елемент масиву буде об'єктом, що складається з двох полів: title та imdb. Введення буде завершено, якщо користувач натисне кнопку Cancel у діалоговому вікні. Далі програма повинна вивести на консоль спочатку всі фільми, які мають рейтинг менше 7, а потім ті, чий рейтинг більше або дорівнює 7. Назву фільму та його рейтинг слід виводити поруч, наприклад:
Lost in Translation (7.7)*/

// const movies = [];

// while (true) {
//     let userMovie = prompt("Введіть назву фільму", "Спіріт");

//     if (userMovie === "Exit" || userMovie === null) {
//         console.table(movies);
//         break;
//     }

//     let movieRating = +prompt("Введіть рейтинг фільму", 7.7);

//     if (userMovie === "") {
//         alert("Будь ласка, введіть назву фільму");
//         continue;
//     }

//     if (isNaN(movieRating) || movieRating === 0) {
//         alert("Будь ласка, введіть коректний рейтинг");
//         continue;
//     }

//     movies.push({ title: userMovie, imdb: movieRating });
// }

// ----------------------------------------------------------------------------------------------

/*Вміст об'єкта, що описує положення судна під назвою «Mareno», записаний на консолі:

LATITUDE -> 40.07288 
LONGITUDE -> 154.48535 
COURSE -> 285.6 
SPEED -> 14.0 
IMO -> 9175717 
NAME -> MARENO

Для цього використовується код, представлений нижче. Завершіть програму, оголосивши відсутній об'єкт на місці трьох крапок:
}*/

// let vessel = {
//     LATITUDE: 40.07288,
//     LONGITUDE: 154.48535,
//     COURSE: 285.6,
//     SPEED: 14.0,
//     IMO: 9175717,
//     NAME: "MARENO",
// };

// for (let key in vessel) {
//     console.log(`${key} -> ${vessel[key]}`);
// }

// ----------------------------------------------------------------------------------------------

/*Модифікуйте програму-калькулятор, яку ви створили в Модулі 4, Розділ 2, таким чином, щоб вона працювала в циклі до тих пір, поки користувач не введе Q в будь-якому з полів підказки.*/

// while (true) {
//     let input1 = prompt(`Enter a first number or type "Exit" to quit`);

//     if (input1 === "Exit" || input1 === "Q") {
//         break;
//     }

//     let number1 = +input1;

//     let input2 = prompt(`Enter a second number or type "Exit" to quit`);

//     if (input2 === "Exit" || input2 === "Q") {
//         break;
//     }

//     let number2 = +input2;

//     let operation = prompt(
//         `Choose an operation ("+", "-", "*", "/") or type "Exit"`
//     );

//     if (number1 === "Exit" || number1 === "Q") {
//         break;
//     }

//     if (operation === "+") {
//         console.log(`${number1} + ${number2} = ${number1 + number2}`);
//     } else if (operation === "-") {
//         console.log(`${number1} - ${number2} = ${number1 - number2}`);
//     } else if (operation === "*") {
//         console.log(`${number1} * ${number2} = ${number1 * number2}`);
//     } else {
//         console.log(`${number1} / ${number2} = ${number1 / number2}`);
//     }
// }

// ! ======================================== ЛАБОРАТОРНА РОБОТА ========================================

/*Сценарій
Ми можемо трохи вдосконалити нашу програму для роботи зі списком контактів за допомогою циклів. Тепер ви можете спробувати відобразити не тільки перший або останній контакт, але й усі контакти у списку, незалежно від їхньої кількості.

Крім того, спробуйте замкнути всю програму в цикл, щоб користувач неодноразово запитував, що він хоче зробити. Користувач може вибрати:

показати перший контакт (перший)
показати останній контакт (last)
відобразити всі контакти (all)
додати новий контакт (new)
вийти з програми (quit)
Після виконання обраної дії програма надасть можливість вибору ще раз. Програма повинна завершувати дії тільки після того, як користувач дасть певну команду, наприклад, quit. */

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

// let userChoose = "";

// while (true) {
//     userChoose = prompt(
//         "Choose an action:\n" +
//             "1. Show First Contact\n" +
//             "2. Show Last Contact\n" +
//             "3. Add New Contact\n" +
//             "4. Show All Contacts\n" +
//             "5. Exit"
//     );
//     if (userChoose === null || userChoose === "Exit") {
//         console.log("Exiting...");
//         break;
//     } else if (userChoose === "Show First Contact") {
//         console.table(newContacts[0]);
//     } else if (userChoose === "Show Last Contact") {
//         console.table(newContacts[newContacts.length - 1]);
//     } else if (userChoose === "Add New Contact") {
//         let contactName = prompt(`Enter a name`, "Sofi Happy");
//         let contactPhone = prompt(`Enter a phone`, "095123888");
//         let contactEmail = prompt(`Enter an email`, "example@poshta.com");

//         if (contactName === "" || contactPhone === "" || contactEmail === "") {
//             console.log("Please enter the data");
//         } else {
//             newContacts.push({
//                 name: contactName,
//                 phone: contactPhone,
//                 email: contactEmail,
//             });
//         }

//         console.log("New contact added:");
//         console.table(newContacts[newContacts.length - 1]);
//     } else if (userChoose === "Show All Contacts") {
//         console.table(newContacts);
//     } else {
//         console.log("Invalid action. Please choose a valid option.");
//     }
// }
